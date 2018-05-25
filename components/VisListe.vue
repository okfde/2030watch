<template>
  <ul class="vis-liste">
    <li class="sdg-item">
      <div class="sdg-header sdg-header-label link" v-on:click="sort('id')">
        <span :class="{ active: sorting === 'id' }" >Sustainable Development Goals <SortIcon :active="sorting === 'id'" :reverse="reverse" /></span>
      </div>
      <div class="sdg-header sdg-header-vis columns">
        <section>
          SDG erreicht zu
        </section>
        <section class="sdg-legend">
          <span class="dns">DNS</span>
          <span class="okf">2030Watch</span>
        </section>
      </div>
    </li>
    <li v-for="(sdg, index) in sdgListe" class="sdg-item">
      <nuxt-link :to="'sdg/' + sdg.slug" class="sdg-link" :style=" { '--color': '#' + sdg.color }">
        <div class="sdg-label">
          <span class="sdg-number">{{ sdg.number }}</span> <span class="sdg-text" :title="sdg.labelLong">{{ sdg.labelShort }}</span>
        </div>
        <div class="sdg-vis">
          <VisProgress :sdg="sdg" :vTickLabels="index === 0" />
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import VisProgress from '~/components/VisProgress.vue'
  import SortIcon from '~/components/SortIcon.vue'
  import VisDirection from '~/components/VisDirection.vue'
  import _ from 'lodash'

  export default {
    data: function () {
      return {
        'sorting': 'number',
        'reverse': false
      }
    },
    computed: {
      ...mapState([
        'sdgs'
      ]),
      sdgListe: function () {
        const list = _.sortBy(this.sdgs, this.sorting)
        if (this.reverse) {
          return _.reverse(list)
        } else {
          return list
        }
      }
    },
    components: {
      VisProgress,
      SortIcon,
      VisDirection
    },
    methods: {
      sort: function (key) {
        if (this.sorting !== key) {
          this.sorting = key
          this.reverse = false
        } else {
          this.reverse = !this.reverse
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/style/variables';

  .vis-liste {
    margin: $spacing 0;

    &:hover {
      .sdg-item:not(:hover) {
        .sdg-marker {
          fill: $color-mute;
        }
      }
    }
  }

  .sdg-item {
    display: flex;

    .sdg-header {
      margin-bottom: $spacing / 2;
    }

    .sdg-header-label {
      margin-left: calc(1rem + 16px);
    }

    .sdg-header-label, .sdg-header-vis {
      flex: 1;
      color: #9B9B9A;

      .active {
        font-weight: bold;
        color: $color-default;
      }

      .sdg-legend {
        text-align: right;

        span {
          margin-left: 10px;
        }

        .dns {
          color: $color-dns;
        }

        .okf {
          color: $color-okf;
        }
      }
    }

    .sdg-link {
      color: #222;
      display: flex;
      flex-direction: column;
      height: 5rem;
      width: 100%;
      margin: 0;

      @include media-query($on-desktop) {
        & {
          flex-direction: row;
          height: calc((100vh - 40vh) / 17);
          max-height: 2.5rem;
          min-height: 2.4rem;
        }
      }

      .sdg-label {
        flex: 1;
        display: flex;
        align-items: center;
        transition-duration: 0.1s;

        .sdg-number {
          width: 1rem;
          margin-right: 1rem;
          text-align: right;
          line-height: 1.2rem;
          display: inline-block;
          color: $color-mute;
          font-size: 0.8rem;
        }

        .sdg-text {
          line-height: 1.2rem;
          display: inline-block;
          font-weight: bold;
          font-size: 0.9rem;
        }
      }

      .sdg-direction {
        margin-right: 16px;
      }

      .sdg-vis {
        flex: 1;
      }

      &:hover {
        .sdg-label {
          opacity: 1 !important;
          color: var(--color);
        }

        .sdg-label-tick {
          opacity: 0 !important;
        }
      }
    }
  }
</style>
