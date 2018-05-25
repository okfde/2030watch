<template>
  <div class="intro box">
    <header>
      <h2>Warum wir andere Indikatoren brauchen um Nachhaltigkeit zu messen</h2>
    </header>
    <section class="columns columns-gutter" :style="{ 'height': slideHeight + 'px' }">
      <ul class="container" ref="slidesText">
        <li :class="{ 'slide': true, 'active': slide === 1 }">
          <p>Die Bundesregierung hat mit der <a href="https://www.bundesregierung.de/Content/DE/_Anlagen/Nachhaltigkeit-wiederhergestellt/2017-01-11-nachhaltigkeitsstrategie.pdf;jsessionid=4698A132C6FCD96F5DFADD2C6DE6FF28.s7t1?__blob=publicationFile&v=22" class="dns" target="_blank">“Deutschen Nachhaltigkeitsstrategie” (DNS)</a> die SDGs in nationale Ziele übersetzt. 2030Watch diskutiert anhand von alternativen Indikatoren wie ambitioniert Deutschland die SDGs umsetz und weisst auf fehlende Themen, bessere Zielwerte und mehr Verantwortung hin.</p>
        </li>
        <li :class="{ 'slide': true, 'active': slide === 2 }">
          <h5 class="caption">Ein Beispiel: SDG 5 – Geschlechtergerechtigkeit</h5>
          <p>
            Die Bundesregierung hat sich unter Geschlechtergerechtigkekt zum Ziel gesetzt bis 2030, 30% Frauenanteil in den Aufsichtsräten zu erreichen. Aus Sicht von 2030Watch ist das Ziel von 30% der Deutschen Nachhaltigkeitsstrategie (DNS) nicht ambitioniert genug. und fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichtsräten und anderen Führungsebenen.
          </p>
        </li>
        <li :class="{ 'slide': true, 'active': slide === 3 }">
          <p>
            Ergänzend zur Wirtschaft ist 2030Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungsbedarf Deutschlands offensichtlich.
          </p>
        </li>
        <li :class="{ 'slide': true, 'active': slide === 4 }">
          <p>Zudem weisst 2030Watch mit Indikatoren zur Ungleichen Verteilung von Hausarbeit und Unterschied in Renteneinkommen auf wichtige Themen die in der DNS vernachlässigt werden.
          </p>
        </li>
        <li :class="{ 'slide': true, 'active': slide === 5 }">
          <p>Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs. Lernt, diskutiert, entdeckt! 48 %89 %0 %Nachhaltigkeit100 %2030WatchDaten DNS
          </p>
        </li>
      </ul>
      <ul class="indicators container" ref="slidesImages">
        <li :class="{ 'slide': true, 'active': slide === 1 }">
          <div class="sdg-process-wrapper">
            <VisProgress :sdg="introSDG" :vLegend="true" :compact="false" />
          </div>
        </li>
        <li :class="{ 'slide': true, 'active': slide === 2 }">
          <h5 class="caption">Offizielle DNS Indikatoren – SDG 5</h5>
          <ul class="indicator-list">
            <li v-for="indicator in indicators_dns">
              <VisIndicator :i="indicator" :compact="true" :tiny="true" color="F8B300" />
            </li>
          </ul>
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
          <!-- <h5 class="caption">Erweiterte 2030Watch Indikatoren – SDG 5</h5>
          <ul class="indicator-list">
            <li v-for="indicator in indicators_okf ">
               <VisIndicator :i="indicator" :compact="true" :tiny="true" color="04A6F0" />
            </li>
          </ul> -->
          <!-- <h5 class="caption">2030Watch Fortschritt – SDG 5</h5>
          <div class="sdg-process-wrapper">
            <VisProgress :sdg="officialSDG"
              :vLegend="false"
              :compact="false"
              :invert="true" />
        </div> -->
        </li>
      </ul>
    </section>
    <footer>
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
</template>

<script>
  import { mapState } from 'vuex'
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
    },
    mounted () {
      const heights = [...this.$refs.slidesImages.getElementsByClassName('slide'), ...this.$refs.slidesText.getElementsByClassName('slide')].map(item => {
        return item.clientHeight
      })
      this.slideHeight = Math.max(...heights)
    }
  }
</script>

<style lang="scss">
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
        padding: $spacing / 2 0;

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
