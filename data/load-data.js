const _ = require('lodash')
const { requestURL, parseCSVString, splitJSON, cleanArrayStrings, checkArrayStr, buildNewArray, writeJSONFile, splitHeader, splitContent, extractURL, asyncBatch, filterArray, convertHashToFloat, deleteKeysInHashArray, formatArrayToHash } = require('./utils.js')

// URLS
const url_sdgs = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhzvOoTo2_mxpq4xeQf2z8R665YPxt79-ANi8zyeQi_4AITlPVXnr7n7c1PJAI3MpHI3Skf0qjBqZj/pub?output=csv'

// Headers that should be included in the final data file
const sdg_header = ['number', 'slug', 'color', 'labelShort', 'labelLong', 'textIntro', 'textIndicators', 'summaryDns', 'summary2030']
// row the should be used as key
const sdg_numbers = ['number']
// path to where the file with SDG data should be written
const sdg_file = './sdgs.json'

// Used to set label based on process value
const sdg_ratings = [
	{
		'label': 'sehr geringe Nachhaltigkeit',
		'value': 0
	}, {
		'label': 'geringe Nachhaltigkeit',
		'value': 20
	}, {
		'label': 'mittlere Nachhaltigkeit',
		'value': 40
	}, {
		'label': 'hohe Nachhaltigkeit',
		'value': 60
	}, {
		'label': 'sehr hohe Nachhaltigkeit',
		'value': 80
	}]

// Load SDG data
console.log('Requesting SDG data…')
requestURL(url_sdgs, raw => {
	console.log('Parsing SDG data…')
	// Parse csv file
	parseCSVString(raw, json => {
		console.log('Splitting SDG data…')
		// Split JSON into header and content
		splitJSON(json, splitedJSON => {
			const [rawHeader, content] = splitedJSON
			console.log('Cleaning SDG header data…')
			// Clean header names
			cleanArrayStrings(rawHeader, header => {
				console.log('Checking SDG header data…')
				// Check if header contains necessary keys
				checkArrayStr(sdg_header, header, () => {
					console.log('Building SDG data…')
					// Create an array with defined keys
					const arr = buildNewArray(sdg_header, header, content, sdg_numbers)
					console.log('Requesting Indicator data…')
					// Request indicator data to merge data
					requestIndicators(arr, indicators => {
						console.log('Processing SDG data…')
						const data = processSDGs(arr, indicators)
						console.log('Writing SDG data…')
						// Write merged file to json
						writeJSONFile(sdg_file, formatArrayToHash(data, 'slug'))
					})
				})
			})
		})
	})
})

function processSDGs(sdgs, allIndicators) {
	return _.map(_.filter(sdgs, 'number'), sdg => {
		// Filter empty rows
		const indicators = _.filter(allIndicators, ['sdg', sdg['number']])

		// Group indicators by author
		const { dns: indi_dns, okf: indi_okf } = _.groupBy(indicators, 'author')

		// Filter okf indicators for display
		const usableValuesOKF = _.filter(indi_okf, i => {
			if (i['uncalculable']) { return false }
			return !_.isNaN(i['progress'] || _.isNull(i['progress']))
		})

		// Filter dns indicators for calculation
		const calcubaleValuesDNS = _.filter(indi_dns, i => {
			if (i['uncalculable']) { return false }
			if (_.isNaN(i['progress']) || _.isNull(i['progress'])) { return false }
			return true
		})

		// Filter dns indicators for display
		const usableValuesDNS = _.filter(calcubaleValuesDNS, i => {
			if (i['badIndicator']) { return false }
			if (i['modTarget']) { return false }
			return true
		})

		// Combine all usable indicators in one array
		const usableValuesCombined = [...usableValuesOKF, ...usableValuesDNS]

		// Create enriched sdg object
		const _sdg = {
			...sdg,
			'values': {
				// Calculate average values
				'dns': _.sumBy(calcubaleValuesDNS, 'progress') / calcubaleValuesDNS.length,
				'okf': _.sumBy(usableValuesCombined, 'progress') / usableValuesCombined.length
			},
			'ind': {
				// Delete unused keys in array
				'dns': deleteKeysInHashArray(indi_dns, ['countries', 'timeline', 'txtintroduction', 'txttarget', 'txtdescription', 'txtcategory']),
				'okf': deleteKeysInHashArray(indi_okf, ['countries', 'timeline', 'txtintroduction', 'txttarget', 'txtdescription', 'txtcategory'])
			},
			'n': {
				// Count the amount of indicators for various properties
				'baT': _.countBy(indi_dns, 'badTarget').true || 0,
				'baI': _.countBy(indi_dns, 'badIndicator').true || 0,
				'moT': _.countBy(indi_dns, 'modTarget').true || 0,
				'unc': _.countBy(indi_dns, 'uncalculable').true || 0,
				'spi': _.countBy(indi_dns, 'spill').true || 0,
				'uokf': usableValuesOKF.length,
				'udns': usableValuesDNS.length,
				'dns': indi_dns.length,
				'okf': indi_okf.length,
				'alt': usableValuesCombined.length
			}
		}

		// Add labels to sdg
		_sdg['rating'] = { 'dns': '', 'okf': '' }
		_.each(sdg_ratings, rating => {
			// Assign label if value is above threshold
			if (_sdg['values']['dns'] > rating.value) {
				_sdg['rating']['dns'] = rating.label
			}
			// Assign label if value is above threshold
			if (_sdg['values']['okf'] > rating.value) {
				_sdg['rating']['okf'] = rating.label
			}
		})

		return _sdg
	})
}

