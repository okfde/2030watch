import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import * as data from '../data/indicators.json'
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


const store = () => new Vuex.Store({
  state: {
    data: data,
    sdgs: dataSDGs
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
    sdgsSlugs (state, getters) {
      return Object.keys(state.sdgs)
    },
    indicatorsSlugs (state, getters) {
      return Object.keys(getters.indicators)
    }
  }
})

export default store
