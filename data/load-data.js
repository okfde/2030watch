const _ = require('lodash')
const { requestURL, parseCSVString, splitJSON, cleanArrayStrings, checkArrayStr, buildNewArray, writeJSONFile, splitHeader, splitContent, extractURL, asyncBatch, filterArray, convertHashToFloat, deleteKeysInHashArray, formatArrayToHash } = require('./utils.js')

// URLS
const url_sdgs = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNDMTfVzdgRjXccPA71vnBEoPzF2UtcL-v5rKGj6Dl4hHMlZJ7hJAKH8wRiAOaozR8ZKJUnHrcEDu4/pub?gid=0&single=true&output=csv'

const sdg_header = ['number', 'slug', 'color', 'labelShort', 'labelLong', 'textIntro', 'textIndicators']
const sdg_numbers = ['number']
const sdg_file = './sdgs.json'
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
	parseCSVString(raw, json => {
		console.log('Splitting SDG data…')
		splitJSON(json, splitedJSON => {
			const [rawHeader, content] = splitedJSON
			console.log('Cleaning SDG header data…')
			cleanArrayStrings(rawHeader, header => {
				console.log('Checking SDG header data…')
				checkArrayStr(sdg_header, header, () => {
					console.log('Building SDG data…')
					const arr = buildNewArray(sdg_header, header, content, sdg_numbers)
					console.log('Requesting Indicator data…')
					requestIndicators(arr, indicators => {
						console.log('Processing SDG data…')
						const data = processSDGs(arr, indicators)
						console.log('Writing SDG data…')
						writeJSONFile(sdg_file, formatArrayToHash(data, 'slug'))
					})
				})
			})
		})
	})
})

