<template>
  <div class="intro box">
    <header>
      <h2>Warum wir andere Daten brauchen um Nachhaltigkeit zu messen</h2>
    </header>
    <section class="columns columns-gutter">
      <div class="text">
        <transition name="fade">
          <div v-if="slide === 1">
            <p>Die Bundesregierung verwendet einen <span>offiziellen Indkatorenkatalog</span> um den Fortschritt Deutschlands in Richtung Nachhaltigkeit zu überwachen. Dieser ist in der <a target="_blank" href="https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22">Deutschen Nachhaltigkeitsstrategie</a> definiert. Für jedes der 17 Nachhaltigkeitsziele (SDGs) spiegelt ein Indikatorenset den jeweiligen Fortschritt in Richtung Nachhaltigkeit wieder. Das Urteil: Deutschland steht gut da.</p> 
            <p>Der offizielle Indikatorenkatalog der Bundesregierung ist allerdings unzureichend, da er ein zu enges und unambitioniertes Bild von Nachhaltigkeit zeichnet. 2030 Watch stellt diesem offiziellen Indikatorenkatalog einen <span>komplementären Indikatorenkatalog</span> entgegen, welcher fehlende Themen, ambitioniertere Zielwerte und mehr Verantwortung aufzeigt. Das Urteil: Deutschland hat noch großen Handlungsbedarf, um wirklich nachhaltg zu werden.</p>
          </div>
          <div v-else-if="slide === 2">
            <p>Ein Beispiel: Das Nachhaltigkeitsziel SDG 5 steht für die Gleichstellung der Geschlechter. Im Zuge der gesetzlichen Vorschriften sind bestimmte Unternehmen in Deutschland seit 2016 dazu verpflichtet, mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Auch die Bundesregierung hat dasselbe Ziel für SDG 5 gesetzt, jedoch bis 2030. Die Vereinten Nationen sprechen von gleichberechtigter Partizipation von Frauen in Politik, Wirtschaft und öffentlichem Leben.</p>
            <p>Aus Sicht von 2030 Watch ist daher das Ziel von 30% der Deutschen Nachhaltigkeitsstrategie (DNS) nicht ambitioniert genug. Mit der Betrachtung von lediglich 106 Unternehmen nimmt die DNS außerdem nur einen unzureichenden Bereich der Teilhabe in den Blick.</p>
          </div>
          <div v-else-if="slide === 3">
            <p>Die Konsequenz: 2030 Watch fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichtsräten und anderen Führungsebenen. Ergänzend zur Wirtschaft ist 2030 Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030 Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungsbedarf Deutschlands offensichtlich.</p>
          </div>
          <div v-else>
            <p>Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs. Lernt, diskutiert, entdeckt!</p>
          </div>
        </transition>
      </div>
      <div class="indicators">
        <div>
          <h5>Indikatorenset der Deutschen Nachhaltigkeitsstrategie</h5>
          <ul>
            <li><VisIndicator :i="indicator1" :compact="true" /></li>
          </ul>
        </div>
        <div>
          <h5>Indikatorenset von 2030 Watch</h5>
          <ul>
            <li><VisIndicator :i="indicator2" :compact="true" /></li>
            <li><VisIndicator :i="indicator3" :compact="true" /></li>
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
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisIndicator from '~/components/VisIndicator.vue'

  export default {
    data: function () {
      return {
        slide: 1
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      indicator1 () {
        return this.data['dns-frauen-wirtschaft-dns']
      },
      indicator2 () {
        return this.data['okf-frauen-wirtschaft']
      },
      indicator3 () {
        return this.data['okf-frauen-parlamente']
      }
    },
    components: {
      VisIndicator
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/variables";

  .intro {

    header, section, footer {
      width: 100%;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .indicators {
      ul li {
        display: inline-block;
      }
    }

    footer {
      text-align: right;
      margin-top: $spacing;

      span {
        display: inline-block;
        margin: 0 $spacing / 2;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
