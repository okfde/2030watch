<template>
  <svg class="vis-star"
    :style="{ width: size[0] + margin[0] * 2 + 'px', height: size[1] + margin[1] * 2 + 'px' }">
    <circle
      v-for="circle in circles"
      :r="circle"
      :cx="size[0] / 2 + margin[0]"
      :cy="size[0] / 2 + margin[1]"
      class="tick" />
    <g :transform="'translate(' + 0 + ',' + 0 + ')'">
      <g v-for="(sdg, slug) in sdgs" :transform="'rotate(' + (360 / 17 * sdg.n) + ',' + (size[0] / 2 + margin[0]) + ',' + (size[1] / 2 + margin[1]) + ')'">
        <text
          :transform="'rotate(' + (360 / 17 * sdg.n * -1) + ',' + (size[0] / 2 + margin[0]) + ',' + (textDistance) + ')'"
          :y="textDistance + getTextAnchor(sdg.n)"
          alignment-baseline="middle"
          :text-anchor="sdg.n < 17 / 2 ? 'start' : 'end'">
          <nuxt-link :to="'sdg/' + slug">
            <tspan
              v-for="(line, n) in sdg.labels"
              :x="size[0] / 2 + margin[0]"
              :dy="n * 1 + 'em'">{{ line }}</tspan>
          </nuxt-link>
        </text>
        <circle
          r="3"
          :cx="size[0] / 2 + margin[0]"
          :cy="textDistance"
          class="marker-text"
        />
        <line
          class="axis-total"
          :x1="size[0] / 2 + margin[0]"
          :y1="margin[1] + lines[1] / 100 * size[1]"
          :x2="size[0] / 2 + margin[0]"
          :y2="margin[1] + lines[0] / 100 * size[1]"  />
        <line
          class="axis-diff"
          :x1="size[0] / 2 + margin[0]"
          :y1="margin[1] + ysPercent[sdg.n][0] / 100 * size[1]"
          :x2="size[0] / 2 + margin[0]"
          :y2="margin[1] + ysPercent[sdg.n][1] / 100 * size[1]"  />
        <circle
          class="marker-okf"
          r="4"
          :cx="size[0] / 2 + margin[0]"
          :cy="margin[1] + ysPercent[sdg.n][0] / 100 * size[1]" />
        <circle
          class="marker-dns"
          r="4"
          :cx="size[0] / 2 + margin[0]"
          :cy="margin[1] + ysPercent[sdg.n][1] / 100 * size[1]" />
      </g>
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

