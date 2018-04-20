<template>
  <ul>
    <li v-for="(sdg, slug) in sdgs" class="sdg-item">
      <nuxt-link :to="'sdg/' + slug" class="sdg-link">
        <div class="sdg-image">
          <svg>
            <circle cx="50%" cy="50%" :fill="'#' + sdg.color" r="8" />
          </svg>
        </div>
        <div class="sdg-label">
          <span>{{ sdg.label }}</span>
        </div>
        <svg class="sdg-vis">
          <line
            class="range"
            stroke-linecap="round"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%" />
          <line
            class="diff"
            :stroke="colors[slug]"
            :x1="sdg.total + '%'"
            y1="50%"
            :x2="sdg.dns + '%'"
            y2="50%" />
          <circle
            class="sdg-marker sdg-marker-total"
            :cx="sdg.total + '%'"
            cy="50%"
            r="8" />
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
            r="8" />
          <text
            class="sdg-label sdg-label-dns"
            alignment-baseline="hanging"
            :text-anchor="sdg.dns > 50 ? 'end' : 'start'"
            :x="sdg.dns + (sdg.dns > 50 ? -3 : 3) + '%'"
            y="60%">
            {{ sdg.dns }}%
          </text>
        </svg>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapState, mapActions } from 'vuex'
  import chroma from 'chroma-js'
  import _ from 'lodash'

  const diffScale = chroma.scale(['#D22F27', '#eee', '#5C9E31']).domain([-100, 0, 100])

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
      ]),
      colors (state) {
        return _.fromPairs(_.map(this.sdgs, (sdg, key) => {
          return [key, diffScale(sdg.dns - sdg.okf).hex()]
        }))
      }
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

    .sdg-link {
      display: flex;
      height: 2.5rem;
      width: 100%;
      margin: 0.3rem 0;

      .sdg-image {
        width: 16px;
        margin-right: 1rem;

        svg {
          width: 100%;
          height: 100%;
        }
      }

      .sdg-label {
        flex: 1;
        display: flex;
        align-items: center;

        span {
          display: inline-block;
          line-height: 1.0rem;
          width: 70%;
          max-width: 500px;
        }
      }

      .sdg-vis {
        flex: 1;
        height: 100%;

        .range {
          stroke: #ebecf1;
          stroke-width: 4px;
        }

        .diff {
          stroke-width: 4px;
        }

        .sdg-marker {
          stroke: #f9f9f9;
          stroke-width: 2px;

          &.sdg-marker-total {
            fill: #04A6F0;
          }

          &.sdg-marker-dns {
            fill: #F1B31C;
          }
        }

        .sdg-label {
          opacity: 0;
          font-size: 12px;

          &.sdg-label-total {
            fill: #04A6F0;
          }

          &.sdg-marker-dns {
            fill: #F1B31C;
          }
        }
      }

      &:hover {
        .sdg-label {
          opacity: 1;
        }
      }
    }
  }
</style>

