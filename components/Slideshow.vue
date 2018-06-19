<template>
  <div class="intro box">
    <a class="opener" v-on:click="toggle">
      <header>
        <h2 class="carousel-header">
          Warum brauchen wir andere Indikatoren, um Nachhaltigkeit zu messen?
        </h2>
      </header>
    </a>
    <div :style="{ 'display': display, 'visibility': visibility, 'height': initialHeight }">
      <section class="columns columns-gutter">
        <ul class="container" ref="slidesText" :style="{ 'height': slideHeight + 'px' }">
          <li :class="{ 'slide': true, 'active': slide === 1 }">
            <p>
              Die Bundesregierung hat mit der <a href="https://www.bundesregierung.de/Content/Infomaterial/BPA/Bestellservice/Deutsche_Nachhaltigkeitsstrategie_Neuauflage_2016.pdf?__blob=publicationFile&v=26" class="dns" target="_blank">„Deutschen Nachhaltig&shy;keits&shy;strategie“ (DNS)</a> die SDGs in nationale Ziele übersetzt. 2030Watch diskutiert anhand von alternativen Indikatoren wie ambitioniert Deutschland die SDGs umsetzt und weist auf fehlende Themen, bessere Zielwerte und mehr Verantwortung hin.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 2 }">
            <h5 class="caption">Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit</h5>
            <p>
              Die Bundes&shy;regierung hat sich unter Geschlechter&shy;gerechtigkeit
              zum Ziel gesetzt, bis 2030 30% Frauen&shy;anteil in den Aufsichts&shy;räten zu erreichen.
              Aus Sicht von 2030Watch ist das Ziel von 30% der Deutschen Nachhaltigkeits&shy;strategie
              (DNS) nicht ambitioniert genug und fordert im Einklang mit SDG 5 einen Frauenanteil von
              50% in Aufsichts&shy;räten und anderen Führungsebenen.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 3 }">
            <p>
              Ergänzend zur Wirtschaft ist 2030Watch das Thema der politischen Partizipation von Frauen ebenso wichtig.
              Daher ergänzt 2030Watch die Deutsche Nachhaltigkeits&shy;strategie (DNS) um die Betrachtung des
              Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker
              Handlungs&shy;bedarf Deutschlands offensichtlich.
            </p>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 4 }">
            <p>
              Zudem weist 2030Watch mit Indikatoren zur ungleichen Verteilung
              von Hausarbeit, Gewalt gegen Frauen und dem Unterschied in Renten&shy;einkommen
              auf wichtige Themen hin, die in der Deutschen Nachhaltigkeits&shy;strategie
              (DNS) vernachlässigt werden.
              <p>
                Viele weitere spannende Stories und Ergänzungen finden sich in den weiteren SDGs.
                <div class="carousel-prompt">Go Explore!</div>
              </p>
            </p>
          </li>
        </ul>
        <ul class="indicators container" ref="slidesImages" :style="{ 'height': slideHeight + 'px' }">
          <li :class="{ 'slide': true, 'active': slide === 1 }">
            <div class="sdg-process-wrapper">
              <p>
                 Wie weit sind wir vom Ziel entfernt, eine nachhaltige Trans&shy;for&shy;ma&shy;tion bis 2030 zu erreichen?
              </p>
              <div class="margin-legend">
                <VisProgress :vTickLabels="true" :sdg="introSDG" :vLegend="true" :compact="true" />
              </div>
            </div>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 2 }">
            <h5 class="caption">Zwei Perspektiven: die Deutsche Nachhaltigkeitsstrategie (DNS) und 2030Watch</h5>
            <div class="sdg-comparison-wrapper">
              <div class="progress-chart" title="DNS">
                <VisPieChart :value="30" fill="F8B300" :background="'ffffff'" />
              </div>
              <span class="number-big arrow"><i class="icon-up-big" /></span>
              <div class="progress-chart" title="2030Watch" style="margin-right: 1.8rem;">
                <VisPieChart :value="50" fill="04A6F0" :background="'ffffff'" />
              </div>
            </div>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 3 }">
            <h5 class="caption">Neuer Indikator 2030Watch: Frauen in Parlamenten</h5>
             <ul class="indicator-list">
              <li v-for="indicator in indicators_dns">
                <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
              </li>
            </ul>
            <ul class="indicator-list">
              <li v-for="indicator in indicators_okf_1">
                 <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
              </li>
            </ul>
          </li>
          <li :class="{ 'slide': true, 'active': slide === 4 }">
            <h5 class="caption">Zusätzliche 2030Watch Indikatoren</h5>
            <ul class="indicator-list">
              <li v-for="indicator in indicators_okf_2 ">
                 <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <footer>
        <span
          v-on:click="slide <= 1 ? slide = slide : slide -= 1"
          :class="{ 'btn': true, 'disabled': slide <= 1 }">Zurück</span>
        <span
          v-on:click="slide > 3 ? slide = slide : slide += 1"
          :class="{ 'btn': true, 'disabled': slide > 3 }">Weiter</span>
        <div class="progress">
          <span
            v-for="n in 4"
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
  import VisPieChart from '~/components/VisPieChart.vue'

  export default {
    data: function () {
      return {
        slide: 0,
        slideHeight: 0,
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
        visibility: 'hidden',
        display: '',
        present: false,
        // use initialHeight to not have unwanted margin at pageload
        initialHeight: '0px'
      }
    },
    methods: {
      format: format,
      toggle: function () {
        if (this.slide === 0) this.slide = 1 // show first slide in the initial state
        if (!this.present) {
          // set initialHeight undefined and use calculated slideHeight instead
          this.initialHeight = undefined
          // TODO check for a better solution
          // I used this workaround (with both display and visibility) to get rid of flickering ...
          // ... when the user closes the carousel
          // ... that happens if the visibility property is used solely
          // 'display:none' could not be used alone because we need to calculate the height
          // ... that wouldn't be possible because these non-displayed elements don't have a
          // ... height in the DOM and we start in a collapsed mode
          this.visibility = 'visible'
          this.display = 'block'
          this.present = true
        } else {
          this.display = 'none'
          this.visibility = 'hidden'
          this.present = false
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
      VisProgress,
      VisPieChart
    },
    mounted () {
      const heights = [...this.$refs.slidesImages.getElementsByClassName('slide'), ...this.$refs.slidesText.getElementsByClassName('slide')].map(item => {
        return item.clientHeight
      })
      this.slideHeight = Math.max(...heights)
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
      visibility: hidden;

      &.active {
        opacity: 1;
        transition-delay: 0.2s;
        visibility: visible;
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
        font-size: 3.2em;
        font-weight: bold;

        &.arrow {
          color: darken($color-mute,10%);
          transform: rotate(45deg);
          margin-top: 1rem;
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
        margin-top: 1.5rem;

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

      // &:last-of-type {
      //   margin-right: $spacing * 2;
      // }
    }
  }
  .margin-legend {
    margin: $spacing 0;
    height: 60px;
  }

  .opener {
    // to have a bigger clickable area
    display: inline-block;
    width: 100%;
  }

  .carousel-header {
    color: $color-attention;
    text-decoration: underline;
  }

  .carousel-prompt {
    font-weight: bold;
    font-size: 1.4rem;
    margin-top: 1rem;
    text-transform: uppercase;
    color: $color-okf;
    text-align: center;
  }
}

.progress-chart {
  display: flex;

  > * {
    max-height: 110px;
    max-width: 110px;
  }
}
</style>
