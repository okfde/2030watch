<template>
  <ul>
    <li class="sdg-item">
      <div class="sdg-header sdg-header-label link" v-on:click="sort('id')">
        <span :class="{ active: sorting === 'id' }" >Sustainable Development Goals <SortIcon :active="sorting === 'id'" :reverse="reverse" /></span>
      </div>
      <div class="sdg-header sdg-header-vis columns">
        <section>
          SDG erreicht zu
        </section>
        <section class="sdg-legend">
          <span :class="{ 'dns': true, 'link': true, active: sorting === 'values.dns' }" v-on:click="sort('values.dns')">DNS <SortIcon :active="sorting === 'values.dns'" :reverse="reverse" /></span>
          <span :class="{ 'okf': true, 'link': true, active: sorting === 'values.okf' }" v-on:click="sort('values.okf')">OKF <SortIcon :active="sorting === 'values.okf'" :reverse="reverse" /></span>
        </section>
      </div>
    </li>
    <li v-for="(sdg, index) in sdgListe" class="sdg-item">
      <nuxt-link :to="'sdg/' + sdg.slug" class="sdg-link" :style=" { '--color': '#' + sdg.color }">
        <div class="sdg-number">
          <span>{{ sdg.number }}</span>
        </div>
        <div class="sdg-label">
          <span :title="sdg.labelLong">{{ sdg.labelShort }}</span>
        </div>
        <!-- <VisDirection :diff="sdg.values.dns - sdg.values.okf" /> -->
        <VisProgress :sdg="sdg" :vTickLabels="index === 0" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import VisProgress from '~/components/VisProgress.vue'
  import SortIcon from '~/components/SortIcon.vue'
  import VisDirection from '~/components/VisDirection.vue'
  // import * as sdgs from '../data/sdgs.json'
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
  @import '../assets/style/variables';

  .sdg-item {
    display: flex;

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
      height: calc((100vh - 40vh) / 17);
      max-height: 2.5rem;
      min-height: 1.7rem;
      width: 100%;
      margin: 0.3rem 0;

      .sdg-number {
        width: 1rem;
        margin-right: 1rem;
        align-items: center;
        text-align: right;
        display: flex;

        span {
          text-align: right;
          width: 100%;
          line-height: 1.2rem;
          display: inline-block;
          color: $color-mute;
          font-size: 0.8rem;
        }
      }

      .sdg-label {
        flex: 1;
        display: flex;
        align-items: center;
        transition-duration: 0.1s;

        span {
          line-height: 1.2rem;
          display: inline-block;
          width: 70%;
          max-width: 500px;
          font-weight: bold;
          font-size: 0.9rem;
        }
      }

      .sdg-direction {
        margin-right: 16px;
      }

      &:hover {
        .sdg-label {
          opacity: 1 !important;
          color: var(--color);

          &.sdg-label-tick {
            opacity: 0;
          }
        }
      }
    }
  }
</style>

