<template>
  <nuxt-link :to="'../indicator/' + i.slug">
    <div class="vis-indicator" ref="vis">
      <svg
        class="process"
        viewBox="-1 -1 2 2"
        style="transform: rotate(-0.25turn)"
      >
        <circle cx="0" cy="0" r="1" fill="#f2f2f2" />
        <path :d="path" fill="#04A6F0"></path>
        <circle cx="0" cy="0" r="0.7" fill="#fff" />
        <text
          x="0"
          y="-1.4"
          style="transform: rotate(0.25turn)"
          alignment-baseline="middle"
          text-anchor="middle"
          fill="#04A6F0"
          >{{ i.progress === null ? '—' : i.progress.toFixed(0) + '&#8239;%' }}</text>
      </svg>
      <svg
        class="icon"
        viewBox="-1 -1 2 2">
        <circle
          v-if="i.author === 'okf'"
          fill="green"
          cx="0"
          cy="0"
          r="1"
        />
        <circle
          v-if="i.badTarget"
          cx="0"
          cy="0"
          r="1"
        />
        <circle
          v-if="i.badIndicator"
          fill="red"
          cx="0"
          cy="0"
          r="1"
        />
        <circle
          v-if="i.uncalculable"
          cx="0"
          cy="0"
          r="1"
        />
        <circle
          v-if="i.modTarget"
          fill="#8EB3EE"
          cx="0"
          cy="0"
          r="1"
        />
      </svg>
      <h5>{{ i.label }}</h5>
<!--       <ul>
        <li>badTarget: {{ i.badTarget ? 'ja' : 'nein' }}</li>
        <li>badIndicator: {{ i.badIndicator ? 'ja' : 'nein' }}</li>
        <li>uncalculable: {{ i.uncalculable ? 'ja' : 'nein' }}</li>
        <li>modTarget: {{ i.modTarget ? 'ja' : 'nein' }}</li>
        <li>neuer: {{ i.altIndicator }}</li>
      </ul> -->
    </div>
  </nuxt-link>
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
    props: ['i'],
    data: function () {
      return {
        width: 0,
        height: 0,
        okfLabel: 0,
        dnsLabel: 0
      }
    },
    mounted: function () {
      this.width = this.$refs.vis.clientWidth
      this.height = this.$refs.vis.clientHeight
    },
    computed: {
      path () {
        return getPieChart(getValueInRange(this.i.progress / 100))
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vis-indicator {
    width: 100%;
    font-size: 0.7rem;
    background-color: #fff;
    padding: 1rem;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
    width: 150px;
    line-height: 1rem;

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
      hyphens: auto;
    }

    svg {
      &.process {
        margin: 0.5rem;

        text {
          font-size: 0.02rem;
          font-weight: bold;
        }
      }

      &.icon {
        width: 20px;
      }
    }

    ul li {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
    }
  }
</style>

