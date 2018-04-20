const request = require('request');
const _ = require('lodash');
const parseCSV = require('csv-parse');
const fs = require('fs');
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3jgbFv0NlOhd5JuzoMFvelmcTELqc85VpIWn-R7h2TkyVyVYLyOAdpTAdtDmxYFs6bZZCiQkBmWy-/pub?output=csv'
const splitStr = '2030Id'

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
				console.log(header)
			} else {
				const headerDNS = _.slice(header, 0, splitPoint)
				const headerOKF = _.slice(header, splitPoint)

				const indicators = []

				const splittedContent = _.map(content, line => {
					const contentDNS = _.slice(line, 0, splitPoint)
					const indicatorDNS = _.zipObject(headerDNS, contentDNS)
					indicators.push(indicatorDNS)

					const contentOKF = _.slice(line, splitPoint)
					const indicatorOKF = _.zipObject(headerOKF, contentOKF)
					indicators.push(indicatorOKF)
				})

				console.log(indicators)
				// console.log(headerOKF)
			}
		}
	}
}

requestURL()
