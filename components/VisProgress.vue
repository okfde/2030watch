<template>
  <svg class="sdg-vis" ref="vis">
    <g>
      <text
        v-if="ticks"
        class="sdg-label sdg-label-tick"
        alignment-baseline="baseline"
        text-anchor="start"
        x="1px"
        y="30%">
        0&#8239;%
      </text>
      <text
        v-if="ticks"
        class="sdg-label sdg-label-tick"
        alignment-baseline="baseline"
        text-anchor="end"
        x="calc(100% - 1px)"
        y="30%">
        100&#8239;%
      </text>
      <line
        class="tick"
        stroke-linecap="round"
        x1="calc(0% + 1px)"
        y1="40%"
        x2="calc(0% + 1px)"
        y2="60%" />
      <line
        class="tick"
        stroke-linecap="round"
        x1="25%"
        y1="40%"
        x2="25%"
        y2="60%" />
      <line
        class="tick"
        stroke-linecap="round"
        x1="50%"
        y1="40%"
        x2="50%"
        y2="60%" />
      <line
        class="tick"
        stroke-linecap="round"
        x1="75%"
        y1="40%"
        x2="75%"
        y2="60%" />
      <line
        class="tick"
        stroke-linecap="round"
        x1="calc(100% - 1px)"
        y1="40%"
        x2="calc(100% - 1px)"
        y2="60%" />
      </g>
    <line
      class="range"
      x1="0%"
      y1="50%"
      x2="100%"
      y2="50%" />
    <line
      class="diff"
      :stroke="sdg.okf < sdg.dns ? '#D22F27' : '#5C9E31'"
      :x1="sdg.okf + '%'"
      y1="50%"
      :x2="sdg.dns + '%'"
      y2="50%" />
    <circle
      class="sdg-marker sdg-marker-total"
      :cx="sdg.okf + '%'"
      cy="50%"
      r="8" />
    <text
      ref="okf"
      class="sdg-label sdg-label-total"
      alignment-baseline="baseline"
      :text-anchor="labels[0].l"
      :x="labels[0].x"
      y="30%">
      {{ sdg.okf.toFixed(0) }}&#8239;%
    </text>
    <circle
      class="sdg-marker sdg-marker-dns"
      :cx="sdg.dns + '%'"
      cy="50%"
      r="8" />
    <text
      ref="dns"
      class="sdg-label sdg-label-dns"
      alignment-baseline="hanging"
      :text-anchor="labels[1].l"
      :x="labels[1].x"
      y="70%">
      {{ sdg.dns.toFixed(0) }}&#8239;%
    </text>
  </svg>
</template>

<script>
  export default {
    props: ['sdg', 'ticks'],
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
    computed: {
      labels: function () {
        let dns = this.sdg.dns / 100 * this.width
        let okf = this.sdg.okf / 100 * this.width

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
      stroke-width: 4px;
    }

    .sdg-marker {
      stroke: #f9f9f9;
      stroke-width: 2px;

      &.sdg-marker-total {
        fill: #04A6F0;
      }

      &.sdg-marker-dns {
        fill: #F1B31C;
      }
    }

    .sdg-label {
      opacity: 0;
      font-size: 12px;

      &.sdg-label-tick {
        fill: #222;
        opacity: 1;
      }

      &.sdg-label-total {
        fill: #04A6F0;
      }

      &.sdg-label-dns {
        fill: #F1B31C;
      }
    }
  }
</style>

