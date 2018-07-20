<template>
  <nuxt-link :to="'/indicator/' + i.slug" :title="i.label">
    <div :class="{ 'vis-indicator': true, 'extended': !compact, 'tiny': tiny }" ref="vis" :title="'»' + i.label + '« zu ' + format(i.progress, ...[,,], true) + ' erreicht.'">
      <h5>{{ i.label }}</h5>

      <div style="color:black;">2030 Ziel erreicht zu:</div>

      <VisPieChart :value="i.progress" :fill="colorChart" background="ffffff" :tiny="tiny" />

      <div style="color:black;">IST: {{ i.current }} {{ i.unit }}</div>
      <div style="color:black;">SOLL: {{ i.target }} {{ i.unit }}</div>

      <ul class="labels">
        <li v-if="i.author === 'dns' && i.uncalculable" title="Nicht berechenbar">
          <i class="icon-minus-circled" />
        </li>

        <li v-if="i.author === 'okf' && i.newIndicator" title="Neuer Indikator">
          <i class="icon-plus-circled" />
        </li>

        <li v-if="i.author === 'okf' && !i.newIndicator" title="Modifiziert">
          <i class="icon-cog-circled" />
        </li>

      </ul>
    </div>
  </nuxt-link>
</template>

<script>
  import { mapGetters } from 'vuex'
  import VisPieChart from '~/components/VisPieChart.vue'
  import format from '~/assets/js/format.js'

  export default {
    props: {
      i: {
        type: Object,
        required: true
      },
      color: {
        type: [String, Number],
        default: '04A6F0'
      },
      colorScale: {
        type: Boolean,
        default: false
      },
      compact: {
        type: Boolean,
        default: false
      },
      tiny: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters([
        'stepsColors'
      ]),
      colorChart: function () {
        if (this.colorScale) {
          const range = 100 / this.stepsColors.length
          const i = Math.min(Math.max(0, this.i.progress), 100)
          const n = Math.round(i / range)
          const color = this.stepsColors[n < 1 ? 0 : n - 1]
          if (typeof color !== 'undefined') {
            return color.substr(1)
          } else {
            return this.color
          }
        } else {
          return this.color
        }
      }
    },
    methods: {
      format: format
    },
    components: {
      VisPieChart
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  .vis-indicator {
    width: 100%;
    font-size: 0.8rem;
    background-color: #fff;
    width: 170px;
    line-height: 1rem;

    &:hover {
      h5 {
        color: $color-default;
      }

      &.extended {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .24);
      }

      .labels {
        opacity: 1;
      }
    }

    &.extended {
      padding: 0.4rem;
      border-radius: 2px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
    }

     &.tiny {
         width: 85px;
         margin: 0.3rem;
      }

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.9rem;
      text-align: center;
      font-weight: normal;
      height: 3rem;
      margin-bottom: 0.5rem;
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
    }

    .labels {
      margin: -0.1rem 0 0.1rem;
      width: 100%;
      text-align: right;
      min-height: 16px;
      color: $color-mute;
      opacity: 0.8;

      li {
        margin: 0 0.1rem;
        display: inline-block;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
