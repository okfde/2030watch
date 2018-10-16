<template>
  <ul>
    <li v-for="item in faqs" class="item" :id="item.id">
      <Collapse :title="item.title">
        <vue-markdown>{{ item.body }}</vue-markdown>
      </Collapse>
    </li>
  </ul>
</template>

<script>
  import Collapse from '~/components/Collapse.vue'
  import VueMarkdown from 'vue-markdown'

  export default {
    props: ['faqs'],
    components: {
      Collapse,
      VueMarkdown
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

  ul {
    padding: 0;
  }

  ul li, ol li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
