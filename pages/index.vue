<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <div class="message">
          <h1>Wie nachhaltig ist Deutschland?</h1>
          <p>
            Mit der Agenda 2030 haben sich alle UN-Staaten verpflichtet, 17 Nachhaltig­keitsziele – die sogenannten "Sustainable Development Goals (SDGs)"
            – bis zum Jahr 2030 umzusetzen. 2030Watch diskutiert anhand von Indikatoren wie ambitioniert Deutschland die SDGs umsetzt.
          </p>
          <p>
            <div class="blockquote-wrapper">
              <blockquote cite="https://www.2030agenda.de/de/article/peer-review-2018">
                <p>
                  "Allerdings ist noch viel zu tun, um einen erfolgreichen deutschen Weg hin zur Nachhaltigkeit zu gestalten."
                </p>
              </blockquote>
              <cite>– Peer Review zur Deutschen Nachhaltigkeitsstrategie 2018</cite>
            </div>
          </p>
        </div>
      </div>
    </header>
    <VisLeiste class="padding-visleiste" :current="false" />
    <section>
      <div id="keyfindings" class="wrapper">
        <div>
          <h2 class="inline-h2">
            Ein nachhaltigeres Deutschland in 2030 - Wie nah sind wir dem Ziel?
          </h2>
          <h3 class="inline-h3">
            <span class="dns">Offizielle</span> Indikatoren der Deutschen Nachhaltigkeitsstrategie
            und <span class="okf">2030Watch</span> Indikatoren zum Handlungsbedarf für deutsche
            Nachhaltigkeit. <em>Go Explore!</em>
          </h3>
        </div>
        <VisListe />
      </div>
    </section>
  </div>
</template>

<script>
  import VisListe from '~/components/VisListe.vue'
  import VisLeiste from '~/components/VisLeiste.vue'

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
      VisLeiste
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .inpage-header {
    padding: 7vh 0 7vh 0;
  }

  .padding-visleiste {
    padding-top: 0;
    margin-bottom: 2rem;
  }

  blockquote {
    p {
      font-weight: bold;
    }
  }

  .blockquote-wrapper {
    max-width: 40vw;
    margin: 0 auto;
  }

  .inline-h2 {
    display: inline;
  }

  .inline-h3 {
    display: inline;
    font-size: 1.6rem;
    font-weight: normal;
  }

  h1 {
    color: #fff;
  }

  .dns {
    font-weight: bold;
  }

  .okf {
    font-weight: bold;
  }
</style>
