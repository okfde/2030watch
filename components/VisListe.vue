<template>
  <ul>
    <li v-for="(sdg, slug) in sdgs" class="sdg-item">
      <nuxt-link :to="'sdg/' + slug" class="sdg-label">
        <img :src="'http://via.placeholder.com/50/' + sdg.color + '/' + sdg.color">
        {{ sdg.label }}
      </nuxt-link>
      <svg class="sdg-vis">
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%" />
        <circle
          :cx="sdg.okf + '%'"
          cy="50%"
          r="5" />
        <circle
          :cx="sdg.dns + '%'"
          cy="50%"
          r="5" />
      </svg>
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
  .sdg-item {
    display: flex;
    height: 30px;
    margin: 1em 0;

    .sdg-label {
      flex: 2;

      img {
        height: 50%;
        border-radius: 50%;
      }
    }

    .sdg-vis {
      height: 100%;

      line {
        stroke: black;
        stroke-width: 2px;
      }
    }
  }
</style>

