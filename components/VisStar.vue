<template>
  <svg class="vis-star"
    :style="{ width: size[0] + margin[0] * 2 + 'px', height: size[1] + margin[1] * 2 + 'px' }">
    <circle
      v-for="circle in circles"
      :r="circle"
      :cx="center.x"
      :cy="center.y"
      class="tick" />
    <circle
      v-if="!!activeCircle"
      :r="activeCircle"
      :cx="center.x"
      :cy="center.y"
      class="hover" />
    <g>
      <g
        v-for="(sdg, slug) in sdgs"
        :transform="'rotate(' + (portion * sdg.n) + ',' + center.x + ',' + center.y + ')'"
        :class="{ hover: !!activeSDG, active: activeSDG === slug }"
        >
        <text
          :transform="'rotate(' + (portion * sdg.n * -1) + ',' + center.x + ',' + (textDistance) + ')'"
          :y="textDistance + getTextAnchor(sdg.n)"
          alignment-baseline="middle"
          :text-anchor="sdg.n < 17 / 2 ? 'start' : 'end'">
          <nuxt-link :to="'sdg/' + slug">
            <tspan
              v-for="(line, n) in sdg.labels"
              :x="center.x"
              :dy="n * 1 + 'em'">{{ line }}</tspan>
          </nuxt-link>
        </text>
        <circle
          r="3"
          :cx="center.x"
          :cy="textDistance"
          class="marker-text"
        />
        <line
          class="axis-total"
          :x1="center.x"
          :y1="margin[1] + lines[1] / 100 * size[1]"
          :x2="center.x"
          :y2="margin[1] + lines[0] / 100 * size[1]"  />
        <line
          class="axis-diff"
          :x1="center.x"
          :y1="margin[1] + ysPercent[sdg.n][0] / 100 * size[1]"
          :x2="center.x"
          :y2="margin[1] + ysPercent[sdg.n][1] / 100 * size[1]"  />
        <polygon
          class="click"
          v-on:mouseover="setActiveSDG(slug)"
          v-on:mouseleave="setActiveSDG(false)"
          :points="polygon" />
        <circle
          v-on:mouseover="setActiveDot(slug, sdg.okf)"
          v-on:mouseleave="setActiveDot(false, false)"
          class="marker-okf"
          r="4"
          :cx="center.x"
          :cy="margin[1] + ysPercent[sdg.n][0] / 100 * size[1]" />
        <circle
          v-on:mouseover="setActiveDot(slug, sdg.dns)"
          v-on:mouseleave="setActiveDot(false, false)"
          class="marker-dns"
          r="4"
          :cx="center.x"
          :cy="margin[1] + ysPercent[sdg.n][1] / 100 * size[1]" />
      </g>
    </g>
  </svg>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
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
        ticks: [50],
        activeSDG: false,
        activeCircle: false
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
      portion (state) {
        const { sdgs } = this
        return 360 / _.keys(sdgs).length
      },
      center (state) {
        const { size, margin } = this
        return {
          x: size[0] / 2 + margin[0],
          y: size[1] / 2 + margin[1]
        }
      },
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
      },
      polygon (state) {
        const { size, margin, getCoordinatesForPercent, center, portion } = this
        const offset = portion / 2
        const n = getCoordinatesForPercent(offset)[0] * (size[0] / 9.1) // Dont know why 9.1

        const x = center.x
        const y1 = center.y
        const y2 = margin[1]

        const middle = [x, y1]
        const right = [x + n, y2]
        const left = [x - n, y2]

        return _.map([middle, right, left], pair => {
          return pair.join(',')
        }).join(' ')
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
      },
      getCoordinatesForPercent (percent) {
        const x = Math.cos(2 * Math.PI * percent)
        const y = Math.sin(2 * Math.PI * percent)
        return [x, y]
      },
      setActiveSDG (id) {
        this.activeSDG = id
      },
      setActiveDot (id, percentage) {
        this.activeSDG = id
        if (percentage) {
          const outer = Math.min(...this.size) / 2 * (100 - this.lines[1] * 2) / 100
          const inner = Math.min(...this.size) / 2 * (100 - this.lines[0] * 2) / 100
          const scale = new Scale().domain([0, 100]).range([inner, outer])
          this.activeCircle = scale.map(percentage)
        } else {
          this.activeCircle = false
        }
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

