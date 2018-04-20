const request = require('request');
const _ = require('lodash');
const parseCSV = require('csv-parse');
const fs = require('fs');
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3jgbFv0NlOhd5JuzoMFvelmcTELqc85VpIWn-R7h2TkyVyVYLyOAdpTAdtDmxYFs6bZZCiQkBmWy-/pub?output=csv'
const splitStr = '2030Id'
const sdgID = 'sdgId'
const dnsID = 'dnsId'
const okfID = '2030Id'

const numbers = ['zielwertJahr2030', 'aktuellerWert', 'ausgangswert']
const strings = ['dnsName', '2030Name']

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
					const headerDNS = _.slice(header, 0, splitPoint)
					const headerOKF = _.slice(header, splitPoint)

					if (_.indexOf(headerDNS, dnsID) == -1 || _.indexOf(headerOKF, okfID)) {
						console.log('No column found for indicator id (' + dnsID + ', ' + okfID + ')')
					} else {
						const indicators = []

						const splittedContent = _.map(content, line => {
							const contentDNS = _.slice(line, 0, splitPoint)
							const indicatorDNS = _.zipObject(headerDNS, contentDNS)
							if (indicatorDNS[dnsID].length) {
								indicatorDNS[labelStr] = indicatorDNS[strings[0]]
								indicatorDNS[authorStr] = 'dns'
								indicators.push(indicatorDNS)
							}

							const contentOKF = _.slice(line, splitPoint)
							const indicatorOKF = _.zipObject(headerOKF, contentOKF)
							if (indicatorOKF[okfID].length) {
								indicatorOKF[labelStr] = indicatorOKF[strings[1]]
								indicatorOKF[sdgID] = indicatorDNS[sdgID]
								indicatorDNS[authorStr] = 'okf'
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
	const [target, current, start] = numbers

	const indicators = _.map(arr, i => {
		const range = i[start] - i[target]
		const progress = (i[start] - i[current]) / range
		i[progressStr] = progress
		return i
	})

	console.log(indicators)
}

requestURL()
