<template>
  <div class="vis">
    <svg>
      <line
        v-for="tick in ticks"
        :x1="0.5 * (100 / values.length) + '%'"
        x2="100%"
        :y1="tick[1] + '%'"
        :y2="tick[1] + '%'"
        class="tick" />
      <text
        v-for="tick in ticks"
        alignment-baseline="middle"
        text-anchor="end"
        :x="0.45 * (100 / values.length) + '%'"
        :y="tick[1] + '%'"
        v-html="tick[0]" />
      <rect
        v-for="(value, n) in values"
        :class="{ 'bar': true, 'active': value[0] === 'Germany' }"
        :x="(n + 1) * (100 / values.length) + '%'"
        :width="(100 / values.length - 2) + '%'"
        :y="100 - y(value[1]) + '%'"
        :height="y(value[1]) + '%'"
        />
    </svg>
    <ul>
      <li v-for="value in values" class="label" :style="{ width: (100 / values.length) + '%' }"><span>{{ value[0] }}</span></li>
    </ul>
  </div>
</template>

<script>
  import { scaleLinear } from 'd3-scale'

  export default {
    props: ['values'],
    data: function () {
      const range = [10, 90]
      const y = scaleLinear().range(range).domain([0, Math.max(...this.values.map(value => { return value[1] }))]).nice()
      return {
        y,
        range
      }
    },
    methods: {
      calcHeight: function (v) {
        return ((100 - 0) * ((v - 0) / (this.maxValue - 0))) + 0
      }
    },
    computed: {
      ticks () {
        const [v1, v2] = this.y.domain()
        const range = Math.abs(v1 - v2)
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
        return ticks.map((tick, n) => {
          return [(n * step).toFixed(dimension), 100 - this.y(n * step)]
        }).reverse()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  svg {
    width: 100%;
    height: 300px;

    text {
      font-size: 0.8rem;
    }
  }

  .tick {
    stroke: $color-default;
    stroke-width: 1px;

    &:nth-child(odd) {
      stroke: $color-mute;
    }
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
    transform: rotate(45deg);
  }
</style>