// URL to the indicator table
const url_indicators = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ahlC5LRwgUGaNsmxhvK4-VLo-Is7H8GjYzYHFjFCthakj6AGiKkrAVp3w5KCYG-d7aThnElewYwi/pub?output=csv'

// List of keys that should be present for the dns indicators
const indi_headers_dns = ['sdgId', 'sdgName', 'dnsId', 'slug', 'dnsName', 'aussageloserZielwert', 'modifizierterZielwert', 'ungeeignetX', 'spillover', 'dnsUnit',
	'dnsGoal', 'zielwertJahr2030', 'jahrlicherZielwert', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert', 'ausgangswertJahr', 'begrundung',
	'nicht2030WKatalog', 'landerVergleich', 'zeitreihe', 'url', 'dnsIconUebernommen', 'dnsIconUngeeignet', 'dnsIconNichtBewertbar', 'dnsIconNichtBerechenbar', 'dnsIconInternationaleAuswirkungen']
// List of keys that should be present for the okf indicators
const indi_headers_okf = ['2030Id', 'slug', '2030Name', '2030Unit', '2030Goal', 'zielwertJahr2030', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert',
	'ausgangswertJahr', 'begrundung', 'zeitreihe', 'laendervergleich', 'spillover', 'neuesThema',
	'okfIconNeuesThema', 'okfIconUebernommen', 'okfIconModifiziert', 'okfIconInternationaleAuswirkungen',
	'datenpate', 'datenpateLogo', 'datenpateUrl', 'datenpateText',
	'datenpateContact', 'datenpateMail', 'url', '2030WDatensatz', 'potenziellerDatenpate']
// Key of the cell that holds the id of the SDG
const indi_sdgID = 'sdgId'
// List of keys that are numbers and need to be converted
const indi_numbers = ['zielwertJahr2030', 'aktuellerWert', 'ausgangswert']
// List of new names for these keys
const indi_numbers_keys = ['target', 'current', 'start']
// Key that is used to split table between dns and okf indicators
const indi_splitKey = '2030Id'
// Key that indicates the id for dns indicators
const indi_dnsID = 'dnsId'
// Key that indicates the id for okf indicators
const indi_okfID = '2030Id'
// Target file name for the indicators
const indi_file = './indicators.json'

// Load indicator meta data
function requestIndicators(sdgs, callback) {
	console.log('Requesting indicator data…')
	// Request indicator url
	requestURL(url_indicators, raw => {
		console.log('Parsing indicator data…')
		// Parse loaded data
		parseCSVString(raw, json => {
			console.log('Splitting indicator data…')
			// Split CSV between header and content
			splitJSON(json, splitedJSON => {
				const [rawHeader, content] = splitedJSON
				console.log('Cleaning indicator header data…')
				// Clean array strings
				cleanArrayStrings(rawHeader, header => {
					console.log('Checking indicator header data…')
					// Check if all required keys are present
					checkArrayStr([...indi_headers_dns, ...indi_headers_okf], header, () => {
						// Split header based on key to seperate dns and okf headers
						splitHeader(indi_splitKey, header, indi_dnsID, indi_okfID, splittedHeader => {
							const [headerDNS, headerOKF, splitPoint] = splittedHeader
							console.log('Splitting indicator content data…')
							// Split content based on split point generated from header splitting to seperate dns and okf headers
							splitContent(splitPoint, content, splittedContent => {
								const [rawContentDNS, rawContentOKF] = splittedContent

								// Filter empty rows caused by table layout
								const contentDNS = filterArray(rawContentDNS, indi_dnsID, headerDNS)
								const contentOKF = filterArray(rawContentOKF, indi_okfID, headerOKF)

								// Build new array consisting of defined keys. Also convert numbers
								const arrDNS = buildNewArray(indi_headers_dns, headerDNS, contentDNS, [...indi_numbers, indi_sdgID], indi_dnsID)
								const arrOKF = buildNewArray(indi_headers_okf, headerOKF, contentOKF, [...indi_numbers, indi_sdgID], indi_okfID)

								// Merge all indicators in single array
								const indicators = arrDNS.concat(arrOKF)
								processIndicators(indicators, arr => {
									callback(arr)
									// As some indicators reference each other as modified, the targets should also be marked
									const marked = markModifiedIndicators(arr)
									console.log('Writing indicator data…')
									// Merge SDG data into indictors for links, color, label, … and write to file
									writeJSONFile(indi_file, formatArrayToHash(mergeSDGIntoIndicators(sdgs, marked), 'slug'))
								})
							})
						})
					})
				})
			})
		})
	})
}

