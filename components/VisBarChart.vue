<template>
  <div class="vis">
    <div>
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
        <rect
          v-for="(bar, n) in bars"
          :class="bar.klass"
          :x="bar.x + 'px'"
          :width="bar.width + 'px'"
          :y="bar.y + 'px'"
          :height="bar.height + 'px'"
          />
        <line
          :x1="labelX + 'px'"
          x2="100%"
          :y1="height - margin[1] + 'px'"
          :y2="height - margin[1] + 'px'"
          class="base" />
        <text
          v-for="(bar, n) in bars"
          alignment-baseline="middle"
          :x="bar.x + 0.5 * widthBar + 'px'"
          :transform="'rotate(45,' + bar.labelX + ',' + bar.labelY + ')'"
          :y="bar.labelY"
          v-html="bar.label"
          />
      </svg>
    </div>
  </div>
</template>

<script>
  import { scaleLinear } from 'd3-scale'

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
      const { margin } = this
      this.width = this.$refs.vis.clientWidth || this.$refs.vis.parentNode.clientWidth
      this.height = this.$refs.vis.clientHeight || this.$refs.vis.parentNode.clientHeight
      this.labelX = Math.min(Math.max(this.width * 0.1, 20), 70) + 5
      this.gutter = Math.min(Math.max(this.width * 0.01, 5), 10)
      this.widthBar = (this.width - this.labelX - (this.gutter * (this.values.length + 1))) / this.values.length
      this.range = [margin[1], this.height - margin[0]]
      this.y.range(this.range)
      this.visible = true
    },
    computed: {
      bars: function () {
        const { labelX, widthBar, gutter, height, y, margin } = this
        return this.values.map((value, n) => {
          const x = labelX + n * widthBar + (n + 1) * gutter
          return {
            'klass': 'bar' + (value[0] === 'Germany' ? ' active' : ''),
            'label': value[0],
            'x': x,
            'y': height - y(value[1]),
            'height': y(value[1]) - margin[1],
            'width': widthBar,
            'labelX': x + 0.5 * widthBar,
            'labelY': height - margin[1] + 15
          }
        })
      }
    },
    watch: {
      range: function () {
        const [v1, v2] = this.y.domain()
        const range = Math.abs(v2 - v1)
        const dimension = String(parseInt(range)).length
        const factor = 10 ** dimension
        let c = 10 // number of ticks
        let n = true
        while (c > 0 && n) {
          c--
          if (range % (c / factor) === 0) {
            n = false
          }
        }
        const step = range / c
        const ticks = Array.apply(null, Array(c + 1)).map(function () {})
        this.ticks = ticks.map((tick, n) => {
          return [(n * step).toFixed(dimension), this.height - this.y(n * step)]
        }).reverse()
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
      font-size: 0.8rem;
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

  .bar {
    fill: $color-mute;

    &.active {
      fill: $color-okf;
    }
  }

  ul {
    height: 150px;
  }

  ul li {
    display: inline-block;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.8rem;
  }

  .label {
    transform: translate(10%, 70%) rotate(45deg);
  }
</style>
