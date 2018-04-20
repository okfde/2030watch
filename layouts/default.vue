<template>
  <div :class="{ 'page': true, [klasse]: klasse }">
    <header class="page-header columns">
      <strong class="logo"><nuxt-link to="/">2030 Watch</nuxt-link></strong>
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
    <footer class="page-footer columns columns-gutter">
      <address>
        Open Knowledge Foundation Deutschland e.V.<br /><br />
        Singerstr. 109, 10179 Berlin, Deutschland<br /><br />

        Vereinsregister Nr: VR 30468 B<br />
        Steuernummer: 27/674/52428<br />
        VAT: DE278022128
      </address>
      <ul>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
      </ul>
      <ul>
        <li>Social Media</li>
        <li>Social Media</li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    computed: {
      klasse () {
        return this.$route.params.sdg
      }
    }
  }
</script>

<style lang="scss">

</style>
