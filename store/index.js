import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../data/indicators.json'
import * as dataSDGs from '../data/sdgs.json'
import _ from 'lodash'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    data: data,
    sdgs: dataSDGs
  },
  getters: {
    indicators (state) {
      let values = _.map(state.data, indicator => {
        const _indicator = {
          ...indicator
          // 'color': colorScale(indicator.value),
          // 'colorLight': colorScale(indicator.value).brighten(2).desaturate(2),
          // 'path': getPieChart(getValueInRange(indicator.value)),
          // 'labelValue': generateValueLabel(indicator.value)
        }

        return [indicator.slugTopic, _indicator]
      })
      return _.fromPairs(values)
    },
    sdgsSlugs (state, getters) {
      return Object.keys(state.sdgs)
    },
    indicatorsSlugs (state, getters) {
      return Object.keys(state.data)
    }
  }
})

export default store
