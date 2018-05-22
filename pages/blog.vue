<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <p>Erfahre mehr zu aktuellen Themen rund um 2030Watch und unseren Aktivitäten</p>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        <blogpost-preview></blogpost-preview>
        <blogpost-preview></blogpost-preview>
        <blogpost-preview></blogpost-preview>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogpostPreview from '~/pages/blog/Blogpost-Preview.vue'

  export default {
    components: {
      BlogpostPreview
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
