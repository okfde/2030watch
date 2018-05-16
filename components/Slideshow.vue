<template>
  <div class="intro box">
    <header>
      <h2>Warum wir andere Daten brauchen um Nachhaltigkeit zu messen</h2>
    </header>
    <section class="columns columns-gutter">
      <div class="text">
        <div v-if="slide === 1" ref="slide1">
          <p>Die Bundesregierung verwendet einen <a class="dns" target="_blank" href="https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22">offiziellen Indikatorenkatalog (DNS)</a> um den Fortschritt Deutschlands in Richtung Nachhaltigkeit zu überwachen. Für jedes der 17 Nachhaltigkeitsziele (SDGs) spiegelt ein Indikatorenset den jeweiligen Fortschritt in Richtung Nachhaltigkeit wieder. Das Urteil: Deutschland ist nachhaltig. <br><br> 2030 Watch stellt diesem offiziellen Indikatorenkatalog einen <a target="_blank" class="okf" href="#">erweiterten Indikatorenkatalog</a> entgegen, welcher fehlende Themen, ambitioniertere Zielwerte und mehr Verantwortung aufzeigt. Das Urteil: Deutschland hat noch großen Handlungsbedarf um wirklich nachhaltig zu werden.</p>      
        </div>
        <div v-else-if="slide === 2" ref="slide2">
          <h5 class="caption">Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit</h5>
          <p>Das Nachhaltigkeitsziel SDG 5 steht für die Gleichstellung der Geschlechter. Im Zuge der gesetzlichen Vorschriften sind bestimmte Unternehmen in Deutschland seit 2016 dazu verpflichtet, mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Auch die Bundesregierung hat dasselbe Ziel für SDG 5 gesetzt, jedoch bis 2030. Die Vereinten Nationen sprechen von gleichberechtigter Partizipation von Frauen in Politik, Wirtschaft und öffentlichem Leben.</p>
          <p>Aus Sicht von 2030 Watch ist daher das Ziel von 30% der Deutschen Nachhaltigkeitsstrategie (DNS) nicht ambitioniert genug. Mit der Betrachtung von lediglich 106 Unternehmen nimmt die DNS außerdem nur einen unzureichenden Bereich der Teilhabe in den Blick.</p>
        </div>
        <div v-else-if="slide === 3" ref="slide3">
          <p>Aus Sicht von 2030 Watch ist daher das Ziel von 30% der Deutschen Nachhaltigkeitsstrategie (DNS) nicht ambitioniert genug. Mit der Betrachtung von lediglich 106 Unternehmen nimmt die DNS außerdem nur einen unzureichenden Bereich der Teilhabe in den Blick.</p>
        </div>
        <div v-else ref="slide4">
          <p>Die Konsequenz: 2030 Watch fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichtsräten und anderen Führungsebenen. Ergänzend zur Wirtschaft ist 2030 Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030 Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungsbedarf Deutschlands offensichtlich.</p>
          <p>Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs. Lernt, diskutiert, entdeckt!</p>
        </div>
      </div>
      <div class="indicators">
          <div v-if="slide === 1" ref="slide1" class="legendProgress">
            <div class="sdg-process-wrapper">
              <VisProgress :sdg="sampleSDG" :vLegend="true" :compact="false" />
            </div>
          </div>
          <div v-else-if="slide === 2" ref="slide2">
            <h5 class="caption">Offizielle DNS Indikatoren SDG 5</h5>
            <ul>
              <li v-for="item in indicators_dns "><VisIndicator :i="item" :compact="true" color="F8B300" /></li>
            </ul>
            <h5 class="caption">Erweiterte 2030 Watch Indikatoren SDG 5</h5>
            <ul>
               <li v-for="item in indicators_okf "><VisIndicator :i="item" :compact="true" color="04A6F0" /></li>
            </ul>
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
        sampleSDG: {
          values: {
            okf: 48,
            dns: 89
          }
        }
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      indicators_dns () {
        return [
          this.data['dns-verdienstabstand-zwischen-frauen-und-maennern'],
          this.data['dns-frauen-wirtschaft-dns'],
          this.data['dns-frauen-bildung-eza']
        ]
      },
      indicators_okf () {
        return [
          this.data['dns-verdienstabstand-zwischen-frauen-und-maennern'],
          this.data['okf-frauen-wirtschaft'],
          this.data['okf-frauen-parlamente'],
          this.data['okf-verteilung-hausarbeit'],
          this.data['okf-gendergap-renten'],
          this.data['okf-gewalt-gegen-frauen']
        ]
      }
    },
    components: {
      VisIndicator,
      VisProgress
    },
    mounted () {
      console.log(this.$refs)
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/variables";

  .intro {
    header, section, footer {
      width: 100%;
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

      ul {
        padding: $spacing/2 0;
        text-align: center;

        li {
          display: inline-block;
        }
      }
    }

    footer {
      text-align: right;
      margin-top: $spacing;

      .progress {
        text-align: center;

        .icon {
          display: inline-block;
          border-radius: 100%;
          width: 13px;
          height: 13px;
          margin-right: 10px;

          &.past {
            background-color: $color-okf;
          }

          &.future {
            // background-color: lighten($color-mute, 20%);
            background-color: rgba(0, 0, 0, .1);
          }
        }
      }

      .btn {
        display: inline-block;
        margin: 0 $spacing / 2;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
