<template>
  <div class="collapse">
    <h3 v-on:click="toggle" tabindex="0" v-on:keypress="toggle" :title="(visible ? 'Hide' : 'Show') + ' the abstract'">
      <a>
        <SortIcon :active="true" :reverse="visible" />
        {{ title }}
      </a>
    </h3>
    <div class="content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
  import SortIcon from '~/components/SortIcon.vue'

  export default {
    props: ['title'],
    data () {
      return {
        visible: false
      }
    },
    components: {
      SortIcon
    },
    methods: {
      toggle: function () {
        const el = this.$refs.content
        if (el.clientHeight) {
          this.visible = false
          el.style.height = 0
        } else {
          this.visible = true
          el.style.height = el.scrollHeight + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    cursor: pointer;
  }

  .icon-sort {
    width: 10px;
    height: 10px;
    margin-right: 5px;
    fill: #D0CFCE;

    * {
      transition-duration: 0.3s;
    }
  }

  .content {
    transition: height .5s;
    height: 0;
    overflow: hidden;
    margin-top: 1rem;
  }
</style>
