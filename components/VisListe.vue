<template>
  <ul>
    <li v-for="(sdg, slug) in sdgs" class="sdg-item">
      <nuxt-link :to="'sdg/' + slug" class="sdg-label">
        <img :src="'http://via.placeholder.com/50/' + sdg.color + '/' + sdg.color">
        {{ sdg.label }}
      </nuxt-link>
      <svg class="sdg-vis">
        <line
          class="range"
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%" />
        <line
          class="diff"
          :x1="sdg.total + '%'"
          y1="50%"
          :x2="sdg.dns + '%'"
          y2="50%" />
        <circle
          class="sdg-marker sdg-marker-total"
          :cx="sdg.total + '%'"
          cy="50%"
          r="5" />
        <text
          class="sdg-label sdg-label-total"
          alignment-baseline="baseline"
          :text-anchor="sdg.total > 50 ? 'end' : 'start'"
          :x="sdg.total + (sdg.total > 50 ? -3 : 3) + '%'"
          y="40%">
          {{ sdg.total }}%
        </text>
        <circle
          class="sdg-marker sdg-marker-dns"
          :cx="sdg.dns + '%'"
          cy="50%"
          r="5" />
        <text
          class="sdg-label sdg-label-dns"
          alignment-baseline="hanging"
          :text-anchor="sdg.dns > 50 ? 'end' : 'start'"
          :x="sdg.dns + (sdg.dns > 50 ? -3 : 3) + '%'"
          y="60%">
          {{ sdg.dns }}%
        </text>
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

      .range {
        stroke: #D0CFCE;
        stroke-width: 1px;
      }

      .diff {
        stroke: #80B0DC;
        stroke-width: 2px;
      }

      .sdg-marker {
        border: #fff;
        border-radius: 1px;

        &.sdg-marker-total {
          fill: #CE8394;
        }

        &.sdg-marker-dns {
          fill: #749A4E;
        }
      }

      .sdg-label {
        font-size: 12px;

        &.sdg-label-total {
          fill: #CE8394;
        }

        &.sdg-marker-dns {
          fill: #749A4E;
        }
      }
    }
  }
</style>

