<template>
  <div class="vis-piechart">
    <span
      :class="{ 'vis-number': true, 'tiny': tiny }"
      :style="{ color: '#' + fill, 'font-size': size }"
      v-html="format(value)"
    />
    <!-- <svg class="vis-process" viewBox="-1 -1 2 2">
      <circle cx="0" cy="0" r="1" fill="rgba(0, 0, 0, .1)" />
      <g style="transform: rotate(-0.25turn)">
        <path :d="path" :fill="'#' + fill"></path>
      </g>
      <circle cx="0" cy="0" r="0.7" :fill="'#' + background" />
    </svg> -->
  </div>
</template>

<script>
  import format from '~/assets/js/format.js'

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

  export default {
    props: {
      value: {
        type: Number
      },
      fill: {
        type: String
      },
      background: {
        type: String
      },
      tiny: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      path () {
        return getPieChart(getValueInRange(this.value / 100))
      },
      size () {
        // const chars = this.format(this.value).toString().split('&')[0].length
        // if (chars <= 2) {
        //   return '1.6rem'
        // }
        // if (chars === 3) {
        //   return '1.2rem'
        // }
        // return '1rem'
        return '3.2rem'
      }
    },
    methods: {
      format: format
    }
  }
</script>

<style lang="scss" scoped>
  .vis-piechart {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    height: 2.8rem;

    .vis-number {
      text-align: center;
      width: 100%;
      font-weight: bold;
      font-size: 1.6rem;

      &.tiny {
        font-size: 0.8rem !important;
      }
    }

    .vis-process {
      width: 100%;
    }
  }
</style>
