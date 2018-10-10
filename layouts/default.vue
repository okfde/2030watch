<template>
  <div :class="{ 'page': true, [klasse]: klasse }">
    <header class="page-header columns">
      <strong class="logo"><nuxt-link to="/"><img src="../assets/img/2030watch_logo_white.png" alt="2030Watch Logo"></nuxt-link></strong>
      <nav class="page-nav">
        <ul>
          <li><nuxt-link to="/projekt">Das Projekt</nuxt-link></li>
          <li><nuxt-link to="/methodik">Methodik</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/about">Über uns</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="page-content">
      <nuxt/>
    </div>
    <Explainer />
    <Footer />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Explainer from '~/components/Explainer.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    computed: {
      ...mapState([
        'data'
      ]),
      klasse () {
        if (typeof this.$route.params.sdg !== 'undefined') {
          return this.$route.params.sdg
        }
        if (typeof this.$route.params.indicator !== 'undefined') {
          return this.data[this.$route.params.indicator]['sdg']['slug']
        }
      }
    },
    components: {
      Footer,
      Explainer
    }
  }
</script>

<style lang="scss" scoped>
  .page-nav > ul{
    padding: 0;
  }
</style>
