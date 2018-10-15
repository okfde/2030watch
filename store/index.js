import Vue from 'vue'
import Vuex from 'vuex'
import * as data from '../data/indicators.json'
import * as dataSDGs from '../data/sdgs.json'
import * as indiNav from '../data/indiNav.json'
import _ from 'lodash'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    data: data,
    sdgs: dataSDGs,
    indiNav
  },
  getters: {
    indicators (state) {
      let values = _.map(state.data, indicator => {
        const _indicator = {
          ...indicator
        }
        return [indicator.slugTopic, _indicator]
      })
      return _.fromPairs(values)
    },
    stepsColors (state) {
      return ['#D22F27', '#F1B31C', '#5C9E31']
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
