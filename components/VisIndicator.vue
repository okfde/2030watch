<template>
  <nuxt-link :to="'/indicator/' + i.slug" :title="i.label">
    <div :class="{ 'vis-indicator': true, 'extended': !compact, 'tiny': tiny }" ref="vis" :title="i.label">
      <h5>{{ i.label }}</h5>

      <div class="values value-target">2030 Ziel erreicht zu:</div>

      <VisPieChart :value="i.progress" :fill="colorChart" background="ffffff" :tiny="tiny" />

      <div class="values">
        <div>IST: {{ i.current }} {{ i.unitShort }}</div>
        <div>SOLL: {{ i.target }} {{ i.unitShort }}</div>
      </div>

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
        if (this.i.progress < 40) {
          return this.stepsColors[0].substr(1)
        } else if (this.i.progress < 80) {
          return this.stepsColors[1].substr(1)
        } else {
          return this.stepsColors[2].substr(1)
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
    width: 200px;
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
      font-size: 1.1rem;
      text-align: center;
      font-weight: normal;
      height: 4.2rem;
      margin-top: 0.5rem;
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
      line-height: 1.1rem;
    }

    .labels {
      margin: -0.1rem 0 0.1rem;
      // width: 100%;
      text-align: right;
      min-height: 16px;
      color: $color-mute;
      opacity: 0.8;
      font-size: 1.1rem;

      li {
        margin: 0 0.1rem;
        display: inline-block;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .values {
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    text-align: center;
    color: black;
    font-size: 1rem;

    div {
      padding: 0.1rem;
    }
  }
</style>
