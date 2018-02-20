import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'
import * as data from '../data/data.json'
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
          'label': _.first(items)['sdg'],
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
    },
    domains (state) {
      // let rankScores = _.map(state.data, 'scores.rank')
      // let hdiScores = _.map(state.data, 'scores.hdi')
      // let democracyScore = _.map(state.data, 'scores.democracy')

      // let democracyTypesGroups = _.groupBy(state.data, 'types.degree')
      // let democracyTypes = _.fromPairs(_.map(democracyTypesGroups, (countries, key) => {
      //   let values = _.map(countries, 'scores.rank')
      //   return [key, [_.min(values), _.max(values)]]
      // }))

      // let retVal = {
      //   'rank': [_.min(rankScores), _.max(rankScores)],
      //   'hdi': [_.min(hdiScores), _.max(hdiScores)],
      //   'democracy': [_.min(democracyScore), _.max(democracyScore)],
      //   ...democracyTypes
      // }

      // return retVal
    },
    // countries (state, getters) {
    //   let numberCountries = state.data.length
    //   let colorScaleRank = chroma.scale(['green', 'red']).mode('lab').domain(getters.domains.rank)
    //   let colorScaleHDI = chroma.scale(['red', 'green']).mode('lab').domain(getters.domains.hdi)
    //   let colorScaleDemocracy = chroma.scale(['red', 'green']).mode('lab').domain(getters.domains.democracy)

    //   // let colorScaleDemocracy = chroma.scale(['red', 'green']).mode('lab').domain(getters.domains.democracy)

    //   let colorScalesDegrees = _.fromPairs(_.map(getters.degrees, key => {
    //     return [key, chroma.scale(state.colorRangesDegrees[key]).mode('lab').domain(getters.domains[key])]
    //   }))

    //   let countries = _.map(state.data, (country, index) => {
    //     let retVal = {
    //       ...country,
    //       'colours': {
    //         'default': colorScaleRank(country.scores.rank).css(),
    //         'rank': colorScaleRank(country.scores.rank).css(),
    //         'hdi': colorScaleHDI(country.scores.hdi).css(),
    //         'democracy': colorScaleDemocracy(country.scores.democracy).css(),
    //         'degree': colorScalesDegrees[country.types.degree](country.scores.rank).css()
    //       }
    //     }

    //     let { population, gdp, area } = country['values']
    //     retVal['values'] = {
    //       'counter': {
    //         'percent': 100 / numberCountries
    //       },
    //       'population': {
    //         'value': population,
    //         'percent': 100 / getters.total.population * population,
    //         'label': population + ' Menschen'
    //       },
    //       'gdp': {
    //         'value': gdp,
    //         'percent': 100 / getters.total.gdp * gdp,
    //         'label': gdp + ' GDP'
    //       },
    //       'area': {
    //         'value': area,
    //         'percent': 100 / getters.total.area * area,
    //         'label': area + ' Area'
    //       }
    //     }
    //     return retVal
    //   })

    //   return Object.freeze(countries)
    // },
    organisations (state) {
      // return Object.freeze(_.keys(_.first(state.data)['organisations']))
    },
    status (state, getters) {
      // let retVal = {}
      // retVal[state.activeStatus] = _.fill(Array(state.data.length), false)
      // _.each(getters.organisations, organisation => {
      //   retVal[organisation] = _.map(state.data, country => {
      //     return country['organisations'][organisation]
      //   })
      // })
      // return Object.freeze(retVal)
    },
    shapes (state) {

    }
    // activeModel (state, getters) {
    //   return _.fill(Array(getters.models.length), false)
    // },
    // types (state) {
    //   return _.uniq(_.flatten(_.map(state.data, 'types')))
    // },
    // activeType (state, getters) {
    //   return _.fill(Array(getters.types.length), false)
    // },
    // propertyKeys (state) {
    //   return _.uniq(_.flatten(_.map(state.data, datum => {
    //     return _.keys(datum['properties'])
    //   })))
    // },
    // activeProperty (state, getters) {
    //   return _.fromPairs(_.map(getters.propertyKeys, key => {
    //     return [key, false]
    //   }))
    // },
    // properties (state, getters) {
    //   return _.fromPairs(_.map(getters.propertyKeys, key => {
    //     let retVal = _.uniq(_.flatten(_.map(state.data, datum => {
    //       return datum['properties'][key]
    //     })))
    //     return [key, retVal]
    //   }))
    // },
    // modelsAccess (state, getters) {
    //   return _.fromPairs(_.map(getters.models, model => {
    //     let retVal = {
    //       'types': _.map(getters.types, type => {
    //         return _.indexOf(model['types'], type) >= 0
    //       }),
    //       'properties': _.fromPairs(_.map(getters.propertyKeys, propertyKey => {
    //         let retVal

    //         if (_.has(model['properties'], propertyKey)) {
    //           retVal = _.map(getters.properties[propertyKey], value => {
    //             return _.indexOf(model['properties'][propertyKey], value) >= 0
    //           })
    //         } else {
    //           retVal = _.fill(Array(getters.properties[propertyKey].length), false)
    //         }

    //         return [propertyKey, retVal]
    //       }))
    //     }
    //     return [model.id, retVal]
    //   }))
    // },
    // typesAccess (state, getters) {
    //   return _.fromPairs(_.map(getters.types, type => {
    //     let retVal = {
    //       'models': _.map(getters.models, model => {
    //         return _.indexOf(model['types'], type) >= 0
    //       }),
    //       'properties': _.fromPairs(_.map(getters.propertyKeys, propertyKey => {
    //         let retVal = _.fill(Array(getters.properties[propertyKey].length), false)
    //         return [propertyKey, retVal]
    //       }))
    //     }
    //     return [type, retVal]
    //   }))
    // },
    // propertiesAccess (state, getters) {
    //   return _.fromPairs(_.map(getters.properties, (property, key) => {
    //     let pairs = _.map(property, datum => {
    //       let retWal = {
    //         'models': _.map(getters.models, model => {
    //           return _.indexOf(model['properties'][key], datum) >= 0
    //         }),
    //         'types': _.fill(Array(getters.types.length), false)
    //       }
    //       return [datum, retWal]
    //     })
    //     return [key, _.fromPairs(pairs)]
    //   }))
    // }
    // activeTodos (state) {
    //   return state.todos.filter(todo => !todo.completed)
    // },
    // completedTodos (state) {
    //   return state.todos.filter(todo => todo.completed)
    // }
  },
  mutations: {
    MAKE_ACTIVE_STATUS (state, key) {
      // console.log('SET_ACTIVE_MODEL')
      state.activeStatus = key
    },
    MAKE_ACTIVE_TAB (state, key) {
      // console.log('SET_ACTIVE_MODEL')
      state.activeTab = key
    },
    MAKE_ACTIVE_COLOUR (state, key) {
      // console.log('SET_ACTIVE_MODEL')
      state.activeColour = key
    },
    ADD_ITEM (state, itemID) {
      // console.log('SET_ACTIVE_MODEL')
      state.comparedItems.push(itemID)
    },
    REMOVE_ITEM (state, index) {
      // console.log('SET_ACTIVE_TYPE')
      let arr = state.comparedItems
      arr.splice(index, 1)
      state.comparedItems = arr
    }
  },
  actions: {
    makeActiveStatus ({ commit }, key) {
      commit('MAKE_ACTIVE_STATUS', key)
    },
    makeActiveTab ({ commit }, key) {
      commit('MAKE_ACTIVE_TAB', key)
    },
    makeActiveColour ({ commit }, key) {
      commit('MAKE_ACTIVE_COLOUR', key)
    },
    addItem ({ commit }, id) {
      commit('ADD_ITEM', id)
    },
    removeItem ({ commit, state }, { index, item }) {
      if (state.reference === item) { // TODO: Leave if ID is still in Array
        let newReferenceID
        let n = 0
        do {
          newReferenceID = state.comparedItems[n]
          n += 1
        } while (state.comparedItems[n - 1] === item && n <= state.comparedItems.length)
        commit('MAKE_REFERENCE', newReferenceID)
      }
      commit('REMOVE_ITEM', index)
    }
  }
})

export default store
