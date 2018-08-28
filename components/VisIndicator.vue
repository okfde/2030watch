<template>
  <nuxt-link :to="'/indicator/' + i.slug" :title="i.label">
    <div :class="{ 'vis-indicator': true, 'extended': !compact, 'tiny': tiny, 'position-relative': true }" ref="vis" :title="i.label">
      <h5>
        {{ i.label }}
      </h5>
      <hr style="margin-top:0.3rem;" :class="[ i.author === 'dns' ? 'hr-dns' : 'hr-okf']" />
      <div class="value-target">Indikator-Ziel für 2030 erreicht zu:</div>

      <!-- No piechart anymore -> TODO change name or add new component  -->
      <VisPieChart :value="i.progress" :fill="colorChart" background="ffffff" :tiny="tiny" />

      <div class="values">
        <div class="values-padding">
          <span class="values-progress">IST: </span>
          {{ i.current ? i.current : '-' }}
          <span class="values-unit">{{ i.unitShort }}</span>
        </div>

        <div class="values-padding">
          <span class="values-progress">SOLL: </span>
          {{ i.target != undefined ? i.target : '-' }}
          <span class="values-unit">{{ i.target != undefined ? i.unitShort : '' }}</span>
        </div>
      </div>

      <ul class="labels">
        <li v-if="i.author === 'dns' && i.uncalculable" title="Nicht berechenbar">
          <i class="icon-minus-squared" />
        </li>

        <li v-if="i.author === 'okf' && i.newIndicator" title="Neuer Indikator">
          <i class="icon-plus-squared" />
        </li>
        <li v-if="i.author === 'okf' && !i.newIndicator" title="Modifizierter Zielwert">
          <i class="icon-pencil-squared" />
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
    width: 210px;
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
      height: 4rem;
      margin-top: 0.6rem;
      color: rgba(0, 0, 0, 0.7);
      font-weight: bold;
      line-height: 1.35rem;
    }

    .labels {
      margin: -0.1rem 0 0.1rem;
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
    font-size: 1.1rem;
    line-height: 1.1rem;
    height: 4.3rem;
  }

  .values-padding {
    padding: 0.2rem;
  }

  .values-progress {
    font-weight: bold;
  }

  .values-unit {
    font-size: 0.9rem;
    line-height: 0.95rem;
  }

  .value-target {
    font-size: 0.95rem;
    margin-top: 1rem;
    margin-bottom: 0.7rem;
    text-align: center;
    color: black;
    line-height: 1.1rem;
    height: 2.8rem;
  }

  .hr-dns {
    border: 0;
    border-top: 2px solid $color-dns;
  }

  .hr-okf {
    border: 0;
    border-top: 2px solid $color-okf;
  }

  .position-relative {
    position: relative;
  }

</style>
