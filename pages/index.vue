<template>
  <div class="container rows">
    <header>
      <h1>Wie nachhaltig ist Deutschland?</h1>
      <p>Der Zustand der Welt erfordert eine Transformation zu mehr Gerechtigkeit und Nachhaltiger Entwicklung. In 2015 haben sich alle UN-Staaten verpflichtet, für die Realisierung dieser Transformation siebzehn Nachhaltigkeitsziele - den sogenannten “Sustainable Development Goals (SDGs)”- bis zum Jahr 2030 umzusetzen. Auch die Bundesregierung hat mit der “Deutschen Nachhaltigkeitsstrategie (DNS)” die SDGs in nationale Ziele übersetzt.</p>
      <p>2030Watch will als zivilgesellschaftliches Projekt die Deutsche Nachhaltigkeitsstrategie (DNS) kritisch ergänzen und überprüfen, ob Deutschland seine Versprechen einhält.</p>
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
