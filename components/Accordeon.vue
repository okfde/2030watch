<template>
  <ul>
    <li v-for='item in faqs' @click='toggle(item)' class='item' :class='{active: item.open}'>
      <div class='title'>
        <span>{{item.title}}</span>
        <span>{{ item.open ? '&#8722;' : '&#43;' }}</span>
      </div>
        <div class='body' v-show='item.open'>{{item.body}}</div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['faqs'],
    computed: {
    },
    methods: {
      toggle (item) {
        item.open = !item.open
      }
    },
    directives: {
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/base";

  ul {
    width: 100%;
  }

  .item {
    cursor: pointer;
    padding: $spacing/3 0;
    margin: $spacing/3 0;
    border-bottom: 1px solid $color-mute; 

    .title {
      display: flex;
      font-weight: 600;
      

      span {
        flex: 1;

        &:last-of-type {
          text-align: right;
          font-size: 1.5rem;
        }
      }
    }
  }

  .active {
     padding-bottom: $spacing/2;    
  }

</style>
