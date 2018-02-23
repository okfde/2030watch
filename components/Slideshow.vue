<template>
  <div class="slideshow">
    <div>
      <h2>Deutschland hat sich verpflichtet bis 2030 die globalen Nachhaltigkeits-Ziele der Vereinten Nationen zu erreichen. 2030 Watch überprüft, ob dieses Versprechen eingehalten wird.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div>
      <span>Grafik</span>
    </div>
  </div>
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
        range: [25, 100],
        size: [500, 500],
        margin: [300, 100],
        textDistance: 80,
        ticks: [50]
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      ...mapGetters([
        'indicators',
        'sdgs',
        'sdgsSlugs'
      ]),
      lines (state) {
        const scale = new Scale().domain([0, 100]).range([50, 0])
        return [scale.map(this.range[0]), scale.map(this.range[1])]
      },
      ysPercent (state) {
        const scale = new Scale().domain([0, 100]).range(this.lines)
        return _.map(this.sdgs, sdg => {
          return [scale.map(sdg.okf), scale.map(sdg.dns), 1]
        })
      },
      circles (state) {
        const outer = Math.min(...this.size) / 2 * (100 - this.lines[1] * 2) / 100
        const inner = Math.min(...this.size) / 2 * (100 - this.lines[0] * 2) / 100
        const scale = new Scale().domain([0, 100]).range([inner, outer])
        return _.map(this.ticks, n => {
          return scale.map(n)
        })
      }
    },
    watch: {
    },
    methods: {
      ...mapActions([
      ]),
      getTextAnchor (n) {
        const scaleRight = new Scale().domain([0, 8.5]).range([-18, 12])
        const scaleLeft = new Scale().domain([8.5, 17]).range([12, -18])
        return n < 9 ? scaleRight.map(n) : scaleLeft.map(n)
      }
    },
    components: {
      // 'resize-observer': ResizeObserver
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

</style>

