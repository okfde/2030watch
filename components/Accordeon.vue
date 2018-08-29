<template>
  <ul>
    <li v-for="item in faqs" class="item" :id="item.id">
      <Collapse :title="item.title">
        <div v-html="item.body"></div>
      </Collapse>
    </li>
  </ul>
</template>

<script>
  import Collapse from '~/components/Collapse.vue'

  export default {
    props: ['faqs'],
    components: {
      Collapse
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .item {
    padding: $spacing / 1.5 0;
    border-bottom: 1px solid $color-border-mute;

    &:last-child {
      border: none;
    }

    header {
      display: flex;
      font-weight: bold;
    }
  }
</style>
