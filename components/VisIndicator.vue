<template>
  <nuxt-link :to="'../indicator/' + i.slug">
    <div class="vis-indicator" ref="vis">
      <ul>
        <li>{{ i.id }}</li>
        <li>{{ i.label }}</li>
        <li>{{ i.progress }}</li>
        <li>badTarget: {{ i.badTarget ? 'ja' : 'nein' }}</li>
        <li>badIndicator: {{ i.badIndicator ? 'ja' : 'nein' }}</li>
        <li>uncalculable: {{ i.uncalculable ? 'ja' : 'nein' }}</li>
        <li>spillover: {{ i.spill ? 'ja' : 'nein' }}</li>
        <li>modTarget: {{ i.modTarget ? 'ja' : 'nein' }}</li>
        <li>neuer: {{ i.altIndicator }}</li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script>
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
      labels: function () {
        return 'test'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vis-indicator {
    display: flex;
    width: 100%;

    font-size: 0.7rem;
  }
</style>

