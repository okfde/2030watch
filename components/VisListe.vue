<template>
  <ul>
    <li v-for="(sdg, slug) in sdgs">
      <nuxt-link :to="'sdg/' + slug">{{ sdg.label }}</nuxt-link>
      {{ sdg.okf }}% {{ sdg.dns }}% {{ sdg.total }}%
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  // import _ from 'lodash'

  export default {
    data: function () {
      return {
        range: [25, 100],
        size: [500, 500],
        margin: [300, 100],
        textDistance: 80,
        ticks: [50],
        activeSDG: false,
        activeCircle: false
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      ...mapGetters([
        'indicators',
        'sdgs',
        'sdgsSlugs'
      ])
    },
    watch: {
    },
    methods: {
      ...mapActions([
      ])
    },
    components: {
      // 'resize-observer': ResizeObserver
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

</style>

