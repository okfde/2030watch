<template>
  <svg class="sdg-vis" ref="vis">
    <g class="ticks">
      <g v-if="vTickLabels" class="tickLabels">
        <text
          class="sdg-label sdg-label-tick"
          alignment-baseline="baseline"
          text-anchor="start"
          x="1px"
          y="30%"
          v-html="format(0)" />
        <text
          class="sdg-label sdg-label-tick"
          alignment-baseline="baseline"
          text-anchor="end"
          x="calc(100% - 1px)"
          y="30%"
          v-html="format(100)" />
      </g>
      <g class="tickLines" v-if="vTicks">
        <line
          v-for="tick in ['calc(0% + 1px)', '25%', '50%', '75%', 'calc(100% - 1px)']"
          class="tick"
          stroke-linecap="round"
          :x1="tick"
          y1="40%"
          :x2="tick"
          y2="60%" />
      </g>
    </g>
    <line
      class="range"
      x1="0%"
      y1="50%"
      x2="100%"
      y2="50%" />
    <line
      class="diff"
      :stroke="okf < dns ? '#D22F27' : '#5C9E31'"
      :x1="okf + '%'"
      y1="50%"
      :x2="dns + '%'"
      y2="50%" />
    <circle
      class="sdg-marker sdg-marker-total"
      :style="{ 'stroke': cBackground }"
      :cx="okf + '%'"
      cy="50%"
      r="8" />
    <circle
      class="sdg-marker sdg-marker-dns"
      :style="{ 'stroke': cBackground }"
      :cx="dns + '%'"
      cy="50%"
      r="8" />
    <g :class="{ markerLabels: true, invisible: vMarkerLabels }">
      <text
        ref="okf"
        :class="{ 'sdg-label': true, 'sdg-label-total': true, 'invert': invert }"
        alignment-baseline="baseline"
        :text-anchor="labels[0].l"
        :x="labels[0].x"
        y="30%"
        v-html="(true ? '2030 Watch: ' : '') + format(okf)" />
      <text
        ref="dns"
        :class="{ 'sdg-label': true, 'sdg-label-dns': true, 'invert': invert }"
        alignment-baseline="hanging"
        :text-anchor="labels[1].l"
        :x="labels[1].x"
        y="70%"
        v-html="(true ? 'DNS: ' : '') + format(dns)" />
    </g>
  </svg>
</template>

<script>
  import format from '~/assets/js/format.js'

  export default {
    props: {
      sdg: {
        type: Object,
        required: true
      },
      vTickLabels: {
        type: Boolean,
        default: false
      },
      cBackground: {
        type: String,
        default: '#f9f9f9'
      },
      vMarkerLabels: {
        type: Boolean,
        default: true
      },
      invert: {
        type: Boolean,
        default: false
      },
      vTicks: {
        type: Boolean,
        default: true
      }
    },
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
      this.okfWidth = this.$refs.okf.clientWidth
      this.dnsWidth = this.$refs.dns.clientWidth
    },
    methods: {
      format: format
    },
    computed: {
      dns: function () {
        return this.sdg.values.dns
      },
      okf: function () {
        return this.sdg.values.okf
      },
      labels: function () {
        let dns = this.dns / 100 * this.width
        let okf = this.okf / 100 * this.width

        let dnsLabel = 'start'
        let okfLabel = 'end'

        if (dns < okf) {
          dns -= 3
          okf += 3
          dnsLabel = 'end'
          okfLabel = 'start'

          if (okf + this.okfWidth > this.width) {
            okf -= 6
            okfLabel = 'end'
          }

          if (dns - this.dnsWidth < 0) {
            dns += 6
            dnsLabel = 'start'
          }
        } else {
          dns += 3
          okf -= 3

          if (dns + this.dnsWidth > this.width) {
            dns -= 6
            dnsLabel = 'end'
          }

          if (okf - this.okfWidth < 0) {
            okf += 6
            okfLabel = 'start'
          }
        }

        return [{ 'x': okf + 'px', 'l': okfLabel }, { 'x': dns + 'px', 'l': dnsLabel }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sdg-vis {
    flex: 1;
    height: 100%;

    .range {
      stroke: #ebecf1;
      stroke-width: 4px;
    }

    .tick {
      stroke: #D3D4D9;
      stroke-width: 1px;
    }

    .diff {
      stroke-width: 2px;
    }

    .sdg-marker {
      stroke-width: 2px;

      &.sdg-marker-total {
        fill: #04A6F0;
      }

      &.sdg-marker-dns {
        fill: #F1B31C;
      }
    }

    .markerLabels.invisible {
      .sdg-label {
        opacity: 0;
      }
    }

    .sdg-label {
      transition-duration: 0.2s;
      font-size: 12px;

      &.sdg-label-tick {
        fill: #222;
        opacity: 1;
      }

      &.sdg-label-total {
        fill: #04A6F0;

        &.invert {
          fill: #fff;
        }
      }

      &.sdg-label-dns {
        fill: #F1B31C;

        &.invert {
          fill: #fff;
        }
      }
    }
  }
</style>
