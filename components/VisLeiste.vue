<template>
  <ul class="sdg-leiste">
    <li v-if="sdg.textIntro === 'coming soon' || sdg.textIntro === ''"
      v-for="(sdg, slug) in sdgs"
      :class="{ 'sdg-item': true, 'current': current === slug }"
      :style="{ 'background-color': '#' + sdg.color }"
      :key="slug">
      <span class="disabled">{{ sdg.number }} coming soon</span>
      <a title="coming soon" class="sdg-link disabled">
        {{ sdg.number }}&#8239;&mdash;&#8239;{{ sdg.labelShort }}
      </a>
    </li>
    <li v-else
      :class="{ 'sdg-item': true, 'enabled': true, 'current': current === slug }"
      :style="{ 'background-color': '#' + sdg.color }"
      :key="slug">
      <span class="text">{{ sdg.number }}</span>
      <nuxt-link :to="'/sdg/' + slug" class="sdg-link">
        {{ sdg.number }}&#8239;&mdash;&#8239;{{ sdg.labelShort }}
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
  .sdg-leiste {
    display: flex;
    height: 25px;
    list-style: none;
    transition-duration: 2s; // Duration for size change
  }

  .sdg-item {
    flex: 1;
    transition-duration: 1s;
    overflow: hidden;
    text-align: center;
    height: 25px;
    line-height: 25px;

    .sdg-link {
      color: #fff;
      height: 25px;
      line-height: 25px;
      opacity: 0;
      transition-duration: 1.5s; // Duration for text appearance
      white-space: nowrap;
      display: block;
    }

    .disabled {
      cursor: default;
      color: #fff;
    }

    &.enabled {
      color: #fff;

      &:hover {
        .text {
          display: none;
          transition-duration: 1.5s; // Duration for text appearance
        }
      }
    }

    &.current {
      flex: 4;

      .text {
        opacity: 0;
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
</style>
