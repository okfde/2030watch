<template>
  <svg class="vis-star">
    <g v-for="(sdg, slug) in sdgs" :transform="'rotate(' + (360 / 17 * sdg.n) + ', 250, 250)'">
      <circle r="4" cx="50%" :cy="ysPercent[sdg.n][0] + '%'" />
      <circle r="4" cx="50%" :cy="ysPercent[sdg.n][1] + '%'" />
      <line x1="50%" :y1="lines[1] + '%'" x2="50%" :y2="lines[0] + '%'"  />
    </g>
  </svg>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  // import { ResizeObserver } from 'vue-resize'
  import _ from 'lodash'

  class Scale {
    constructor () {
      return this
    }

    domain (v) { // Set input range
      this.minD = v[0]
      this.maxD = v[1]
      return this
    }

    range (v) { // Set output range
      this.minR = v[0]
      this.maxR = v[1]
      return this
    }

    map (v) { // Map input value to output range
      const { minD, maxD, minR, maxR } = this

      // Check if value is outside of input range
      if (minD <= maxD) { // Input range is rising
        if (v <= minD) {
          return minR
        } else if (v >= maxD) {
          return maxR
        }
      } else { // Input range is inverted
        if (v >= minD) {
          return minR
        } else if (v <= maxD) {
          return maxR
        }
      }

      // Calculate relation of value to input range and find relation on ouput range
      return ((maxR - minR) * ((v - minD) / (maxD - minD))) + minR
    }
  }

  export default {
    data: function () {
      return {
        range: [30, 100]
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
      lines (state) {
        const scale = new Scale().domain([0, 100]).range([50, 0])
        console.log(this.range[0], [scale.map(this.range[0]), scale.map(this.range[1])])
        return [scale.map(this.range[0]), scale.map(this.range[1])]
      },
      ysPercent (state) {
        const scale = new Scale().domain([0, 100]).range([35, 0]) // generate this pair
        return _.map(this.sdgs, sdg => {
          return [scale.map(sdg.okf), scale.map(sdg.dns)]
        })
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

