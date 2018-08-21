const _ = require('lodash')
const {
  requestURL,
  parseCSVString,
  splitJSON,
  cleanArrayStrings,
  checkArrayStr,
  buildNewArray,
  writeJSONFile,
  splitHeader,
  splitContent,
  asyncBatch,
  filterArray,
  convertHashToFloat,
  deleteKeysInHashArray,
  formatArrayToHash } = require('./utils.js')

// URL
const urlSdgs = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhzvOoTo2_mxpq4xeQf2z8R665YPxt79-ANi8zyeQi_4AITlPVXnr7n7c1PJAI3MpHI3Skf0qjBqZj/pub?output=csv'

// Headers that should be included in the final data file
const sdgHeader = ['number', 'slug', 'color', 'labelShort', 'labelLong', 'textIntro', 'textIndicators', 'summaryDns', 'summary2030']
// row the should be used as key
const sdgNumbers = ['number']

// Used to set label based on process value
const sdgRatings = [
  {
    'label': 'geringe Nachhaltigkeit',
    'value': 0
  }, {
    'label': 'mittlere Nachhaltigkeit',
    'value': 40
  }, {
    'label': 'hohe Nachhaltigkeit',
    'value': 80
  }]

// Load SDG data
// console.log('Requesting SDG data…')
requestURL(urlSdgs, raw => {
  // console.log('Parsing SDG data…')
  // Parse csv file
  parseCSVString(raw, json => {
    // console.log('Splitting SDG data…')
    // Split JSON into header and content
    splitJSON(json, splitedJSON => {
      const [rawHeader, content] = splitedJSON
      // console.log('Cleaning SDG header data…')
      // Clean header names
      cleanArrayStrings(rawHeader, header => {
        // console.log('Checking SDG header data…')
        // Check if header contains necessary keys
        checkArrayStr(sdgHeader, header, () => {
          // console.log('Building SDG data…')
          // Create an array with defined keys (of sdg file)
          const arr = buildNewArray(sdgHeader, header, content, sdgNumbers)
          // console.log('Requesting Indicator data…')
          // Request indicator data to merge data
          requestIndicators(arr, indicators => {
            // console.log('Processing SDG data…')

            const data = processSDGs(arr, indicators)
            // console.log('Writing SDG data…')
            // Write merged file to json

            const indiNavigation = []
            // create new file
            data.map(elem => {
              _.forEach(elem.ind.dns, indi => {
                indiNavigation.push({
                  slug: indi.slug,
                  label: indi.label,
                  id: indi.id,
                  author: indi.author,
                  sdg: indi.sdg,
                  color: arr[indi.sdg].color
                })
              })
              _.forEach(elem.ind.okf, indi => {
                indiNavigation.push({
                  slug: indi.slug,
                  label: indi.label,
                  id: indi.id,
                  author: indi.author,
                  sdg: indi.sdg,
                  color: arr[indi.sdg].color
                })
              })
            })

            writeJSONFile('./indiNav.json', indiNavigation)

            // path to where the file with SDG data should be written
            writeJSONFile('./sdgs.json', formatArrayToHash(data, 'slug'))
          })
        })
      })
    })
  })
})

