<template>
  <div class="page-container">
    <div class="wrapper info-message">
      <span class="info-message-bold">&#9432; Relaunch light:</span> Alle Inhalte gibt es bis 1. September
    </div>

    <header class="inpage-header">
      <div class="wrapper">
        <div class="message">
          <h1>Wie nachhaltig ist Deutschland?</h1>
          <p>Der Zustand der Welt erfordert eine Transformation zu mehr Gerechtig&shy;keit und Nachhaltiger Entwicklung. Mit der Agenda 2030 haben sich alle UN-Staaten verpflichtet, für die Realisierung dieser Trans&shy;formation siebzehn Nachhaltig&shy;keitsziele - den sogenannten „Sustainable Development Goals (SDGs)“- bis zum Jahr 2030 umzusetzen. Der damit verbundene globale Indikatoren&shy;katalog dient zur Fortschritts&shy;messung.</p>
          <p>2030Watch diskutiert wie ambitioniert Deutschland die SDGs umsetzt.</p>
        </div>
      </div>
    </header>

    <VisLeiste class="padding-visleiste" :current="false" />

    <section>
      <div id="keyfindings" class="wrapper">
        <h2>
          Wie weit sind wir von einem nachhaltigeren Deutschland in 2030 entfernt?
        </h2>
        <!-- <div class="columns columns-gutter">
          <section>
            <p>2030Watch stellt dem <span class="dns">offiziellen Indikatorenkatalog</span> der Bundesregierung einen <span class="okf">erweiterten Indikatorenkatalog</span> entgegen, welcher den Fortschritt in Richtung Nachhaltigkeit misst. Die folgende Visualisierung vergleicht den bisher erreichten Fortschritt anhand beider Indikatorensets auf einer Skala von 0% (sehr geringe Nachhaltigkeit) bis 100% (sehr hohe Nachhaltigkeit).</p>
          </section>
          <section class="legendProgress">
            <VisProgress :sdg="sampleSDG" :vLegend="true" :compact="false" />
          </section>
        </div> -->
        <VisListe />
      </div>
    </section>

    <section style="margin-bottom: 2rem;">
      <div class="wrapper">
        <Slideshow />
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
  import VisLeiste from '~/components/VisLeiste.vue'
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
      VisLeiste,
      VisProgress
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .info-message {
    color: $color-okf;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .info-message-bold {
    font-weight: bold;
  }

  .inpage-header {
    padding: 7vh 0 7vh 0;
  }

  .padding-visleiste {
    padding-top: 0;
    margin-bottom: 2rem;
  }

</style>
