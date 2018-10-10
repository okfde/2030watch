<template>
  <div class="vis-chart">
    <span
      :class="{ 'vis-number': true, 'tiny': tiny }"
      :style="{ color: '#' + fill, 'font-size': size }"
      v-html="format(value)"
    />
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

  function getChart (value) {
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
        return getChart(getValueInRange(this.value / 100))
      },
      size () {
        return '3.2rem'
      }
    },
    methods: {
      format: format
    }
  }
</script>

<style lang="scss" scoped>
  .vis-chart {
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
