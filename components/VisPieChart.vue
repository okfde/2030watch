<template>
  <svg
    class="process"
    viewBox="-1 -1 2 2"
    style="transform: rotate(-0.25turn)"
  >
    <circle cx="0" cy="0" r="1" fill="#f2f2f2" />
    <path :d="path" :fill="'#' + fill"></path>
    <circle cx="0" cy="0" r="0.7" :fill="'#' + background" />
    <text
      x="0"
      y="-1.4"
      style="transform: rotate(0.25turn)"
      alignment-baseline="middle"
      text-anchor="middle"
      :fill="'#' + fill"
      >{{ value === null ? '—' : value.toFixed(0) + '&#8239;%' }}</text>
  </svg>
</template>

<script>
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
    props: ['value', 'fill', 'background'],
    computed: {
      path () {
        return getPieChart(getValueInRange(this.value / 100))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .process {
    margin: 0.5rem;

    text {
      font-size: 0.02rem;
      font-weight: bold;
    }
  }
</style>

