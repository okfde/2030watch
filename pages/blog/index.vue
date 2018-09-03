<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <p>
          Hier erfährst du mehr zu aktuellen Themen rund um 2030Watch und unseren Aktivitäten.<br />
          Du möchtest über ein Thema, welches wir als Indikator haben, bloggen, dann melde dich bei uns.
        </p>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        <blogpost-preview></blogpost-preview>
      </div>
    </div>
  </div>
</template>

<script>
  import BlogpostPreview from '~/pages/blog/BlogpostPreview.vue'

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
