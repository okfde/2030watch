<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <div class="message">
          <h1>Wie nachhaltig ist Deutschland?</h1>
          <p>Der Zustand der Welt erfordert eine Trans&shy;formation zu mehr Gerechtig&shy;keit und Nachhaltiger Entwicklung. In 2015 haben sich alle UN-Staaten verpflichtet, für die Realisierung dieser Transformation siebzehn Nachhaltig&shy;keitsziele - den sogenannten “Sustainable Development Goals (SDGs)”- bis zum Jahr 2030 umzusetzen. Auch die Bundesregierung hat mit der “Deutschen Nachhaltigkeitsstrategie (DNS)” die SDGs in nationale Ziele übersetzt.</p>
          <p>2030Watch will als zivil&shy;gesell&shy;schaftliches Projekt die Deutsche Nachhaltig&shy;keitsstrategie (DNS) kritisch ergänzen und überprüfen, ob Deutschland seine Versprechen einhält.</p>
        </div>
      </div>
    </header>
    <section class="intro-container">
      <div class="wrapper">
        <Slideshow />
      </div>
    </section>
    <section>
      <div class="wrapper">
        <h2>So nachhaltig ist Deutschland – <br />
        Das sagen offizielle und komplementäre Indikatoren</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, fugit, eum vel aperiam ut nesciunt rem voluptate vero quibusdam quos quia impedit aliquam fugiat architecto, alias qui iure numquam modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, fugit, eum vel aperiam ut nesciunt rem voluptate vero quibusdam quos quia impedit aliquam fugiat architecto, alias qui iure numquam modi.</p>
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
  @import "~@/assets/style/variables";

  .inpage-header {
    padding: 10vh 0;
    color: #fff;

    .message {
      width: 70%;
      max-width: 800px;

      p {
        font-size: 1.1rem;
      }
    }
  }

  .intro-container {
    background: linear-gradient(0deg, transparent 50%, #04A6F0 50%);
  }

  .vis-wrapper {
    margin: $spacing 0;
  }
</style>
