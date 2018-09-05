<template>
  <ul class="sdg-leiste">
    <li v-if="sdg.textIntro === 'coming soon'"
      v-for="(sdg, slug) in sdgs"
      :class="{ 'sdg-band-item': true, 'enabled': true, 'current': current === slug }"
      :style="{ 'background-color': '#' + sdg.color }"
      :key="slug">
      <span class="sdg-number">{{ sdg.number }}</span>
      <a class="sdg-link coming-soon">
        {{ sdg.number }} coming soon
      </a>
    </li>
    <li v-else
      :class="{ 'sdg-band-item': true, 'enabled': true, 'current': current === slug }"
      :style="{ 'background-color': '#' + sdg.color }"
      :key="slug">
      <span class="sdg-number">{{ sdg.number }}</span>
      <nuxt-link :to="'/sdg/' + slug" class="sdg-link">
        SDG {{ sdg.number }}&#8239;&mdash;&#8239;{{ sdg.labelShort }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: ['current'],
    computed: {
      ...mapState([
        'sdgs'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';
  .sdg-leiste {
    display: flex;
    height: 25px;
    list-style: none;
    transition-duration: 2s; // Duration for size change
  }

  .sdg-band-item {
    flex: 1;
    transition-duration: 1s;
    overflow: hidden;
    text-align: center;
    height: 25px;
    line-height: 25px;
    font-size: 0.8rem;

    .sdg-link {
      color: #fff;
      height: 25px;
      line-height: 25px;
      opacity: 0;
      transition-duration: 1.5s; // Duration for text appearance
      white-space: nowrap;
      display: block;
    }

    .coming-soon {
      cursor: default;
    }

    .sdg-number {
      padding-left: 0.5rem;
    }

    &.enabled {
      color: #fff;

      &:hover {
        .sdg-number {
          display: none;
          transition-duration: 1.5s; // Duration for text appearance
        }
      }
    }

    &.current {
      flex: 4;

      .sdg-number {
        display: none;
      }
    }

    &:hover {
      flex: 8;

      .sdg-link {
        opacity: 1;
        transition-duration: 1.5s; // Duration for text appearance
      }
    }
  }

  @media screen and (max-width: $on-palm) {
    .sdg-band-item {
      font-size: 0.5rem;
    }
  }
</style>
