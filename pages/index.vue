<template>
  <div class="container rows">
    <header>
      <h1>Wie nachhaltig ist Deutschland wirklich?</h1>
      <p>Deutschland hat sich verpflichtet bis 2030 die globalen Nachhaltigkeits-Ziele der Vereinten Nationen zu erreichen. 2030 Watch überprüft, ob dieses Versprechen eingehalten wird.</p>
    </header>
    <section class="columns">
      <Slideshow />
    </section>
    <section class="columns">
      <div>
        <h2>So nachhaltig ist Deutschland – Das sagen offizielle und komplementäre Indikatoren</h2>
        <div class="vis-wrapper">
          <VisListe />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import VisListe from '~/components/VisListe.vue'
  import Slideshow from '~/components/Slideshow.vue'

  export default {
    data: function () {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    components: {
      VisListe,
      Slideshow
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

</style>