function processIndicators(indicators, callback) {
	// Process indicators by passing function to parse indicator meta data and a function to parse indicator detal data.
	// After all indicators have been parsed in async the callback function is called
	asyncBatch(indicators, processIndicatorMeta, processIndicatorDetail, arr => {
		callback(arr)
	})
}

function mergeSDGIntoIndicators(sdgs, indicators) {
	// Merge corresponding SDG data into every indicator
	return _.map(indicators, indicator => {
		const sdg = _.find(sdgs, ['number', indicator['sdg']])
		return {
			...indicator,
			'sdg': {
				'sdg': indicator['sdg'],
				'slug': sdg['slug'],
				'color': sdg['color'],
				'label': sdg['labelShort']
			}
		}
		return indicator
	})
}

function markModifiedIndicators(indicators) {
	// As some indicators reference each other as modified, the targets should also be marked
	console.log('Start marking modified indicators')
	// Create list of alternative (modded) indicators
	const targets = _.pull(_.map(indicators, i => {
		return _.get(i, 'altIndicator')
	}), undefined)
	console.log('Modified indicators found: ' + targets.join(', '))
	_.each(indicators, i => {
		// Only check okf indicators
		if (i['author'] === 'okf') {
			// Check if indicator id could be found in list of alternative indicators
			if (_.indexOf(targets, i['id']) >= 0) {
				// Marked as modded target as this is the (alternative) indicator with the new target. The original indicator is marked as mod target
				i['moddedTarget'] = true
				console.log('Indicator »' + i['label'] + '« marked as modified')
			}
		}
	})
	return indicators
}

