<template>
  <div :class="{ 'page': true, [klasse]: klasse }">
    <header class="page-header columns">
      <strong class="logo"><nuxt-link to="/"><img src="../assets/img/2030watch_logo.png" alt=""></nuxt-link></strong>
      <nav class="page-nav">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/projekt">Das Projekt</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="/about">Über uns</nuxt-link></li>
          <li><nuxt-link to="/aktiv" class="btn btn--action">Werde aktiv</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="page-content">
      <nuxt/>
    </div>
    <my-explainer></my-explainer>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyExplainer from '~/components/Explainer.vue'
  import MyFooter from '~/components/Footer.vue'
  export default {
    computed: {
      klasse () {
        console.log(this.$route.params)
        return this.$route.params.sdg
      }
    },
    components: {
      MyFooter,
      MyExplainer
    }
  }
</script>

<style lang="scss" scoped>

</style>
