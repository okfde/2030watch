<template>
  <svg class="sdg-vis" ref="vis">
    <line
      class="range"
      x1="0%"
      y1="50%"
      x2="100%"
      y2="50%" />
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
          v-for="tick in ['calc(0% + 1px)', '20%', '40%', '60%', '80%', 'calc(100% - 1px)']"
          class="tick"
          stroke-linecap="round"
          :x1="tick"
          y1="calc(50% - 5px)"
          :x2="tick"
          y2="calc(50% + 5px)" />
      </g>
    </g>
    <line
      class="diff"
      stroke="#aaa"
      :x1="valueInRange(okf) + '%'"
      y1="50%"
      :x2="dns + '%'"
      y2="50%" />
    <circle
      class="sdg-marker sdg-marker-total"
      :style="{ 'stroke': cBackground }"
      :cx="valueInRange(okf) + '%'"
      cy="50%"
      :r="markerR" />
    <circle
      class="sdg-marker sdg-marker-dns"
      :style="{ 'stroke': cBackground }"
      :cx="dns + '%'"
      cy="50%"
      :r="markerR" />
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
    <g v-if="vLegend">
      <g class="tickLinesLegend" v-if="vTicks">
        <text
          class="ticksLegendLabels"
          alignment-baseline="hanging"
          text-anchor="start"
          :style="{ fill: stepsColors[0] }"
          x="0%"
          y="0%">sehr geringe Nachhaltigkeit</text>
        <text
          class="ticksLegendLabels"
          alignment-baseline="hanging"
          text-anchor="end"
          :style="{ fill: stepsColors[steps - 1] }"
          x="100%"
          y="0%">sehr hohe Nachhaltigkeit</text>
        <line
          v-for="tick in steps"
          class="tickLegend"
          :style="{ 'stroke': stepsColors[tick - 1] }"
          :x1="(tick - 1) * (100 / steps) + '%'"
          :y1="legendLabeldnsHeight"
          :x2="(tick) * (100 / steps) + '%'"
          :y2="legendLabeldnsHeight" />
      </g>
      <!-- <polyline
        stroke="black"
        fill="none"
        :points="`${legendLabelokfWidth / 2},${legendLabelokfHeight} ${legendLabelokfWidth / 2},${legendLabelokfHeight + legendLabelSteps * 1} ${xOKF},${legendLabelokfHeight + legendLabelSteps * 1} ${xOKF},${legendLabelokfHeight + legendLabelSteps * 2}`" /> -->
      <!-- <polyline
        class="legendLine"
        :points="`${legendLabelokfWidth / 2},${height - legendLabeldnsHeight} ${legendLabelokfWidth / 2},${height - legendLabeldnsHeight - legendLabelSteps} ${xOKF},${height - legendLabeldnsHeight - legendLabelSteps} ${xOKF},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" /> -->
      <polyline
        class="legendLine"
        :points="`${xOKF},${height - legendLabeldnsHeight} ${xOKF},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" />
      <polyline
        class="legendLine"
        :points="`${xDNS},${height - legendLabeldnsHeight} ${xDNS},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" />
      <!-- <polyline
        class="legendLine"
        :points="`${legendLabeldnsWidth / 2},${height - legendLabeldnsHeight} ${legendLabeldnsWidth / 2},${height - legendLabeldnsHeight - legendLabelSteps} ${xDNS},${height - legendLabeldnsHeight - legendLabelSteps} ${xDNS},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" /> -->
      <text
        ref="okfLabelLegend"
        alignment-baseline="hanging"
        text-anchor="middle"
        :x="xOKF"
        :y="height - 15">OKF</text>
      <text
        ref="dnsLabelLegend"
        alignment-baseline="hanging"
        text-anchor="middle"
        :x="xDNS"
        :y="height - 15">DNS</text>
    </g>
  </svg>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import format from '~/assets/js/format.js'

  export default {
    props: {
      sdg: {
        type: Object,
        required: true
      },
      vLegend: {
        type: Boolean,
        required: false
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
        dnsLabel: 0,
        markerR: 8,
        legendLabelokfWidth: 0,
        legendLabelokfHeight: 20,
        legendLabeldnsWidth: 0,
        legendLabeldnsHeight: 20,
        legendLabelSteps: 0,
        legendLabelDistance: 3
      }
    },
    mounted: function () {
      this.width = this.$refs.vis.clientWidth
      this.height = this.$refs.vis.clientHeight
      if (typeof this.$refs.okfLabelLegend !== 'undefined') {
        this.legendLabelokfWidth = this.$refs.okfLabelLegend.clientWidth
        this.legendLabeldnsWidth = this.$refs.dnsLabelLegend.clientWidth
        console.log('legendLabeldnsWidth', this.legendLabeldnsWidth)
        // this.legendLabelokfHeight = this.$refs.okfLabelLegend.clientHeight
        this.legendLabelSteps =
          (
            this.height / 2 -
            this.markerR / 2 -
            this.legendLabelokfHeight -
            this.legendLabelDistance * 2
          ) / 2

        console.log(this.legendLabelSteps)
        // console.log('width:', this.legendLabelokfWidth)
        // console.log('height:', this.legendLabelokfHeight)
        // console.log(this.$refs.okfLabelLegend.clientHeight)
        // console.log(this.$refs.okfLabelLegend)
      }
      this.okfWidth = this.$refs.okf.clientWidth
      this.dnsWidth = this.$refs.dns.clientWidth
    },
    methods: {
      format: format,
      valueInRange: function (v) {
        return Math.max(0, Math.min(100, v))
      }
    },
    computed: {
      ...mapState([
        'steps'
      ]),
      ...mapGetters([
        'stepsColors'
      ]),
      dns: function () {
        return this.sdg.values.dns
      },
      okf: function () {
        return this.sdg.values.okf
      },
      xDNS: function () {
        return this.valueInRange(this.dns) / 100 * this.width
      },
      xOKF: function () {
        return this.valueInRange(this.okf) / 100 * this.width
      },
      labels: function () {
        let dns = this.xDNS
        let okf = this.xOKF

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
  @import "~@/assets/style/variables";

  .sdg-vis {
    flex: 1;
    height: 100%;

    .legendLine {
      stroke: rgba(0, 0, 0, .2);
      fill: none;
    }

    .range {
      stroke: #ebecf1;
      stroke-width: 3px;
    }

    .tick {
      stroke: #D3D4D9;
      stroke-width: 1px;
    }

    .ticksLegendLabels {
      font-size: 0.9rem;
    }

    .tickLegend {
      stroke: #aaa;
      stroke-width: 3px;
    }

    .diff {
      stroke-width: 1px;
    }

    .sdg-marker {
      stroke-width: 2px;

      &.sdg-marker-total {
        fill: $color-okf;
      }

      &.sdg-marker-dns {
        fill: $color-dns;
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
        fill: $color-okf;

        &.invert {
          fill: #fff;
        }
      }

      &.sdg-label-dns {
        fill: $color-dns;

        &.invert {
          fill: #fff;
        }
      }
    }
  }
</style>