function processIndicatorMeta(indicator) {
	// Author based on presence of dns id
	const author = _.has(indicator, 'dnsId') ? 'dns' : 'okf'
	// Label of the indicator
	const label = _.has(indicator, 'dnsName') ? indicator['dnsName'] : indicator['2030Name']
	// Id of the indicator
	const id = _.has(indicator, 'dnsId') ? indicator['dnsId'] : indicator['2030Id']
	// Unit of the indicator
	const unit = _.has(indicator, 'dnsUnit') ? indicator['dnsUnit'] : indicator['2030Unit']
	// Goald of the indicator
	const goal = _.has(indicator, 'dnsGoal') ? indicator['dnsGoal'] : indicator['2030Goal']

	// Construct object with these properties
	const i = {
		id,
		author,
		label,
		unit,
		goal
	}

	// Estimate SDG either by reading cell or calcuating from id
	i['sdg'] = _.has(indicator, indi_sdgID) ? indicator[indi_sdgID] : parseInt(id.split('_')[0])

	// Calculate the indicator process
	i['progress'] = calculateProgress(indicator)

	// Read the url for indicator detail information
	i['url'] = indicator['url']

	// Build slug based on author and slug
	i['slug'] = author + '-' + indicator['slug']

	// Read out properties from indicator and set for new indicator with new key name
	_.each([...(_.zip(indi_numbers, indi_numbers_keys)), ['ausgangswertJahr', 'startYear'], ['aktuellerWertJahr', 'currentYear'], ['begrundung', 'reason']], key => {
		i[key[1]] = indicator[key[0]]
	})

	// Special actions if author is dns
	if (author === 'dns') {
		// Convert x and j to true and false
		i['yearlyTarget'] = indicator['jaehrlicherZielwert'] === 'x'
		i['badTarget'] = indicator['aussageloserZielwert'] === 'j'
		i['badIndicator'] = indicator['ungeeignetX'] === 'x'
		i['spill'] = indicator['spillover'] === 'j'

		// Set indicator to uncalculable if start, current and target values are not present
		if (
				(!indicator['ausgangswert'] && indicator['ausgangswert'] !== 0) ||
				(!indicator['aktuellerWert'] && indicator['aktuellerWert'] !== 0) ||
				(!indicator['zielwertJahr2030'] && indicator['zielwertJahr2030'] !== 0)
			) {
			i['uncalculable'] = true
		}

		// If cell for modification starts with number, mark as modified indicator and set new property with reference
		if (indicator['modifizierterZielwert'].match(/^\d/)) { // starts with number
			i['modTarget'] = true
			i['altIndicator'] = indicator['modifizierterZielwert']
		} else {
			i['modTarget'] = false
		}

		// Set indicator as keep if indicated and if indicator is not modified
		i['keep'] = indicator['nicht2030WKatalog'] !== 'x' && !i['modTarget']

		// TODO
		// quick fix to show correct icons
		// Should not be done in the backend and based on actual properties
		i['dnsIconUebernommen'] = indicator['dnsIconUebernommen'] === 'x'
		i['dnsIconUngeeignet'] = indicator['dnsIconUngeeignet'] === 'x'
		i['dnsIconNichtBewertbar'] = indicator['dnsIconNichtBewertbar'] === 'x'
		i['dnsIconNichtBerechenbar'] = indicator['dnsIconNichtBerechenbar'] === 'x'
		i['dnsIconInternationaleAuswirkungen'] = indicator['dnsIconInternationaleAuswirkungen'] === 'x'
	}

	// Special actions if author is okf
	if (author === 'okf') {
		// Convert x and j to true and false
		i['newTopic'] = indicator['neuesThema'] === 'j'
		i['spill'] = indicator['spillover'] === 'j'

		// Get detail information for data patreon
		i['pate'] = indicator['datenpate'] !== 'n' ? indicator['datenpate'] : false
		i['pateLogo'] = indicator['datenpateLogo'] !== '' ? indicator['datenpateLogo'] : false
		i['pateUrl'] = indicator['datenpateUrl'] !== '' ? indicator['datenpateUrl'] : false
		i['pateText'] = indicator['datenpateText'] !== '' ? indicator['datenpateText'] : false
		i['pateContact'] = indicator['datenpateContact'] !== '' ? indicator['datenpateContact'] : false
		i['pateMail'] = indicator['datenpateMail'] !== '' ? indicator['datenpateMail'] : false

		// TODO
		// quick fix to show correct icons
		// Should not be done in the backend and based on actual properties
		i['okfIconNeuesThema'] = indicator['okfIconNeuesThema'] === 'x'
		i['okfIconUebernommen'] = indicator['okfIconUebernommen'] === 'x' // not used
		i['okfIconModifiziert'] = indicator['okfIconModifiziert'] === 'x'
		i['okfIconInternationaleAuswirkungen'] = indicator['okfIconInternationaleAuswirkungen'] === 'x'
	}
	return i
}

function processIndicatorDetail(indicator, callback) {
	// Detailed information for indicators are stored in seperate files
	requestIndicatorDetail(indicator, detailData => {
		// If detail data could be loaded
		if (detailData) {
			// Find rows that start list of countries and list of temporal data
			const countriesIndex = _.findIndex(detailData, line => { return line[0] == 'countries' })
			const timelineIndex = _.findIndex(detailData, line => { return line[0] == 'timeline' })

			// Check if temporal and geo data is present
			let endData = detailData.length
			if (timelineIndex > 0) {
				endData = timelineIndex
			}
			if (countriesIndex > 0) {
				endData = countriesIndex
			}

			// Split data where either temporal or country data starts
			const description = _.fromPairs(_.slice(detailData, 0, endData))
			// Load defined keys into the indicator
			_.forEach(['txtintroduction', 'txtdescription', 'txttarget', 'txtcategory', 'indicator source', 'data source', 'license', 'sourcelink'], key => {
				indicator[key] = description[key]
			})

			// Build temporal data
			if (timelineIndex > 0) {
				const timeline = convertHashToFloat(_.fromPairs(_.slice(detailData, timelineIndex + 1)))
				indicator['timeline'] = timeline
			}
			// Build geo data
			if (countriesIndex > 0) {
				const countries = convertHashToFloat(_.fromPairs(_.slice(detailData, countriesIndex + 1, timelineIndex > 0 ? timelineIndex : detailData.length - 1)))
				indicator['countries'] = countries
			}
		}
		callback(indicator)
	})
}

function requestIndicatorDetail(indicator, callback) {
	// Request indicator detail data
	const url = indicator['url']
	if (url !== '') {
		console.log('Requesting indicator detail data for', indicator['label'])
		requestURL(url, raw => {
			parseCSVString(raw, json => {
				callback(json)
			})
		})
	} else {
		callback(false)
	}
}

function calculateProgress (indicator) {
	// Calculate process in percentage based on target, current and start value
	const [target, current, start] = indi_numbers
	const range = indicator[start] - indicator[target]
	return (indicator[start] - indicator[current]) / range * 100
}
