const request = require('request')
const _ = require('lodash')
const parseCSV = require('csv-parse')
const fs = require('fs')
const jsonfile = require('jsonfile')
const sdgsMeta = require('./data/sdgs-text.json')
const sdgsFile = './data/sdgs.json'
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3jgbFv0NlOhd5JuzoMFvelmcTELqc85VpIWn-R7h2TkyVyVYLyOAdpTAdtDmxYFs6bZZCiQkBmWy-/pub?output=csv'
const splitStr = '2030Id'
const sdgID = 'sdgId'
const dnsID = 'dnsId'
const okfID = '2030Id'

const numbers = ['zielwertJahr2030', 'aktuellerWert', 'ausgangswert']
const strings = ['dnsName', '2030Name', 'aussageloserZielwert', 'modifizierterZielwert', 'ungeeignetX', 'nichtBerechenbar', 'spillover']

const labelStr = 'label'
const authorStr = 'author'
const progressStr = 'value'

function requestURL () {
	console.log('Start fetching document')
	request(url, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      console.log('Document successfully fetched')
      parseCSVString(body)
    } else {
    	console.log('Could not fetch document')
    }
  })
}

function parseCSVString (str) {
	console.log('Start parsing data')
  parseCSV(str, (err, output) => {
  	if (!err) {
  		console.log('Data successfully parsed')
      sortData(output)
    } else {
    	console.log('Could not parse data')
    }
  })
}

