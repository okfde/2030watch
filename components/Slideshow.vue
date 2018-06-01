<template>
  <div class="intro box">
    <a class="opener" v-on:click="seen = !seen">
      <header>
        <h2>
          Warum wir andere Indikatoren brauchen um Nachhaltigkeit zu messen
        </h2>
      </header>
    </a>
    <div v-if="!seen">
      <section class="columns columns-gutter">
        <ul class="container" ref="slidesText" :style="{ 'height': slideHeight + 'px' }">
          <li :class="{ 'slide': true, 'active': slide === 1 }">
            <p>Die Bundesregierung hat mit der <a href="https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22" class="dns" target="_blank">„Deutschen Nachhaltig&shy;keits&shy;strategie“ (DNS)</a> die SDGs in nationale Ziele übersetzt. 2030Watch diskutiert anhand von alternativen Indikatoren wie ambitioniert Deutschland die SDGs umsetz und weisst auf fehlende Themen, bessere Zielwerte und mehr Verantwortung hin.</p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 2 }">
            <h5 class="caption">Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit</h5>
            <p>
              Die Bundes&shy;regierung hat sich unter Geschlechter&shy;gerechtigkekt zum Ziel gesetzt bis 2030, 30% Frauen&shy;anteil in den Aufsichts&shy;räten zu erreichen. Aus Sicht von 2030Watch ist das Ziel von 30% der Deutschen Nachhaltigkeits&shy;strategie (DNS) nicht ambitioniert genug. und fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichts&shy;räten und anderen Führungsebenen.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 3 }">
            <p>
              Ergänzend zur Wirtschaft ist 2030Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungs&shy;bedarf Deutschlands offensichtlich.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 4 }">
            <p>Zudem weisst 2030Watch mit Indikatoren zur Ungleichen Verteilung von Hausarbeit, Gewalt gegen Frauen und  dem Unterschied in Renten&shy;einkommen auf wichtige Themen die in der DNS vernachlässigt werden.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 5 }">
            <p>
              Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs.
              Lernt, diskutiert, entdeckt!
            </p>
          </li>
        </ul>
        <ul class="indicators container" ref="slidesImages" :style="{ 'height': slideHeight + 'px' }">
          <li :class="{ 'slide': true, 'active': slide === 1 }">
            <div class="sdg-process-wrapper">
              <p>
                 Wie weit sind wir vom Ziel entfernt eine nachhaltige Transformation bis 2030 zu erreichen?
              </p>
              <div class="margin-legend">
                <VisProgress :vTickLabels="true" :sdg="introSDG" :vLegend="true" :compact="true" />
              </div>
            </div>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 2 }">
            <h5 class="caption">Indikatoren: Offiziell vs 2030Watch</h5>
            <div class="sdg-comparison-wrapper">
              <span class="number-big dns" v-html="format(30)" />
              <span class="number-big arrow"><i class="icon-up-big" /></span>
              <span class="number-big okf" v-html="format(50)" />
            </div>
            <!-- <ul class="indicator-list">
              <li v-for="indicator in indicators_dns">
                <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
              </li>
            </ul> -->
            <!-- <h5 class="caption">Offizieller Fortschritt – SDG 5</h5>
            <div class="sdg-process-wrapper">
              <VisProgress :sdg="officialSDG"
                :vLegend="false"
                :compact="false"
                :invert="true" />
            </div> -->
            <!-- <ul class="indicator-list">
              <li v-for="indicator in indicators_dns ">
                <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
              </li>
            </ul> -->
          </li>
          <li :class="{ 'slide': true, 'active': slide === 3 }">
            <h5 class="caption">Neuer Indikator 2030Watch: Frauen in Parlamenten</h5>
             <ul class="indicator-list">
              <li v-for="indicator in indicators_dns">
                <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
              </li>
            </ul>
            <ul class="indicator-list">
              <li v-for="indicator in indicators_okf_1 ">
                 <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
              </li>
            </ul>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 4 }">
            <h5 class="caption">Zusätzliche 2030Watch Indikatoren – SDG 5</h5>
            <ul class="indicator-list">
              <li v-for="indicator in indicators_okf_2 ">
                 <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <footer class="fixed-margin">
        <span
          v-on:click="slide <= 1 ? slide = slide : slide -= 1"
          :class="{ 'btn': true, 'disabled': slide <= 1 }">Zurück</span>
        <span
          v-on:click="slide > 4 ? slide = slide : slide += 1"
          :class="{ 'btn': true, 'disabled': slide > 4 }">Weiter</span>
        <div class="progress">
          <span
            v-for="n in 5"
            v-on:click="slide = n"
            :class="{ 'icon': true, 'past': n <= slide, 'future': n > slide }" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import format from '~/assets/js/format.js'
  import VisIndicator from '~/components/VisIndicator.vue'
  import VisProgress from '~/components/VisProgress.vue'

  export default {
    data: function () {
      return {
        slide: 1,
        slideHeight: 50,
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
        },
        seen: true
      }
    },
    methods: {
      format: format
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
      indicators_okf_1 () {
        const { data } = this
        return [
          data['okf-frauen-parlamente']
        ]
      },
      indicators_okf_2 () {
        const { data } = this
        return [
          data['okf-verteilung-hausarbeit'],
          data['okf-gewalt-gegen-frauen'],
          data['okf-gendergap-renten']
        ]
      }
    },
    components: {
      VisIndicator,
      VisProgress
    },
    mounted () {
      // const heights = [...this.$refs.slidesImages.getElementsByClassName('slide'), ...this.$refs.slidesText.getElementsByClassName('slide')].map(item => {
      //   return item.clientHeight
      // })
      // this.slideHeight = Math.max(...heights)
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .intro {
    position: relative;

    header, section, footer {
      width: 100%;
    }

    .container {
      position: relative;

      .slide {
        position: absolute;
        opacity: 0;
        transition-duration: 0.2s;
        transition-delay: 0s;
        width: 100%;

        &.active {
          opacity: 1;
          transition-delay: 0.2s;
        }
      }
    }

    .caption {
      margin-bottom: 0.5rem;
    }

    .dns {
      color: $color-dns;
    }

    .okf {
      color: $color-okf;
    }

    .indicators {
      .legendProgress {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

     .sdg-comparison-wrapper {
       display: flex;
       padding-top: 2em;

       .number-big {
         flex: 1;
         text-align: center;
         font-size: 3em;
         font-weight: bold;

         &.arrow {
            color: darken($color-mute,10%);
            transform: rotate(45deg);
          }
       }
      }

      .indicator-list {
        padding: $spacing / 2 0;
        display: inline;

        li {
          display: inline-block;
        }
      }
    }

    footer {
      text-align: right;

      .progress {
        text-align: center;

        .icon {
          cursor: pointer;
          display: inline-block;
          border-radius: 100%;
          width: 13px;
          height: 13px;
          margin-right: 10px;

          &.past {
            background-color: darken($color-mute,10%);
          }

          &.future {
            background-color: rgba(0, 0, 0, .1);
          }
        }
      }

      .btn {
        margin: 0 $spacing / 2;

        &:last-of-type {
          margin-right: $spacing * 2;
        }
      }
    }
    .margin-legend {
      margin: $spacing / 2 0;
      height: 60px;
    }

    .opener {
      display: inline-block;
      width: 100%;
    }

    // TODO calculate as before
    .fixed-margin {
      padding-top: 9rem;
    }
  }
</style>
