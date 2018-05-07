<template>
  <div class="intro">
    <header>
      <h2>Key findings</h2>
    </header>
    <section class="">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisIndicator from '~/components/VisIndicator.vue'

  export default {
    data: function () {
      return {
        slide: 1
      }
    },
    computed: {
      ...mapState([
        'data'
      ])
    },
    watch: {
    },
    methods: {
    },
    components: {
      VisIndicator
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/variables";
</style>
