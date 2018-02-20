<template>
  <div class="container rows">
    <section class="columns">
      <div>
        <h2>Deutschland hat sich verpflichtet bis 2030 die globalen Nachhaltigkeits-Ziele der Vereinten Nationen zu erreichen. 2030 Watch überprüft, ob dieses Versprechen eingehalten wird.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
        <span>Grafik</span>
      </div>
    </section>
    <section class="columns">
      <div>
        <h2>Sonnen-Grafik</h2>
        <ul>
          <li v-for="(sdg, slug) in sdgs"><nuxt-link :to="slug">{{ sdg.label }} {{ sdg.dns }}% vs. {{ sdg.okf }}% vs. {{ sdg.total }}%</nuxt-link></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  // import { ResizeObserver } from 'vue-resize'
  // import _ from 'lodash'

  export default {
    data: function () {
      return {
        // resolution: [],
        // shapes: [],
        // shapi: [],
        // points: [],
        // placements: [],
        // legendPlacements: [],
        // rows: 5,
        // gutter: 5
      }
    },
    computed: {
      ...mapState([
        'data'
        // 'groups',
        // 'activeTab'
      ]),
      ...mapGetters([
        'indicators',
        'sdgs',
        'sdgsSlugs'
        // 'status',
        // 'organisations',
        // 'domains',
        // 'scores'
      ]),
      ysPercent (state) {
        // let { rows, gutter } = state
        // let row = (100 - (rows - 1) * gutter) / rows

        // let i = 0
        // return _.map(new Array(rows * 2), (_, n) => {
        //   if (n === 0) return 0
        //   if (n === rows * 2 - 1) {
        //     i += row * 0.5
        //   } else {
        //     i += n % 2 ? row : gutter
        //   }
        //   return i / 100
        // })
      }
    },
    watch: {
      points: function () {
        // this.calcShapes()
        // this.calcTextPlacement()
      }
    },
    methods: {
      ...mapActions([
        // 'makeActiveStatus',
        // 'makeActiveColour',
        // 'makeActiveTab'
      ]),
      getResolution () {
        // this.resolution = [this.$refs.vis.clientWidth, this.$refs.vis.clientHeight]
        // // console.log(this.resolution)
        // this.calcShapes()
        // this.calcPoints()
        // this.calcLegendPlacement()
      },
      handleResize () {
        // console.log('resized')
        // this.getResolution()
      },
      calcLegendPlacement () {
        // let labels = ['Scaled by', '▲ Population', '▲ Land Mass', '▲ Economy']
        // let [width, height] = this.resolution
        // let { rows, gutter } = this
        // let row = (100 - (rows - 1) * gutter) / rows
        // this.legendPlacements = _.map(labels, (label, n) => {
        //   return {
        //     'label': label,
        //     'x': width * 0.03 / 2,
        //     'y': height * (((n + 0.5) * row + n * gutter) / 100)
        //   }
        // })
      },
      calcPoints () {
        // let [width, height] = this.resolution
        // let { rows } = this
        // let cumulation = _.fill(new Array(rows), 0)

        // let ys = _.map(this.ysPercent, y => {
        //   return height - height * y
        // })

        // let prevXs = _.fill(new Array(rows * 2), 0)

        // let points = _.map(this.countries, country => {
        //   let points = []
        //   let leftsideXs = _.reverse(prevXs)

        //   _.each(leftsideXs, (x, n) => {
        //     points.push([x, ys[n]])
        //   })

        //   let { counter, population, gdp, area } = country['values']

        //   cumulation[0] += counter['percent']
        //   cumulation[1] += population['percent']
        //   cumulation[2] += area['percent']
        //   cumulation[3] += gdp['percent']
        //   cumulation[4] += counter['percent']

        //   let rightsideXs = _.map(new Array(rows * 2), (x, n) => {
        //     let index = Math.floor(n / 2)
        //     return _.round((cumulation[index] / 100) * (width * 0.97), 2)
        //   })

        //   _.each(rightsideXs, (x, n) => {
        //     points.push([x, ys[(rows * 2 - 1) - n]])
        //   })

        //   // console.log(_.round(rightsideXs[1] - left[1], 1))
        //   // console.log(points)

        //   prevXs = rightsideXs
        //   return points
        // })

        // this.points = Object.freeze(points)
      },
      calcTextPlacement () {
        // let placements = _.map(this.points, country => {
        //   let n = country.length / 4
        //   let points = _.clone(country)
        //   let placements = []
        //   while (n--) {
        //     let corners = _.flatten([_.pullAt(points, [0, 1]), _.pullAt(points, [points.length - 2, points.length - 1])])
        //     let xs = _.map(corners, '0')
        //     let ys = _.map(corners, '1')
        //     let minx = _.min(xs)
        //     let maxx = _.max(xs)
        //     let miny = _.min(ys)
        //     let maxy = _.max(ys)
        //     let x = (maxx - minx) / 2 + minx
        //     let y = (maxy - miny) / 2 + miny
        //     // console.log(corners, xs, ys, x, y)
        //     placements[n] = [x, y, _.max(xs) - minx]
        //   }
        //   // console.log(placements)
        //   return placements
        // })

        // this.placements = Object.freeze(placements)
      },
      calcShapes () {
        // let shapes = _.map(this.points, country => {
        //   let curves = []

        //   let l = country.length - 1
        //   for (let n = 0; n < l; n++) {
        //     if (n % 2) {
        //       let diff = (country[n + 1][1] - country[n][1]) / 3
        //       let y1 = country[n][1] + diff
        //       let y2 = country[n + 1][1] - diff
        //       curves.push('C ' + [country[n][0], y1].join(' ') + ' , ' + [country[n + 1][0], y2].join(' ') + ' , ')
        //     } else {
        //       curves.push(country[n].join(' ') + ' L ' + country[n + 1].join(' '))
        //     }
        //   }

        //   // console.log('M ' + curves.join(' ') + ' Z')

        //   return 'M ' + curves.join(' ') + ' Z'
        // })

        // this.shapes = Object.freeze(shapes)

        // this.shapi = _.map(this.points, country => {
        //   let shape = _.map(country, point => {
        //     return point.join(' ')
        //   })

        //   return 'M ' + shape.join(' L ') + ' Z'
        // })
      }
    },
    components: {
      // 'resize-observer': ResizeObserver
    },
    mounted () {
      // this.getResolution()
      // console.log(this.countries)
    }
  }
</script>

<style lang="scss">

</style>

