<template>
  <ul>
    <li class="sdg-item">
      <div>
        SDG
      </div>
      <div class="sdg-label">
        test
      </div>
      <div>
        Test
      </div>
    </li>
    <li v-for="(sdg, slug, index) in sdgs" class="sdg-item">
      <nuxt-link :to="'sdg/' + slug" class="sdg-link">
        <div class="sdg-image">
          <svg>
            <circle cx="50%" cy="50%" :fill="'#' + sdg.color" r="8" />
          </svg>
        </div>
        <div class="sdg-label">
          <span :title="sdg.label.long">{{ sdg.label.short }}</span>
        </div>
        <VisProgress :sdg="sdg" :ticks="index === 0" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import VisProgress from '~/components/VisProgress.vue'
  import * as sdgs from '../data/sdgs.json'

  export default {
    data: function () {
      return {
        sdgs: sdgs
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      ...mapGetters([
        'indicators',
        'sdgsSlugs'
      ])
    },
    components: {
      VisProgress
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

      &:hover {
        .sdg-label {
          opacity: 1;

          &.sdg-label-tick {
            opacity: 0;
          }
        }
      }
    }
  }
</style>

