<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Erfahre mehr zu aktuellen Themen rund um 2030 Watch und unseren Aktivitäten</p>
          </div>
          <div>
            <!-- <strong>halleo gdg</strong> -->
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        <blogpost></blogpost>
        <blogpost></blogpost>
        <blogpost></blogpost>
      </div>
    </div>
  </div>
</template>

<script>
  import Blogpost from '~/pages/blog/Blogpost.vue'
  export default {
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
      Blogpost
    }
  }
</script>

<style lang="scss" scoped>
  section {
    padding: inherit 15vw;

    &:nth-child(odd) {
      background: #e0e0e0;
    }
  }
</style>
