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
        <rect
          v-for="(bar, n) in bars"
          v-if="bar.height >= 0"
          :class="bar.klass"
          :x="bar.x + 'px'"
          :width="bar.width + 'px'"
          :y="bar.y + 'px'"
          :height="bar.height + 'px'"
        >
          <title>{{ bar.label + ': ' + bar.value }}</title>
        </rect>
        <line
          :x1="labelX + 'px'"
          x2="100%"
          :y1="height - margin[1] + 'px'"
          :y2="height - margin[1] + 'px'"
          class="base" />
        <text
          v-for="(bar, n) in bars"
          :x="bar.labelX + 'px'"
          :transform="'rotate(90,' + bar.labelX + ',' + bar.labelY + ')'"
          :y="bar.labelY"
          v-html="bar.label"
          />
      </svg>
    </div>
    <table class="mobile-visible">
      <thead>
        <tr>
          <th>Land</th>
          <th>Wert</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bar, n) in bars" :class="bar.klass">
          <td v-html="bar.label" />
          <td v-html="bar.value" />
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
            'labelX': x + 0.25 * widthBar,
            'labelY': height - margin[1] + 15,
            'value': value[1]
          }
        })
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

  .bar {
    fill: lighten($color-mute,20%);

    &.active {
      fill: $color-okf;
    }
  }

  tr.active {
    color: $color-okf;
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
