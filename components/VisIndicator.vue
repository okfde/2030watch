<template>
  <nuxt-link :to="'../indicator/' + i.slug">
    <div class="vis-indicator" ref="vis">
      {{ i.label }}
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
  }
</style>

