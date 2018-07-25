<template>
  <div class="vis">
    <div class="mobile-invisible">
      <svg ref="vis" :class="{ visible }">
        <line
          v-for="tick in ticks"
          :x1="labelX + 'px'"
          x2="100%"
          :y1="tick[1] + 'px'"
          :y2="tick[1] + 'px'"
          class="tick" />
        <text
          v-for="tick in ticks"
          alignment-baseline="middle"
          text-anchor="end"
          :x="labelX - 5 + 'px'"
          :y="tick[1] + 'px'"
          v-html="tick[0]" />
        <path
          :d="line"
          class="line" />
        <circle
          v-for="(dot, n) in dots"
          :class="dot.klass"
          :cx="dot.x + 'px'"
          r="7"
          :width="dot.width + 'px'"
          :cy="dot.y + 'px'"
          :height="dot.height + 'px'"
        >
          <title>{{ dot.label + ': ' + dot.value }}</title>
        </circle>
        <line
          :x1="labelX + 'px'"
          x2="100%"
          :y1="height - margin[1] + 'px'"
          :y2="height - margin[1] + 'px'"
          class="base" />
        <text
          v-for="(dot, n) in dots"
          :x="dot.x + 'px'"
          :transform="'rotate(90,' + dot.labelX + ',' + dot.labelY + ')'"
          :y="dot.labelY"
          v-html="dot.label"
          />
      </svg>
    </div>
    <table class="mobile-visible">
      <thead>
        <tr>
          <th>Jahr</th>
          <th>Wert</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dot, n) in dots">
          <td v-html="dot.label" />
          <td v-html="dot.value" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { scaleLinear } from 'd3-scale'
  import createTicks from '~/assets/js/createTicks.js'

  export default {
    props: ['values'],
    data: function () {
      const range = [10, 300] // default
      const y = scaleLinear().range(range).domain([0, Math.max(...this.values.map(value => { return value[1] }))]).nice()
      return {
        y,
        range,
        width: 0,
        height: 300, // default
        labelX: 0,
        widthBar: 0,
        gutter: 0,
        ticks: [],
        margin: [10, 100],
        visible: false
      }
    },
    mounted: function () {
      this.calcSizes()
      window.addEventListener('resize', this.calcSizes, false)
    },
    methods: {
      calcSizes: function () {
        const { margin } = this
        this.width = this.$refs.vis.clientWidth || this.$refs.vis.parentNode.clientWidth
        this.height = this.$refs.vis.getBoundingClientRect().height || this.$refs.vis.parentNode.getBoundingClientRect().height
        this.labelX = Math.min(Math.max(this.width * 0.1, 20), 70) + 5
        this.gutter = Math.min(Math.max(this.width * 0.01, 5), 10)
        this.widthBar = (this.width - this.labelX - (this.gutter * (this.values.length + 1))) / this.values.length
        this.range = [margin[1], this.height - margin[0]]
        this.y.range(this.range)
        this.visible = true
      }
    },
    computed: {
      dots: function () {
        const { labelX, widthBar, gutter, height, y, margin } = this
        return this.values.map((value, n) => {
          const x = labelX + ((n + 0.5) * widthBar) + (n + 1) * gutter
          return {
            'klass': 'dot',
            'label': value[0],
            'x': x,
            'y': height - y(value[1]),
            'height': y(value[1]) - margin[1],
            'width': widthBar,
            'labelX': x,
            'labelY': height - margin[1] + 15,
            'value': value[1]
          }
        })
      },
      line: function () {
        const values = this.dots.map(dot => {
          return [dot.x, dot.y].join(' ')
        }).join(' L ')
        return 'M ' + values
      }
    },
    watch: {
      range: function () {
        this.ticks = createTicks(this.y.domain(), this.height, this.y)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  svg {
    width: 100%;
    height: 400px;
    opacity: 0;
    transition: opacity 0.2s;

    &.visible {
      opacity: 1;
    }

    text {
      font-size: 0.85rem;
    }
  }

  .tick {
    stroke: lighten($color-default, 50%);
    stroke-width: 1px;

    &:nth-child(odd) {
      stroke: lighten($color-mute, 20%);
    }
  }

  .base {
    stroke: $color-default;
    stroke-width: 1px;
  }

  .dot {
    fill: $color-okf;
    stroke: $color-white;
    stroke-width: 2px;
  }

  .line {
    stroke: $color-okf;
    fill: none;
    stroke-width: 2px;
  }

  ul {
    height: 150px;
  }

  ul li {
    display: inline-block;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.85rem;
  }

  .label {
    transform: translate(10%, 70%) rotate(45deg);
  }
</style>
