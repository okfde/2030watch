import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import * as data from '../data/data.json'
import * as dataSDGs from '../data/sdgs.json'
import chroma from 'chroma-js'
import _ from 'lodash'

Vue.use(Vuex)

const colorScale = chroma.scale(['#980043', '#ffffcc', '#006837']).mode('lch').domain([0, 1])

function getValueInRange (value) {
  if (value <= 0) {
    return 0
  }
  if (value >= 1) {
    return 1
  }
  return value
}

function getCoordinatesForPercent (percent) {
  const x = Math.cos(2 * Math.PI * percent)
  const y = Math.sin(2 * Math.PI * percent)
  return [x, y]
}

function getPieChart (value) {
  const percent = value

  const startX = getCoordinatesForPercent(0)[0]
  const startY = getCoordinatesForPercent(0)[1]
  const endX = getCoordinatesForPercent(percent)[0]
  const endY = getCoordinatesForPercent(percent)[1]

  const largeArcFlag = percent > 0.5 ? 1 : 0

  const pathData = [
    `M ${startX} ${startY}`,
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
    `L 0 0`
  ].join(' ')

  return pathData
}

function generateValueLabel (value) {
  let label = Math.round(value * 100) + '%'
  if (value < 0) {
    label = label.replace('-', '–')
  }
  return label
}

function getAverage (arr) {
  return _.sumBy(arr, 'value') / arr.length
}

function formatPercent (v) {
  return _.round(v * 100, 1)
}

function calcStandardDeviation (values) {
  const avg = calcAverage(values)

  const squareDiffs = values.map(value => {
    const diff = value - avg
    const sqrDiff = diff * diff
    return sqrDiff
  })

  const avgSquareDiff = calcAverage(squareDiffs)

  const stdDev = Math.sqrt(avgSquareDiff)
  return stdDev
}

function calcAverage (data) {
  const sum = data.reduce((sum, value) => {
    return sum + value
  }, 0)

  const avg = sum / data.length
  return avg
}

function countChunksLength (arr) {
  return arr.reduce((sum, n) => {
    return sum + n.length
  }, 0)
}

function countDifference (arr) {
  return calcStandardDeviation(arr)
}

function countPartsLength (parts, n) {
  const chunks = divideArray(parts, n)
  const sizes = _.map(chunks, chunk => {
    return countChunksLength(chunk)
  })
  return sizes
}

function divideArray (arr, n) {
  const leftSide = _.clone(arr).splice(0, n)
  const rightSide = _.clone(arr).splice(n, arr.length - n)
  return [leftSide, rightSide]
}

function checkBreakPoint (parts, position) {
  const sizes = countPartsLength(parts, position)
  const difference = countDifference(sizes)
  return {
    [position]: difference
  }
}

function countPossibleBreakPoints (parts) {
  const nParts = parts.length
  return nParts - 1
}

function getBestBreakPoints (arr) {
  return parseInt(_.keys(_.first(_.sortBy(arr, v => {
    return _.values(v)[0]
  })))[0])
}

function insertLineBreak (parts, breakPoint) {
  return _.map(divideArray(parts, breakPoint), part => {
    return part.join(' ')
  })
}

function insertLineBreaks (str) {
  const parts = str.split(' ')
  const nPossibleBreaks = countPossibleBreakPoints(parts)
  const possibilities = _.times(nPossibleBreaks, n => {
    const position = n + 1
    return checkBreakPoint(parts, position)
  })
  const bestBreakPoint = getBestBreakPoints(possibilities)
  return insertLineBreak(parts, bestBreakPoint)
}

const store = () => new Vuex.Store({
  state: {
    data: data
  },
  getters: {
    indicators (state) {
      let values = _.map(state.data, indicator => {
        const _indicator = {
          ...indicator,
          'color': colorScale(indicator.value),
          'colorLight': colorScale(indicator.value).brighten(2).desaturate(2),
          'path': getPieChart(getValueInRange(indicator.value)),
          'labelValue': generateValueLabel(indicator.value)
        }

        return [indicator.slugTopic, _indicator]
      })
      return _.fromPairs(values)
    },
    sdgs (state) {
      const sdgs = _.groupBy(state.data, 'slugSdg')
      let n = 0
      const list = _.map(sdgs, (items, sdg) => {
        const okfs = _.filter(items, { 'origin': 'OKF' })
        const dnss = _.filter(items, { 'origin': 'DNS' })
        const _sdg = {
          'n': n,
          'slug': sdg,
          'color': dataSDGs[sdg].color,
          'label': _.first(items)['sdg'],
          'labels': insertLineBreaks(_.first(items)['sdg']),
          'okf': formatPercent(getAverage(okfs)),
          'dns': formatPercent(getAverage(dnss)),
          'total': formatPercent(getAverage(items)),
          'items': items
        }
        n += 1
        return [sdg, _sdg]
      })
      return _.fromPairs(list)
    },
    sdgsSlugs (state, getters) {
      return Object.keys(getters.sdgs)
    },
    indicatorsSlugs (state, getters) {
      return Object.keys(getters.indicators)
    }
  }
})

export default store
