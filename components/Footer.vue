<template>
<footer class="page-footer modern columns columns-gutter">
      <address>
        Open Knowledge Foundation Deutschland e.V.<br />
        Singerstr. 109, 10179 Berlin, Deutschland<br /><br />

        Vereinsregister Nr: VR 30468 B<br />
        Steuernummer: 27/674/52428<br />
        VAT: DE278022128
      </address>
      <ul class="impressum">
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
      </ul>
      <ul class="social">
        <div><a href="#">Newsletter abbonieren</a></div>
        <div><a href="#">Mit einer Spende unterstützen</a></div>
        <br />
        <div class="social-icons">
          <a href="#"><img src="../assets/icons/email_light.png" alt=""></a>
          <a href="#"><img src="../assets/icons/twitter_light.png" alt=""></a>
          <a href="#"><img src="../assets/icons/fb_light.png" alt=""></a>
          <a href="#"><img src="../assets/icons/gh_light.png" alt=""></a>
        </div>
      </ul>
    </footer>
</template>

<script>
  export default {
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/style/base";
@import "../assets/style/typography";

.page-footer {

  .social {
    .social-icons a {
      margin-right: 2rem;
    }
  }
}



</style>
