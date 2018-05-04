<template>
  <ul>
    <li v-for="item in faqs" class="item">
      <Collapse :title="item.title">
        <p>{{ item.body }}</p>
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
  @import "../assets/style/variables";

  .item {
    max-width: 800px;
    padding: $spacing / 1.5 0;
    border-bottom: 1px solid $color-mute;

    &:last-child {
      border: none;
    }

    header {
      display: flex;
      font-weight: bold;
    }
  }
</style>
