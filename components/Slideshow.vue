<template>
  <div class="intro box">
    <header>
      <h2>Warum wir andere Daten brauchen um Nachhaltigkeit zu messen</h2>
    </header>
    <section class="columns columns-gutter">
      <div class="text">
        <div v-if="slide === 1" ref="slide1">
          <p>
            Die Bundesregierung verwendet einen <a href="https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22" class="dns" target="_blank">offiziellen Indikatorenkatalog (DNS)</a> um den Fortschritt Deutschlands in Richtung Nachhaltigkeit zu überwachen. Für jedes der 17 Nachhaltigkeitsziele (SDGs) spiegelt ein Indikatorenset den jeweiligen Fortschritt in Richtung Nachhaltigkeit wieder. Das Urteil: Deutschland ist nachhaltig.
          </p>
          <p>
            2030 Watch stellt diesem offiziellen Indikatorenkatalog einen <a href="#" target="_blank" class="okf">erweiterten Indikatorenkatalog</a> entgegen, welcher fehlende Themen, ambitioniertere Zielwerte und mehr Verantwortung aufzeigt. Das Urteil: Deutschland hat noch großen Handlungsbedarf um wirklich nachhaltig zu werden.
          </p>
        </div>
        <div v-else-if="slide === 2" ref="slide2">
          <h5 class="caption">Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit</h5>
          <p>
            Das Nachhaltigkeitsziel SDG 5 steht für die Gleichstellung der Geschlechter. Im Zuge der gesetzlichen Vorschriften sind bestimmte Unternehmen in Deutschland seit 2016 dazu verpflichtet, mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Auch die Bundesregierung hat dasselbe Ziel für SDG 5 gesetzt, jedoch bis 2030. Die Vereinten Nationen sprechen von gleichberechtigter Partizipation von Frauen in Politik, Wirtschaft und öffentlichem Leben.
          </p>
        </div>
        <div v-else-if="slide === 3" ref="slide3">
          <p>
            Aus Sicht von 2030 Watch ist daher das Ziel von 30% der Deutschen Nachhaltigkeitsstrategie (DNS) nicht ambitioniert genug. Mit der Betrachtung von lediglich 106 Unternehmen nimmt die DNS außerdem nur einen unzureichenden Bereich der Teilhabe in den Blick.
          </p>
          <p>
            Die Konsequenz: 2030 Watch fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichtsräten und anderen Führungsebenen. Ergänzend zur Wirtschaft ist 2030 Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030 Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungsbedarf Deutschlands offensichtlich.
          </p>
        </div>
        <div v-else ref="slide4">
          <p>Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs. Lernt, diskutiert, entdeckt!</p>
        </div>
      </div>
      <div class="indicators">
        <div v-if="slide === 1" ref="slide1" class="legendProgress">
          <div class="sdg-process-wrapper">
            <VisProgress :sdg="introSDG" :vLegend="true" :compact="false" />
          </div>
        </div>
        <div v-else-if="slide === 2" ref="slide2">
          <h5 class="caption">Offizielle DNS Indikatoren – SDG 5</h5>
          <ul class="indicator-list">
            <li v-for="indicator in indicators_dns ">
              <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
            </li>
          </ul>
          <h5 class="caption">Offizieller Fortschritt – SDG 5</h5>
           <div class="sdg-process-wrapper">
            <VisProgress :sdg="officialSDG"
              :vLegend="false"
              :compact="false"
              :invert="true" />
          </div>
          <!-- <ul class="indicator-list">
            <li v-for="indicator in indicators_dns ">
              <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
            </li>
          </ul> -->
        </div>
        <div v-else-if="slide === 3" ref="slide3">
          <h5 class="caption">Erweiterte 2030 Watch Indikatoren – SDG 5</h5>
          <ul class="indicator-list">
            <li v-for="indicator in indicators_okf ">
               <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
            </li>
          </ul>
          <!-- <h5 class="caption">2030 Watch Fortschritt – SDG 5</h5>
          <div class="sdg-process-wrapper">
            <VisProgress :sdg="officialSDG"
              :vLegend="false"
              :compact="false"
              :invert="true" />
        </div> -->
        </div>
      </div>
    </section>
    <footer>
      <span
        v-on:click="slide <= 1 ? slide = slide : slide -= 1"
        :class="{ 'btn': true, 'disabled': slide <= 1 }">Zurück</span>
      <span
        v-on:click="slide > 3 ? slide = slide : slide += 1"
        :class="{ 'btn': true, 'disabled': slide > 3 }">Weiter</span>
      <div class="progress">
        <span v-for="n in slide" class="icon past" /><span v-for="n in (4 - slide)" class="icon future" />
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisIndicator from '~/components/VisIndicator.vue'
  import VisProgress from '~/components/VisProgress.vue'

  export default {
    data: function () {
      return {
        slide: 1,
        introSDG: {
          values: {
            okf: 48,
            dns: 89
          }
        },
        officialSDG: {
          values: {
            okf: 0,
            dns: 34
          }
        }
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      indicators_dns () {
        const { data } = this
        return [
          data['dns-verdienstabstand-zwischen-frauen-und-maennern'],
          data['dns-frauen-wirtschaft-dns'],
          data['dns-frauen-bildung-eza']
        ]
      },
      indicators_okf () {
        const { data } = this
        return [
          data['dns-verdienstabstand-zwischen-frauen-und-maennern'],
          data['okf-frauen-wirtschaft'],
          data['okf-frauen-parlamente'],
          data['okf-verteilung-hausarbeit'],
          data['okf-gendergap-renten'],
          data['okf-gewalt-gegen-frauen']
        ]
      }
    },
    components: {
      VisIndicator,
      VisProgress
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/variables";

  .intro {
    position: relative;
    height: 70vh;

    header, section, footer {
      width: 100%;
    }

    .caption {
      margin-bottom: 0.5rem;
    }

    .dns {
      color: $color-dns;
    }

    .okf {
      color: $color-okf
    }

    .indicators {
      .legendProgress {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      .indicator-list {
        padding: $spacing/2 0;

        li {
          display: inline-block;
        }
      }
    }

    footer {
      text-align: right;
      margin-top: $spacing/2;
      position: absolute;
      bottom: 1rem;
      left: 0;

      .progress {
        text-align: center;

        .icon {
          display: inline-block;
          border-radius: 100%;
          width: 13px;
          height: 13px;
          margin-right: 10px;

          &.past {
            background-color: #FCEA2B;
          }

          &.future {
            background-color: rgba(0, 0, 0, .1);
          }
        }
      }

      .btn {
        display: inline-block;
        margin: 0 $spacing / 2;

        &:last-of-type {
          margin-right: $spacing * 2;
        }
      }
    }
  }
</style>
