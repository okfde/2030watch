<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <div class="message">
          <h1>Wie nachhaltig ist Deutschland?</h1>
          <p>Der Zustand der Welt erfordert eine Trans&shy;formation zu mehr Gerechtig&shy;keit und Nachhaltiger Entwicklung. In 2015 haben sich alle UN-Staaten verpflichtet, für die Realisierung dieser Transformation siebzehn Nachhaltig&shy;keitsziele - den sogenannten “Sustainable Development Goals (SDGs)”- bis zum Jahr 2030 umzusetzen. Auch die Bundesregierung hat mit der “Deutschen Nachhaltigkeitsstrategie (DNS)” die SDGs in nationale Ziele übersetzt.</p>
          <p>2030 Watch will als zivil&shy;gesell&shy;schaftliches Projekt die Deutsche Nachhaltig&shy;keitsstrategie (DNS) kritisch ergänzen und überprüfen, ob Deutschland seine Versprechen einhält.</p>
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
        <h2>So nachhaltig ist Deutschland – Das sagen offizielle und komplementäre Daten</h2>
        <div class="columns columns-gutter">
          <!-- <section>
            <p>2030 Watch stellt dem <span class="dns">offiziellen Indikatorenkatalog</span> der Bundesregierung einen <span class="okf">erweiterten Indikatorenkatalog</span> entgegen, welcher den Fortschritt in Richtung Nachhaltigkeit misst. Die folgende Visualisierung vergleicht den bisher erreichten Fortschritt anhand beider Indikatorensets auf einer Skala von 0% (sehr geringe Nachhaltigkeit) bis 100% (sehr hohe Nachhaltigkeit).</p>
          </section> -->
          <!-- <section class="legendProgress">
            <VisProgress :sdg="sampleSDG" :vLegend="true" :compact="false" />
          </section> -->
        </div>
        <VisListe />
      </div>
    </section>
    <section>
      <div class="wrapper">
        <KeyFindings />
      </div>
    </section>
  </div>
</template>

<script>
  import VisListe from '~/components/VisListe.vue'
  import Slideshow from '~/components/Slideshow.vue'
  import KeyFindings from '~/components/KeyFindings.vue'
  import VisProgress from '~/components/VisProgress.vue'

  export default {
    data: function () {
      return {
        sampleSDG: {
          values: {
            okf: 25,
            dns: 75
          }
        }
      }
    },
    components: {
      VisListe,
      Slideshow,
      KeyFindings,
      VisProgress
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

  .legendProgress {
    height: 7rem;

    svg {
      width: 100%;
    }
  }

  .intro-container {
    background: linear-gradient(0deg, transparent 50%, $color-okf 50%);
  }
</style>
