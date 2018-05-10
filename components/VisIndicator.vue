<template>
  <nuxt-link :to="'../indicator/' + i.slug" :title="i.label">
    <div :class="{ 'vis-indicator': true, 'extended': !compact }" ref="vis">
      <VisPieChart :value="i.progress" :fill="color" background="ffffff" />
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
      <h5 :style="{ color: '#' + color }">{{ i.label }}</h5>
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
  import VisPieChart from '~/components/VisPieChart.vue'

  export default {
    props: {
      i: {
        type: Object,
        required: true
      },
      color: {
        type: String,
        default: '04A6F0'
      },
      compact: {
        type: Boolean,
        default: false
      }
    },
    components: {
      VisPieChart
    }
  }
</script>

<style lang="scss" scoped>
  .vis-indicator {
    width: 100%;
    font-size: 0.7rem;
    background-color: #fff;
    width: 150px;
    line-height: 1rem;

    &.extended {
      padding: 0.4rem;
      border-radius: 2px;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
    }

    h5 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.8rem;
      text-align: center;
      height: 3rem;
      margin-bottom: 0.5rem;
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

