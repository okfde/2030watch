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
  @import "~@/assets/style/variables";

  .item {
    cursor: pointer;
    padding: $spacing/3 0;
    margin: $spacing/3 0;
    border-bottom: 1px solid $color-mute; 
    max-height: auto;
    transition: 0.2s ease all; 

    .title {
      display: flex;
      font-weight: 600;
      

    &:last-child {
      border: none;
    }

    header {
      display: flex;
      font-weight: bold;
    }
  }
  }
</style>
