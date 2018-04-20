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
        <VisProgress :sdg="sdg" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import VisProgress from '~/components/VisProgress.vue'

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
    components: {
      VisProgress
    }
  }
</script>

<style lang="scss" scoped>
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
        }
      }
    }
  }
</style>

