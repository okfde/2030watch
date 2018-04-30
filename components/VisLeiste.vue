<template>
  <ul class="sdg-leiste">
    <li v-for="(sdg, slug) in sdgs" :class="{ 'sdg-item': true, 'current': current === slug }" :style="{ 'background-color': '#' + sdg.color }">
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
    list-style: none;
    display: flex;
    height: 1rem;
    margin-bottom: 1rem;
    transition-duration: 1s;

    &:hover {
      height: 2rem;
      margin: 0;
    }
  }

  .sdg-item {
    flex: 1;
    transition-duration: 1s;
    overflow: hidden;
    text-align: center;

    .sdg-label {
      color: #fff;
      font-size: 0.8rem;
      opacity: 0;
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