function renameHeader (arr) {
	return _.map(arr, el => {
		return _.camelCase(_.trim(el).normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
	})
}

function checkHeaderIDs (arr) {
	const header = [...numbers, ...strings, sdgID, dnsID, okfID]
	let err = false
	_.each(header, id => {
		if (_.indexOf(arr, id) == -1) {
			err = true
			console.log('Required column ' + id + ' not found')
		}
	})
	return err
}

function trimArr (arr) {
	return _.map(arr, el => {
		return _.trim(el)
	})
}

function sortData (obj) {
	console.log('Start sorting data')
	if (obj.length == 0) {
		console.log('No lines found')
	} else {
		console.log('Lines found: ' + obj.length)
		const header = renameHeader(_.slice(obj, 0, 1)[0])
		const content = _.slice(obj, 1)

		if (content.length == 0) {
			console.log('No content found')
		} else {
			const splitPoint = _.indexOf(header, splitStr)

			if (splitPoint == -1) {
				console.log('No column found called ' + splitStr)
			} else {
				if (checkHeaderIDs(header)) {
					console.log('Please check column names')
				} else {
					console.log(header)
					const headerDNS = _.slice(header, 0, splitPoint)
					const headerOKF = _.slice(header, splitPoint)

					if (_.indexOf(headerDNS, dnsID) == -1 || _.indexOf(headerOKF, okfID)) {
						console.log('No column found for indicator id (' + dnsID + ', ' + okfID + ')')
					} else {
						const indicators = []

						const [dnsName, okfName] = strings

						const splittedContent = _.map(content, line => {
							const contentDNS = _.slice(line, 0, splitPoint)
							const indicatorDNS = _.zipObject(headerDNS, contentDNS)
							if (indicatorDNS[dnsID].length) {
								indicatorDNS[labelStr] = indicatorDNS[dnsName]
								indicatorDNS[authorStr] = 'dns'
								indicators.push(indicatorDNS)
							}

							const contentOKF = _.slice(line, splitPoint)
							const indicatorOKF = _.zipObject(headerOKF, contentOKF)
							if (indicatorOKF[okfID].length) {
								indicatorOKF[labelStr] = indicatorOKF[okfName]
								indicatorOKF[sdgID] = indicatorDNS[sdgID]
								indicatorOKF[authorStr] = 'okf'
								indicators.push(indicatorOKF)
							}
						})

						formatData(indicators)
					}
				}
				}
		}
	}
}

function formatData (arr) {
	let err = false

	const [, , badTarget, modTarget, badIndicator, uncalculable, spill] = strings
	const indicators = _.map(arr, indicator => {
		const i = {}
		_.each([...numbers, sdgID], key => {
			i[key] = parseFloat(indicator[key].replace(',', '.'))
		})

		_.each([authorStr, dnsID, okfID, labelStr], key => {
			if (_.has(indicator, key)) {
				i[key] = _.trim(indicator[key])
			}
		})

		if (i[authorStr] === 'dns') {
			i['badTarget'] = indicator[badTarget] === 'j'
			i['badIndicator'] = indicator[badIndicator] === 'x'
			i['spill'] = indicator[spill] === 'x'
			i['uncalculable'] = indicator[uncalculable] === 'x'

			if (indicator[modTarget].match(/^\d/)) { // starts with number
				i['modTarget'] = true
				i['alt'] = indicator[modTarget]
			} else {
				i['modTarget'] = false
			}
		}

		_.each(i, (value, key) => {
			if (_.isNaN(value) || value.length < 1) {
				console.log('Could not format column ' + key + ' for indicator ' + indicator['label'])
			}
		})

		return i
	})

	calculateProgress(indicators)
}

function calculateProgress (arr) {
	console.log('Start calculating progress values')
	const [target, current, start] = numbers

	const indicators = _.map(arr, i => {
		const range = i[start] - i[target]
		const progress = (i[start] - i[current]) / range
		i[progressStr] = progress
		return i
	})

	buildSDGs(indicators)
}

function buildSDGs (arr) {
	console.log('Start building SDG data')
	const sdgs = _.groupBy(arr, sdgID)

	const sdgArr = []

	_.each(sdgs, (items, key) => {
		const indicators = _.groupBy(items, authorStr)
		const { dns, okf } = indicators

		if (_.isUndefined(dns) || dns.length < 1 || _.isUndefined(okf) || okf.length < 1) {
			console.log('Not enough indicators for SDG ' + key)
		} else {
			const valuesDNS = _.filter(dns, i => {
				return !_.isNaN(i[progressStr])
			})
			const valuesOKF = _.filter(okf, i => {
				return !_.isNaN(i[progressStr])
			})
			const valuesCombinedDNS = _.filter(valuesDNS, i => {
				if (i['badIndicator']) { return false }
				if (i['uncalculable']) { return false }
				if (i['modTarget']) { return false }

				return true
			})

			const valuesCombined = [...valuesCombinedDNS, ...valuesOKF]

			const sdgMeta = sdgsMeta[parseInt(key) - 1]

			if (_.isUndefined(sdgMeta)) {
				console.log('Could not find meta information for SDG ' + key)
			} else {
				const sdg = {
					...sdgMeta,
					'id': parseInt(key),
					'dns': _.sumBy(valuesDNS, progressStr) / valuesDNS.length * 100,
					'okf': _.sumBy(valuesCombined, progressStr) / valuesCombined.length * 100,
					'n': {
						'bad': _.countBy(valuesDNS, 'badIndicator').true || 0,
						'mod': _.countBy(valuesDNS, 'modTarget').true || 0,
						'unc': _.countBy(valuesDNS, 'uncalculable').true || 0,
						'unc': _.countBy(valuesDNS, 'badTarget').true || 0,
						'dns': valuesDNS.length,
						'okf': valuesOKF.length,
						'alt': valuesCombined.length
					}
				}

				sdgArr.push([sdgMeta['slug'], sdg])
				// console.log(sdg)
			}
		}
	})

	sdgObj = _.fromPairs(sdgArr)

	jsonfile.writeFile(sdgsFile, sdgObj, { spaces: 2 }, err => {
		if (!err) {
  		console.log('Data successfully written to ' + sdgsFile)
    } else {
    	console.error('Could not write SDG file (' + err + ')')
    }
	})

	// console.log(sdgObj)
}

requestURL()
