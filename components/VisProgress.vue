<template>
  <svg :class="{ 'sdg-vis': true, 'visible': iVisible }" ref="vis">
    <line
      class="range"
      :x1="scaleX.map(0) + 'px'"
      :y1="height / 2 + 'px'"
      :x2="scaleX.map(100) + 'px'"
      :y2="height / 2 + 'px'" />
    <g class="ticks">
      <g v-if="vTickLabels" class="tickLabels">
        <text
          class="sdg-label sdg-label-tick"
          text-anchor="start"
          :x="scaleX.map(0) + 'px'"
          y="10"
        >0%</text>
        <text
          class="sdg-label sdg-label-tick"
          text-anchor="end"
          :x="scaleX.map(100) + 'px'"
          y="10"
        >100%</text>
      </g>
      <g class="tickLines" v-if="vTicks">
        <line
          v-for="tick in [0, 20, 40, 60, 80, 100]"
          class="tick"
          stroke-linecap="round"
          :x1="scaleX.map(tick) + 'px'"
          :y1="height / 2 - 5 + 'px'"
          :x2="scaleX.map(tick) + 'px'"
          :y2="height / 2 + 5 + 'px'"
        />
      </g>
      <g class="tickLines" v-if="vSimpleTicks">
        <line
          v-for="tick in [0, 100]"
          class="tick"
          stroke-linecap="round"
          :x1="scaleX.map(tick) + 'px'"
          :y1="height / 2 - 5 + 'px'"
          :x2="scaleX.map(tick) + 'px'"
          :y2="height / 2 + 5 + 'px'"
        />
        <text font-size="12px" fill="#aaa" :x="scaleX.map(0) + 'px'" y="70%">0%</text>
        <text font-size="12px" fill="#aaa" :x="scaleX.map(93) + 'px'" y="70%">100%</text>
      </g>
    </g>
    <line
      class="diff"
      stroke="#aaa"
      :x1="xOKF"
      :y1="height / 2 + 'px'"
      :x2="xDNS"
      :y2="height / 2 + 'px'" />
    <circle
      :class="{ 'sdg-marker': true, 'sdg-marker-total': true, 'disabled': disabled }"
      :style="{ 'stroke': cBackground }"
      :cx="xOKF"
      :cy="height / 2 + 'px'"
      :r="markerR" />
    <circle
      :class="{ 'sdg-marker': true, 'sdg-marker-dns': true, 'disabled': disabled }"
      :style="{ 'stroke': cBackground }"
      :cx="xDNS"
      :cy="height / 2 + 'px'"
      :r="markerR" />
    <g :class="{ markerLabels: true, invisible: vMarkerLabels }">
      <text
        ref="okf"
        :class="{ 'sdg-label': true, 'sdg-label-total': true, 'invert': invert }"
        :text-anchor="labels[0].l"
        :style="{ 'font-size': compact ? '0.8rem' : '1.1rem' }"
        :x="labels[0].x"
        y="20%"
      >{{ okfValue }}</text>
      <text
        ref="dns"
        :class="{ 'sdg-label': true, 'sdg-label-dns': true, 'invert': invert }"
        :text-anchor="labels[1].l"
        :style="{ 'font-size': compact ? '0.8rem' : '1.1rem' }"
        :x="labels[1].x"
        y="95%"
      >{{ dnsValue }}</text>
    </g>
    <g v-if="vLegend">
      <polyline
        class="legendLine"
        :points="`${xOKF},${height - legendLabeldnsHeight} ${xOKF},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" />
      <polyline
        class="legendLine"
        :points="`${xDNS},${height - legendLabeldnsHeight} ${xDNS},${height - legendLabeldnsHeight - legendLabelSteps * 2}`" />
      <text
        ref="okfLabelLegend"
        class="legendLabel okf"
        text-anchor="middle"
        :x="xOKF"
        :y="height">2030Watch</text>
      <text
        ref="dnsLabelLegend"
        class="legendLabel dns"
        text-anchor="middle"
        :x="xDNS"
        :y="height">Daten DNS</text>
    </g>
  </svg>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import format from '~/assets/js/format.js'
  import Scale from '~/assets/js/scale.js'

  export default {
    props: {
      sdg: {
        type: Object,
        required: true
      },
      vLegend: { // show color range and labels
        type: Boolean,
        required: false
      },
      vTickLabels: { // show 0 and 100 percentage
        type: Boolean,
        default: false
      },
      cBackground: {
        type: String,
        default: '#f9f9f9'
      },
      vMarkerLabels: { // display labels
        type: Boolean,
        default: true
      },
      vMarkerLabelsNames: { // display author name
        type: Boolean,
        default: false
      },
      compact: { // Font size
        type: Boolean,
        default: true
      },
      invert: { // font color
        type: Boolean,
        default: false
      },
      vTicks: { // display ticks
        type: Boolean,
        default: false
      },
      vSimpleTicks: { // display ticks for 0 and 100 %
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    data: function () {
      return {
        iVisible: false,
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
        legendLabelDistance: 3,
        scaleX: new Scale().domain([0, 100]).range([0, 0]),
        okfValue: undefined,
        dnsValue: undefined
      }
    },
    mounted: function () {
      this.calcSizes()
      window.addEventListener('resize', this.calcSizes, false)
      this.okfValue = (this.vMarkerLabelsNames ? '2030Watch: ' : '') + format(this.okf, 0, '%', true)
      this.dnsValue = (this.vMarkerLabelsNames ? 'Offiziell: ' : '') + format(this.dns, 0, '%', true)
    },
    methods: {
      format: format,
      valueInRange: function (v) {
        return Math.max(0, Math.min(100, v))
      },
      calcSizes: function () {
        this.width = (this.$refs.vis.clientWidth || this.$refs.vis.parentNode.clientWidth) - this.markerR
        this.scaleX.range([this.markerR, this.width])
        this.height = this.$refs.vis.getBoundingClientRect().height || this.$refs.vis.parentNode.getBoundingClientRect().height
        if (typeof this.$refs.okfLabelLegend !== 'undefined') {
          this.legendLabelokfWidth = this.$refs.okfLabelLegend.clientWidth
          this.legendLabeldnsWidth = this.$refs.dnsLabelLegend.clientWidth
          this.legendLabelSteps =
            (
              this.height / 2 -
              this.markerR / 2 -
              this.legendLabelokfHeight -
              this.legendLabelDistance * 2
            ) / 2
        }
        this.okfWidth = this.$refs.okf.clientWidth
        this.dnsWidth = this.$refs.dns.clientWidth
        this.iVisible = true
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
        return this.scaleX.map(this.valueInRange(this.dns))
      },
      xOKF: function () {
        return this.scaleX.map(this.valueInRange(this.okf))
      },
      labels: function () {
        if (!this.width) {
          return [{ 'x': 0 + 'px', 'l': 'start' }, { 'x': 0 + 'px', 'l': 'start' }]
        }
        // const { markerR } = this
        // const distance = markerR / 2
        const distance = 0
        let dns = this.xDNS
        let okf = this.xOKF

        let dnsLabel = 'start'
        let okfLabel = 'end'

        if (!this.okfWidth || !this.dnsWidth) {
          if (dns > this.width / 2) {
            dns -= distance
            dnsLabel = 'end'
          } else {
            dns += distance
            dnsLabel = 'start'
          }

          if (okf > this.width / 2) {
            okf -= distance
            okfLabel = 'end'
          } else {
            okf += distance
            okfLabel = 'start'
          }
        } else {
          if (dns < okf) {
            dns -= distance
            okf += distance
            dnsLabel = 'end'
            okfLabel = 'start'

            if (okf + this.okfWidth > this.width) {
              okf -= distance
              okfLabel = 'end'
            }

            if (dns - this.dnsWidth < 0) {
              dns += distance
              dnsLabel = 'start'
            }
          } else {
            dns += distance
            okf -= distance

            if (dns + this.dnsWidth > this.width) {
              dns -= distance
              dnsLabel = 'end'
            }

            if (okf - this.okfWidth < 0) {
              okf += distance
              okfLabel = 'start'
            }
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
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s;

    &.visible {
      opacity: 1;
    }

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

    .legendLabel {
      font-weight: bold;
      font-size: 0.8rem;

      &.okf {
        fill: $color-okf;
      }

      &.dns {
        fill: $color-dns;
      }
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

      &.disabled {
        fill: $color-mute;
      }
    }

    .markerLabels.invisible {
      .sdg-label {
        opacity: 0;
      }
    }

    .sdg-label {
      transition-duration: 0.2s;

      &.sdg-label-tick {
        fill: #aaa;
        opacity: 1;
        font-size: 0.8rem;
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