function processSDGs(sdgs, allIndicators) {
	return _.map(_.filter(sdgs, 'number'), sdg => {
		const indicators = _.filter(allIndicators, ['sdg', sdg['number']])
		const { dns: indi_dns, okf: indi_okf } = _.groupBy(indicators, 'author')

		const usableValuesOKF = _.filter(indi_okf, i => {
			if (i['uncalculable']) { return false }
			return !_.isNaN(i['progress'] || _.isNull(i['progress']))
		})

		const calcubaleValuesDNS = _.filter(indi_dns, i => {
			if (i['uncalculable']) { return false }
			if (_.isNaN(i['progress']) || _.isNull(i['progress'])) { return false }
			return true
		})

		const usableValuesDNS = _.filter(calcubaleValuesDNS, i => {
			if (i['badIndicator']) { return false }
			if (i['modTarget']) { return false }
			return true
		})

		const usableValuesCombined = [...usableValuesOKF, ...usableValuesDNS]

		const _sdg = {
			...sdg,
			'values': {
				'dns': _.sumBy(calcubaleValuesDNS, 'progress') / calcubaleValuesDNS.length,
				'okf': _.sumBy(usableValuesCombined, 'progress') / usableValuesCombined.length
			},
			'ind': {
				'dns': deleteKeysInHashArray(indi_dns, ['countries', 'timeline', 'txtintroduction', 'txttarget', 'txtdescription', 'txtcategory']),
				'okf': deleteKeysInHashArray(indi_okf, ['countries', 'timeline', 'txtintroduction', 'txttarget', 'txtdescription', 'txtcategory'])
			},
			'n': {
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

		_sdg['rating'] = { 'dns': '', 'okf': '' }

		_.each(sdg_ratings, rating => {
			if (_sdg['values']['dns'] > rating.value) {
				_sdg['rating']['dns'] = rating.label
			}
			if (_sdg['values']['okf'] > rating.value) {
				_sdg['rating']['okf'] = rating.label
			}
		})

		return _sdg
	})
}

const url_indicators = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3jgbFv0NlOhd5JuzoMFvelmcTELqc85VpIWn-R7h2TkyVyVYLyOAdpTAdtDmxYFs6bZZCiQkBmWy-/pub?output=csv'
const indi_headers_dns = ['sdgId', 'sdgName', 'dnsId', 'slug', 'dnsName', 'aussageloserZielwert', 'modifizierterZielwert', 'ungeeignetX', 'spillover', 'dnsUnit', 'dnsGoal', 'zielwertJahr2030', 'jahrlicherZielwert', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert', 'ausgangswertJahr', 'begrundung', 'nicht2030WKatalog', 'landerVergleich', 'zeitreihe', 'url']
const indi_headers_okf = ['2030Id', 'slug', '2030Name', '2030Unit', '2030Goal', 'zielwertJahr2030', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert', 'ausgangswertJahr', 'begrundung', 'zeitreihe', 'laendervergleich', 'spillover', 'neuesThema', 'datenpate', 'url', '2030WDatensatz', 'potenziellerDatenpate']
const indi_sdgID = 'sdgId'
const indi_numbers = ['zielwertJahr2030', 'aktuellerWert', 'ausgangswert']
const indi_numbers_keys = ['target', 'current', 'start']
const indi_splitKey = '2030Id'
const indi_dnsID = 'dnsId'
const indi_okfID = '2030Id'
const indi_file = './indicators.json'

// Load indicator meta data
function requestIndicators(sdgs, callback) {
	console.log('Requesting indicator data…')
	requestURL(url_indicators, raw => {
		console.log('Parsing indicator data…')
		parseCSVString(raw, json => {
			console.log('Splitting indicator data…')
			splitJSON(json, splitedJSON => {
				const [rawHeader, content] = splitedJSON
				console.log('Cleaning indicator header data…')
				cleanArrayStrings(rawHeader, header => {
					console.log('Checking indicator header data…')
					checkArrayStr([...indi_headers_dns, ...indi_headers_okf], header, () => {
						splitHeader(indi_splitKey, header, indi_dnsID, indi_okfID, splittedHeader => {
							const [headerDNS, headerOKF, splitPoint] = splittedHeader
							console.log('Splitting indicator content data…')
							splitContent(splitPoint, content, splittedContent => {
								const [rawContentDNS, rawContentOKF] = splittedContent
								const contentDNS = filterArray(rawContentDNS, indi_dnsID, headerDNS)
								const contentOKF = filterArray(rawContentOKF, indi_okfID, headerOKF)
								const arrDNS = buildNewArray(indi_headers_dns, headerDNS, contentDNS, [...indi_numbers, indi_sdgID], indi_dnsID)
								const arrOKF = buildNewArray(indi_headers_okf, headerOKF, contentOKF, [...indi_numbers, indi_sdgID], indi_okfID)
								const indicators = arrDNS.concat(arrOKF)
								processIndicators(indicators, arr => {
									callback(arr)
									const marked = markModifiedIndicators(arr)
									console.log('Writing indicator data…')
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
	console.log('Start marking modified indicators')
	const targets = _.pull(_.map(indicators, i => {
		return _.get(i, 'altIndicator')
	}), undefined)
	console.log('Modified indicators found: ' + targets.join(', '))
	_.each(indicators, i => {
		if(i['author'] === 'okf') {
			if (_.indexOf(targets, i['id']) >= 0) {
				i['moddedTarget'] = true
				console.log('Indicator »' + i['label'] + '« marked as modified')
			}
		}
	})
	return indicators
}

function processIndicatorMeta(indicator) {
	const author = _.has(indicator, 'dnsId') ? 'dns' : 'okf'
	const label = _.has(indicator, 'dnsName') ? indicator['dnsName'] : indicator['2030Name']
	const id = _.has(indicator, 'dnsId') ? indicator['dnsId'] : indicator['2030Id']
	const unit = _.has(indicator, 'dnsUnit') ? indicator['dnsUnit'] : indicator['2030Unit']
	const goal = _.has(indicator, 'dnsGoal') ? indicator['dnsGoal'] : indicator['2030Goal']
	const i = {
		id,
		author,
		label,
		unit,
		goal
	}
	i['sdg'] = _.has(indicator, indi_sdgID) ? indicator[indi_sdgID] : parseInt(id.split('_')[0])
	i['progress'] = calculateProgress(indicator)

	i['url'] = indicator['url']
	i['slug'] = author + '-' + indicator['slug']

	_.each([...(_.zip(indi_numbers, indi_numbers_keys)), ['ausgangswertJahr', 'startYear'], ['aktuellerWertJahr', 'currentYear'], ['begrundung', 'reason']], key => {
		i[key[1]] = indicator[key[0]]
	})

	if (author === 'dns') {
		i['yearlyTarget'] = indicator['jaehrlicherZielwert'] === 'x'
		i['badTarget'] = indicator['aussageloserZielwert'] === 'j'
		i['badIndicator'] = indicator['ungeeignetX'] === 'x'
		if (
				(!indicator['ausgangswert'] && indicator['ausgangswert'] !== 0) ||
				(!indicator['aktuellerWert'] && indicator['aktuellerWert'] !== 0) ||
				(!indicator['zielwertJahr2030'] && indicator['zielwertJahr2030'] !== 0)
			) {
			i['uncalculable'] = true
		}
		i['spill'] = indicator['spillover'] === 'j'

		if (indicator['modifizierterZielwert'].match(/^\d/)) { // starts with number
			i['modTarget'] = true
			i['altIndicator'] = indicator['modifizierterZielwert']
		} else {
			i['modTarget'] = false
		}

		i['keep'] = indicator['nicht2030WKatalog'] !== 'x' && !i['modTarget']
	}

	if (author === 'okf') {
		i['newTopic'] = indicator['neuesThema'] === 'j'
		i['pate'] = indicator['datenpate'] !== 'n' ? indicator['datenpate'] : false
	}
	return i
}

function processIndicatorDetail(indicator, callback) {
	requestIndicatorDetail(indicator, detailData => {
		if (detailData) {
			const countriesIndex = _.findIndex(detailData, line => { return line[0] == 'countries' })
			const timelineIndex = _.findIndex(detailData, line => { return line[0] == 'timeline' })

			let endData = detailData.length
			if (timelineIndex > 0) {
				endData = timelineIndex
			}
			if (countriesIndex > 0) {
				endData = countriesIndex
			}

			const description = _.fromPairs(_.slice(detailData, 0, endData))
			_.forEach(['txtintroduction', 'txtdescription', 'txttarget', 'txtcategory', 'indicatorSource', 'dataSource', 'license'], key => {
				indicator[key] = description[key]
			})

			if (timelineIndex > 0) {
				const timeline = convertHashToFloat(_.fromPairs(_.slice(detailData, timelineIndex + 1)))
				indicator['timeline'] = timeline
			}
			if (countriesIndex > 0) {
				const countries = convertHashToFloat(_.fromPairs(_.slice(detailData, countriesIndex + 1, timelineIndex > 0 ? timelineIndex : detailData.length - 1)))
				indicator['countries'] = countries
			}
		}
		callback(indicator)
	})
}

function requestIndicatorDetail(indicator, callback) {
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
	const [target, current, start] = indi_numbers
	const range = indicator[start] - indicator[target]
	return (indicator[start] - indicator[current]) / range * 100
}
