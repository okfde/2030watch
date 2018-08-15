const request = require('request')
const parseCSV = require('csv-parse')
const jsonfile = require('jsonfile')
const _ = require('lodash')

module.exports = {
  requestURL: function (url, callback) {
    // console.log('Start fetching document')
    request(url, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        // console.log('Document successfully fetched')
        callback(body)
      } else {
        // console.log('Could not fetch document')
      }
    })
  },
  parseCSVString: function (str, callback) {
    // console.log('Start parsing data')
    parseCSV(str, (err, output) => {
      if (!err) {
        // console.log('Data successfully parsed')
        callback(output)
      } else {
        console.log('Could not parse data')
      }
    })
  },
  splitJSON: function (json, callback) {
    // Split header from content
    if (json.length) {
      const header = _.slice(json, 0, 1)[0]
      const content = _.slice(json, 1)
      if (content.length === 0) {
        console.log('No content found')
      } else {
        callback([header, content])
      }
    } else {
      console.log('No content found')
    }
  },
  splitHeader: function (splitKey, header, dnsID, okfID, callback) {
    // Loop through header. Check if splitKey is present. Split array at that point
    const splitPoint = _.indexOf(header, splitKey)
    if (splitPoint !== -1) {
      const headerDNS = _.slice(header, 0, splitPoint)
      const headerOKF = _.slice(header, splitPoint)

      if (_.indexOf(headerDNS, dnsID) !== -1 && _.indexOf(headerOKF, okfID) !== -1) {
        callback([headerDNS, headerOKF, splitPoint])
      } else {
        console.log('No column found for indicator id (' + dnsID + ', ' + okfID + ')')
      }
    } else {
      console.log('No column found called ' + splitKey)
    }
  },
  splitContent: function (splitPoint, arr, callback) {
    // Loop through arr and create two arrays by splitting keys at position
    const dnsArr = []
    const okfArr = []
    _.each(arr, row => {
      dnsArr.push(_.slice(row, 0, splitPoint))
      okfArr.push(_.slice(row, splitPoint))
    })
    callback([dnsArr, okfArr])
  },
  writeJSONFile: function (file, obj) {
    jsonfile.writeFile(file, obj, { spaces: 2 }, err => {
      if (!err) {
        console.log('Data successfully written to ' + file)
      } else {
        console.error('Could not write SDG file (' + err + ')')
      }
    })
  },
  cleanArrayStrings: function (arr, callback) {
    // delete diacritics, delete spaces, camel case
    const _arr = _.map(arr, el => {
      return _.camelCase(_.trim(el).normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    })
    callback(_arr)
  },
  checkArrayStr: function (keys, arr, callback) {
    // Check if array has keys
    let err = false
    _.each(keys, id => {
      if (_.indexOf(arr, id) === -1) {
        err = true
        console.log('Required column ' + id + ' not found')
      }
    })
    if (!err) { callback() }
  },
  filterArray: function (rawContent, idKey, header) {
    // Filter array to delete empty rows
    // Check if first row is a comment row
    const content = rawContent[0][0] === 'FALSE' ? _.slice(rawContent, 1) : rawContent
    const position = _.indexOf(header, idKey)
    return _.filter(content, line => {
      return line[position] !== ''
    })
  },
  buildNewArray: function (keys, header, content, numbers, idKey) {
    // Construct a new array based on header and rawContent that only contains keys from keys.
    // Also convert values based on numbers
    const newArr = _.map(content, line => {
      const pairs = []
      for (let i = 0, len = header.length; i < len; i++) {
        // Loop through header and line
        const key = header[i]
        let val = _.trim(line[i])
        if (_.indexOf(keys, key) > -1) {
          // If key is present in keys
          if (_.indexOf(numbers, key) > -1) {
            // if key should be a number
            val = parseFloat(val.replace(',', '.'))
          }
          pairs.push([key, val])
        }
      }
      return _.fromPairs(pairs)
    })
    return newArr
  },
  asyncBatch: function (arr, processIndicatorMeta, processIndicatorDetail, callback) {
    let n = arr.length
    const fullIndicatorsArr = []
    _.each(arr, obj => {
      // make async request. Check n if all request have been finished
      obj = processIndicatorMeta(obj)
      processIndicatorDetail(obj, fullIndicator => {
        fullIndicatorsArr.push(fullIndicator)
        n -= 1
        // TODO: handle errors, e.g., if an indicator URL is not reachable, the script doesn't run through
        if (!n) {
          callback(fullIndicatorsArr)
        }
      })
    })
  },
  convertHashToFloat: function (arr) {
    _.forEach(arr, (value, key) => {
      arr[key] = parseFloat(value.replace(',', '.'))
    })
    return arr
  },
  deleteKeysInHashArray: function (arr, keys) {
    // Delete keys that are present in objects in array
    return _.map(arr, obj => {
      const o = _.clone(obj)
      _.each(keys, key => {
        delete o[key]
      })
      return o
    })
  },
  formatArrayToHash: function (arr, key) {
    // Build associative array
    const hash = _.map(arr, obj => {
      return [obj[key], obj]
    })
    return _.fromPairs(hash)
  }
}
