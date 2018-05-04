<template>
  <ul class="sdg-leiste">
    <li
      v-for="(sdg, slug) in sdgs"
      :class="{ 'sdg-item': true, 'current': current === slug }"
      :style="{ 'background-color': '#' + sdg.color }"
      key="slug">
      <nuxt-link :to="'/sdg/' + slug" class="sdg-link">
        <div class="sdg-label">
          {{ sdg.labelShort }}
        </div>
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
    height: 1.5rem;
    list-style: none;
    transition-duration: 2s; // Duration for size change
  }

  .sdg-item {
    flex: 1;
    transition-duration: 1s;
    overflow: hidden;
    text-align: center;

    .sdg-label {
      color: #fff;
      font-size: 0.8rem;
      line-height: 1.5rem;
      opacity: 0;
      transition-duration: 1.5s; // Duration for text appearance
      white-space: nowrap;
    }

    &.current {
      flex: 4;
    }

    &:hover {
      flex: 8;

      .sdg-label {
        opacity: 1;
      }
    }
  }
</style>