function processSDGs (sdgs, allIndicators) {
  return _.map(_.filter(sdgs, 'number'), sdg => {
    // Filter empty rows
    const indicators = _.filter(allIndicators, ['sdg', sdg['number']])

    // Group indicators by author
    let { dns: indiDns, okf: indiOkf } = _.groupBy(indicators, 'author')

    indiDns = _.orderBy(indiDns, 'id')
    indiOkf = _.orderBy(indiOkf, 'id')

    // Filter okf indicators for display
    const usableValuesOKF = _.filter(indiOkf, i => {
      // if (i['uncalculable']) { return false }
      return !_.isNaN(i['progress'] || _.isNull(i['progress']))
    })

    // Filter dns indicators for calculation
    const calcubaleValuesDNS = _.filter(indiDns, i => {
      if (i['uncalculable']) { return false }
      if (_.isNaN(i['progress']) || _.isNull(i['progress'])) { return false }
      return true
    })

    // Filter dns indicators for display
    const usableValuesDNS = _.filter(calcubaleValuesDNS, i => {
      if (!i['keep']) { return false }
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
        'dns': deleteKeysInHashArray(indiDns, ['countries', 'timeline', 'txtintroduction', 'txt2030target', 'txttarget', 'txtdescription', 'txtcategory', 'txtstartingvalue']),
        'okf': deleteKeysInHashArray(indiOkf, ['countries', 'timeline', 'txtintroduction', 'txt2030target', 'txttarget', 'txtdescription', 'txtcategory', 'txtstartingvalue'])
      },
      'n': {
        // Count the amount of indicators for various properties
        'moT': _.countBy(indiDns, 'modTarget').true || 0,
        'unc': _.countBy(indiDns, 'uncalculable').true || 0,
        'uokf': usableValuesOKF.length,
        'udns': usableValuesDNS.length,
        'dns': indiDns.length,
        'okf': indiOkf.length,
        'alt': usableValuesCombined.length
      }
    }

    // Add labels to sdg
    _sdg['rating'] = { 'dns': '', 'okf': '' }
    _.each(sdgRatings, rating => {
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
// const urlIndicators = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS7ahlC5LRwgUGaNsmxhvK4-VLo-Is7H8GjYzYHFjFCthakj6AGiKkrAVp3w5KCYG-d7aThnElewYwi/pub?output=csv'
const urlIndicators = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSNDFUF3uXfVPvHKTP9h_mzL-vp41CPsYBXKKZo6zM5Y1uCpth9CShHjPp4Y_LMXeHa-OyUiQLlcMGf/pub?output=csv'

// List of keys that should be present for the dns indicators
const indiHeadersDns = ['sdgId', 'sdgName', 'dnsId', 'slug', 'dnsName', 'ubernommen', 'nichtBerechenbar', 'dnsUnit', 'dnsUnitShort',
  'dnsGoal', 'zielwertJahr2030', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert', 'ausgangswertJahr', 'begrundung', 'url']
// List of keys that should be present for the okf indicators
const indiHeadersOkf = ['2030Id', 'slug', '2030Name', '2030Unit', '2030UnitShort', '2030Goal', 'zielwertJahr2030', 'aktuellerWert', 'aktuellerWertJahr', 'ausgangswert',
  'ausgangswertJahr', 'begrundung', 'neuerIndikator', 'modifizierterZielwert', 'datenpate', 'datenpateLogo', 'datenpateUrl', 'datenpateText',
  'datenpateContact', 'datenpateMail', 'url', '2030WDatensatz', 'potenziellerDatenpate']
// Key of the cell that holds the id of the SDG
const indiSdgID = 'sdgId'
// List of keys that are numbers and need to be converted
const indiNumbers = ['zielwertJahr2030', 'aktuellerWert', 'ausgangswert']
// List of new names for these keys
const indiNumbersKeys = ['target', 'current', 'start']
// Key that is used to split table between dns and okf indicators
const indiSplitKey = '2030Id'
// Key that indicates the id for dns indicators
const indiDnsID = 'dnsId'
// Key that indicates the id for okf indicators
const indiOkfID = '2030Id'

// Load indicator meta data
function requestIndicators (sdgs, callback) {
  // console.log('Requesting indicator data…')
  // Request indicator url
  requestURL(urlIndicators, raw => {
    // console.log('Parsing indicator data…')
    // Parse loaded data
    parseCSVString(raw, json => {
      // console.log('Splitting indicator data…')
      // Split CSV between header and content
      splitJSON(json, splitedJSON => {
        const [rawHeader, content] = splitedJSON
        // console.log('Cleaning indicator header data…')
        // Clean array strings
        cleanArrayStrings(rawHeader, header => {
          // console.log('Checking indicator header data…')
          // Check if all required keys are present
          checkArrayStr([...indiHeadersDns, ...indiHeadersOkf], header, () => {
            // Split header based on key to seperate dns and okf headers
            splitHeader(indiSplitKey, header, indiDnsID, indiOkfID, splittedHeader => {
              const [headerDNS, headerOKF, splitPoint] = splittedHeader
              // console.log('Splitting indicator content data…')

              // Split content based on split point generated from header splitting to seperate dns and okf headers
              splitContent(splitPoint, content, splittedContent => {
                const [rawContentDNS, rawContentOKF] = splittedContent

                // Filter empty rows caused by table layout
                const contentDNS = filterArray(rawContentDNS, indiDnsID, headerDNS)
                const contentOKF = filterArray(rawContentOKF, indiOkfID, headerOKF)

                // Build new array consisting of defined keys. Also convert numbers
                const arrDNS = buildNewArray(indiHeadersDns, headerDNS, contentDNS, [...indiNumbers, indiSdgID], indiDnsID)
                const arrOKF = buildNewArray(indiHeadersOkf, headerOKF, contentOKF, [...indiNumbers, indiSdgID], indiOkfID)

                // Merge all indicators in single array
                const indicators = arrDNS.concat(arrOKF)

                processIndicators(indicators, arr => {
                  callback(arr)
                  // As some indicators reference each other as modified, the targets should also be marked
                  const marked = markModifiedIndicators(arr)
                  // console.log('Writing indicator data…')
                  // Merge SDG data into indictors for links, color, label, … and write to file
                  writeJSONFile('./indicators.json', formatArrayToHash(mergeSDGIntoIndicators(sdgs, marked), 'slug'))
                })
              })
            })
          })
        })
      })
    })
  })
}

function processIndicators (indicators, callback) {
  // Process indicators by passing function to parse indicator meta data and a function to parse indicator detal data.
  // After all indicators have been parsed in async the callback function is called
  asyncBatch(indicators, processIndicatorMeta, processIndicatorDetail, arr => {
    callback(arr)
  })
}

function mergeSDGIntoIndicators (sdgs, indicators) {
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
  })
}

function markModifiedIndicators (indicators) {
  // As some indicators reference each other as modified, the targets should also be marked
  // console.log('Start marking modified indicators')
  // Create list of alternative (modded) indicators
  const targets = _.pull(_.map(indicators, i => {
    return _.get(i, 'moddedTarget')
  }), undefined)
  // console.log('Modified indicators found: ' + targets.join(', '))
  _.each(indicators, i => {
    // Only check okf indicators
    if (i['author'] === 'okf') {
      // Check if indicator id could be found in list of alternative indicators
      if (_.indexOf(targets, i['id']) >= 0) {
        // Marked as modded target as this is the (alternative) indicator with the new target. The original indicator is marked as mod target
        i['moddedTarget'] = true
        // console.log('Indicator »' + i['label'] + '« marked as modified')
      }
    }
  })
  return indicators
}

function processIndicatorMeta (indicator) {
  // Author based on presence of dns id
  const author = _.has(indicator, 'dnsId') ? 'dns' : 'okf'
  // Label of the indicator
  const label = _.has(indicator, 'dnsName') ? indicator['dnsName'] : indicator['2030Name']
  // Id of the indicator
  const id = _.has(indicator, 'dnsId') ? indicator['dnsId'] : indicator['2030Id']
  // Unit of the indicator
  const unit = _.has(indicator, 'dnsUnit') ? indicator['dnsUnit'] : indicator['2030Unit']
  const unitShort = _.has(indicator, 'dnsUnitShort') ? indicator['dnsUnitShort'] : indicator['2030UnitShort']
  // Goal of the indicator
  const goal = _.has(indicator, 'dnsGoal') ? indicator['dnsGoal'] : indicator['2030Goal']

  // Construct object with these properties
  const i = {
    id,
    author,
    label,
    unit,
    unitShort,
    goal
  }

  // Estimate SDG either by reading cell or calcuating from id
  i['sdg'] = _.has(indicator, indiSdgID) ? indicator[indiSdgID] : parseInt(id.split('_')[0])

  // Calculate the indicator process
  i['progress'] = calculateProgress(indicator)

  // Read the url for indicator detail information
  i['url'] = indicator['url']

  // Build slug based on author and slug
  i['slug'] = author + '-' + indicator['slug']

  // Read out properties from indicator and set for new indicator with new key name
  _.each([...(_.zip(indiNumbers, indiNumbersKeys)), ['ausgangswertJahr', 'startYear'], ['aktuellerWertJahr', 'currentYear'], ['begrundung', 'reason']], key => {
    i[key[1]] = indicator[key[0]]
  })

  if (author === 'dns') {
    i['uncalculable'] = indicator['nichtBerechenbar'] === 'x'
    // for calculating 2030Watch progress
    i['keep'] = indicator['ubernommen'] === 'x'
  }

  if (author === 'okf') {
    i['newIndicator'] = indicator['neuerIndikator'] === 'x'

    // If cell starts with number, mark as modified indicator and set new property with reference
    if (indicator['modifizierterZielwert'].match(/^\d/)) {
      i['modTarget'] = true
      i['moddedTarget'] = indicator['modifizierterZielwert']
    } else {
      i['modTarget'] = false
    }

    // Get detail information for data patreon
    i['pate'] = indicator['datenpate'] !== '' ? indicator['datenpate'] : false
    i['pateLogo'] = indicator['datenpateLogo'] !== '' ? indicator['datenpateLogo'] : false
    i['pateUrl'] = indicator['datenpateUrl'] !== '' ? indicator['datenpateUrl'] : false
    i['pateText'] = indicator['datenpateText'] !== '' ? indicator['datenpateText'] : false
    i['pateContact'] = indicator['datenpateContact'] !== '' ? indicator['datenpateContact'] : false
    i['pateMail'] = indicator['datenpateMail'] !== '' ? indicator['datenpateMail'] : false
  }
  return i
}

function processIndicatorDetail (indicator, callback) {
  // Detailed information for indicators are stored in seperate files
  requestIndicatorDetail(indicator, detailData => {
    // If detail data could be loaded
    if (detailData) {
      // Find rows that start list of countries and list of temporal data
      const countriesIndex = _.findIndex(detailData, line => { return line[0] === 'countries' })
      const timelineIndex = _.findIndex(detailData, line => { return line[0] === 'timeline' })

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
      _.forEach(['txtintroduction', 'txt2030target', 'txtdescription', 'txttarget', 'txtcategory', 'txtstartingvalue', 'indicator source', 'data source', 'license', 'sourcelink'], key => {
        indicator[key] = description[key]
      })

      // Build temporal data
      if (timelineIndex > 0) {
        const timeline = convertHashToFloat(_.fromPairs(_.slice(detailData, timelineIndex + 1)))

        // strip null values of the beginning of the timeline
        let years = Object.keys(timeline)
        let i = 0
        while (i < years.length) {
          if ((timeline[years[i]] !== null && !isNaN(timeline[years[i]]))) {
            break
          }
          delete timeline[years[i]]
          i++
        }
        // strip null values of the end of the timeline (the null values inbetween should be retained)
        years = Object.keys(timeline)
        let j = years.length
        while (j > 0) {
          if ((timeline[years[j]] !== null && !isNaN(timeline[years[j]]))) {
            break
          }
          delete timeline[years[j]]
          j--
        }
        indicator['timeline'] = timeline
      }
      // Build geo data
      if (countriesIndex > 0) {
        const countries = convertHashToFloat(_.fromPairs(_.slice(detailData, countriesIndex + 1, timelineIndex > 0 ? timelineIndex : detailData.length - 1)))
        // remove null values of countries
        Object.keys(countries).forEach((key) => (countries[key] === null || isNaN(countries[key])) && delete countries[key])

        // order countries alphabetically
        const ordered = {}
        Object.keys(countries).sort().forEach(function (key) {
          ordered[key] = countries[key]
        })

        indicator['countries'] = ordered
      }
    }
    callback(indicator)
  })
}

function requestIndicatorDetail (indicator, callback) {
  // Request indicator detail data
  const url = indicator['url']
  if (url !== '') {
    // console.log('Requesting indicator detail data for', indicator['label'])
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
  const [target, current, start] = indiNumbers
  const range = indicator[start] - indicator[target]
  return (indicator[start] - indicator[current]) / range * 100
}
