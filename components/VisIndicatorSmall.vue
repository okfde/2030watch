<template>
  <nuxt-link :to="'../indicator/' + i.slug" :title="i.label">
    <div :class="{ 'vis-indicator': true, 'extended': !compact }" ref="vis">
      <VisPieChartSmall :value="i.progress" :fill="colorChart" background="ffffff" />
      <svg
        class="icon"
        v-if="!compact"
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
  import { mapGetters } from 'vuex'
  import VisPieChartSmall from '~/components/VisPieChartSmall.vue'

  export default {
    props: {
      i: {
        type: Object,
        required: true
      },
      color: {
        type: Number,
        default: 'F1B31C'
      },
      colorScale: {
        type: Boolean,
        default: false
      },
      compact: {
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
    components: {
      VisPieChartSmall
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';
  

  .vis-indicator {
    // width: 50%;
    font-size: 0.2rem;
    background-color: #fff;
    width: 90px;
    line-height: 1rem;

    &:hover {
      h5 {
        color: $color-default;
      }

      &.extended {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .24);
      }
    }

    &.extended {
      padding: 0.4rem;
      border-radius: 2px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
    }

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      font-size: 0.75rem;
      text-align: center;
      font-weight: normal;
      height: 48px;
      height: 3rem;
      margin-bottom: 8px;
      margin-bottom: 0.5rem;
      color: rgba(0, 0, 0, .7);
      transform: rotate(30deg);
      margin-top: 2em;
    }

    svg {
      &.icon {
        width: 20px;
        margin-top: -2rem;
      }
    }

    ul li {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 3rem;
    }
  }
</style>

