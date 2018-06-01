<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <a href="/#keyfindings">Übersicht </a><span class="bread-spacer">/</span><span class="bread-current"> SDG {{ sdg.number}} – {{ sdg.labelShort }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ sdg.number }}</small>
        <section class="columns columns-gutter">
          <div>
            <h1>{{ sdg.labelShort }}</h1>
            <p>{{ sdg.textIntro }}</p>
          </div>
          <div class="sdg-image">
            <img :src="image" :title="sdg.labelShort" />
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <VisLeiste :current="sdg.slug" />
      <div class="wrapper">
        <div class="indicator-overview columns columns-rows">
          <div class="description description-dns columns columns-gutter">
            <div>
              <h2>Was wird gemessen?</h2>
              <p>
                {{ sdg.textIndicators }} Die Deutsche Nachhaltigkeitsstrategie umfasst {{ numberToStringNominativ(sdg.n.dns) }} Indikator{{ sdg.n.dns > 1 ? 'en' : '' }} und 2030Watch erweiterter Indikatorenkatalog umfasst {{ numberToStringNominativ(sdg.n.alt) }} Indikator{{ sdg.n.okf > 1 ? 'en' : '' }}.
              </p>
            </div>
            <div class="sdg-process">
              <div class="sdg-process-wrapper">
                <VisProgress :sdg="sdg" :vMarkerLabels="false" :compact="false" :vMarkerLabelsNames="true" :invert="false" :vTicks="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="indicator-vis">
        <section class="indicators">
          <small class="caption">Indikatorenkatalog</small>
          <section>
            <ul class="indicator-list" ref="indicatorListDNS">
              <li ref="labelDNS"><h3 class="dns">DNS</h3></li>
              <li
                ref="indicator"
                v-for="(indicator, n) in indi_dns">
                <VisIndicator :i="indicator" :color="222" :colorScale="true" /></li>
              <li class="legend" ref="indicatorLegend">
                <ul>
                  <li title="Dieser Indikator legt ein neues Thema vor, das noch nicht in der Deutschen Nachhaltigkeitsstrategie beinhaltet ist.">
                    <span class="label">
                      <i class="icon-plus-circled" /> Neues Thema
                    </span>
                  </li>
                  <li title="Der Indikator misst keine Veränderung in Bezug auf Nachhaltigkeit und misst die Wirkung einer Maßnahme nur unzureichend.">
                    <span class="label">
                      <i class="icon-cancel-circled" /> Ungeeignet
                    </span>
                  </li>
                  <li title="Dieser Indikator ist ein offizieller Indikator der deutschen Nachhaltigkeitsstrategie und wird von 2030Watch ohne Veränderungen übernommen.">
                    <span class="label">
                      <i class="icon-ok-circled" /> Übernommen
                    </span>
                  </li>
                  <li title="Dieser Indikator hat keinen genau definierten Zielwert und erlaubt es daher nicht, den Fortschritt bis 2030 zu bewerten.">
                    <span class="label">
                      <i class="icon-minus-circled" /> Nicht bewertbarer Zielwert
                    </span>
                  </li>
                  <li title="Dieser Zielwert ist unzureichend und 2030Watch schlägt einen neuen Zielwert vor.">
                    <span class="label">
                      <i class="icon-cog-circled" /> Modifizierter Zielwert
                    </span>
                  </li>
                  <li title="Für diesen Indikator kann man auf Grund fehlender Daten den Ziel- oder Ausgangswert nicht berechnen.">
                    <span class="label">
                      <i class="icon-help-circled" /> Nicht berechenbar
                    </span>
                  </li>
                  <li title="Dieser Indikator misst internationale Auswirkungen durch Deutschland und zeigt somit die Verantwortung Deutschlands für nachhaltige Rahmenbedingungen in anderen Ländern.">
                    <span class="label">
                      <i class="icon-star-circled" /> Internationale Auswirkungen
                    </span>
                  </li>
                  <!-- <li class="label">
                    Mehr zu unserer Methode
                    <nuxt-link to="/projekt">
                      hier
                    </nuxt-link>
                  </li> -->
                </ul>
              </li>
            </ul>
          </section>
          <section class="indicator-lines">
            <svg ref="indicatorLines">
              <line
                v-for="indicator in linesNormal"
                :x1="indicator"
                :x2="indicator"
                y1="0%"
                y2="100%" />
              <path
                v-for="indicator in linesMod"
                stroke-dasharray="5, 5"
                :d="indicator" />
            </svg>
          </section>
          <section>
            <ul class="indicator-list" ref="indicatorListOKF">
              <li ref="labelOKF"><h3 class="okf">2030Watch</h3></li>
              <li
                v-for="(indicator, n) in indi_dns_keep">
                <VisIndicator :i="indicator" :color="222" :colorScale="true" /></li>
              <li
                v-for="(indicator, n) in sdg.ind.okf">
                <VisIndicator :i="indicator" :color="222" :colorScale="true" /></li>
            </ul>
          </section>
        </section>
      </div>
      <div class="wrapper">
        <div class="indicator-overview columns columns-rows">
          <section class="description description-dns columns columns-gutter">
            <div>
              <hgroup>
                <h3 class="dns">
                  Deutsche Nachhaltigkeitsstrategie Indikatorenkatalog
                </h3>
              </hgroup>
              <p v-if="sdg.summaryDns === 'coming soon' || sdg.summaryDns === ''">
                coming soon
              </p>
              <p v-else>
                {{ sdg.summaryDns }}
              </p>
              <span class="process dns" v-html="format(dns)" />
            </div>
            <div>
              <hgroup>
                <h3 class="okf">
                  Alternativer Indikatorenkatalog
                </h3>
              </hgroup>
              <p v-if="sdg.summary2030 === 'coming soon' || sdg.summary2030 === ''">
                coming soon
              </p>
              <p v-else>
                {{ sdg.summary2030 }}
              </p>
              <span class="process okf" v-html="format(okf)" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisLeiste from '~/components/VisLeiste.vue'
  import VisProgress from '~/components/VisProgress.vue'
  import VisIndicator from '~/components/VisIndicator.vue'
  import format from '~/assets/js/format.js'
  import _ from 'lodash'

  export default {
    validate ({ params, store }) {
      return store.getters.sdgsSlugs.includes(params.sdg)
    },
    head () {
      return {
        title: this.sdg.labelShort || 'SDG',
        titleTemplate: '%s | 2030Watch'
      }
    },
    data: function () {
      return {
        indicatorWidth: 150, // css default value
        indicatorLinesHeight: 200, // css default value,
        indicatorMargin: 10
      }
    },
    mounted () {
      this.indicatorWidth = this.$refs.indicator[0].clientWidth
      this.indicatorLinesHeight = this.$refs.indicatorLines.clientHeight
      this.$refs.indicatorLegend.style.marginLeft = this.indicatorWidth + this.indicatorMargin + 'px'
      const marginLeft = Math.max(this.$refs.labelOKF.clientWidth, this.$refs.labelDNS.clientWidth)
      this.$refs.indicatorLines.style.marginLeft = marginLeft + this.indicatorMargin * 3 + 'px'
      this.$refs.labelOKF.style.width = marginLeft + 'px'
      this.$refs.labelDNS.style.width = marginLeft + 'px'
    },
    components: {
      VisLeiste,
      VisProgress,
      VisIndicator
    },
    methods: {
      format: format,
      numberToStringNominativ: function (n) {
        if (n === 0) {
          return 'keinen'
        } else if (n === 1) {
          return 'einen'
        } else if (n === 2) {
          return 'zwei'
        } else if (n === 3) {
          return 'drei'
        } else if (n === 4) {
          return 'vier'
        } else if (n === 5) {
          return 'fünf'
        } else {
          return n
        }
      },
      numberToStringGenitiv: function (n) {
        if (n === 0) {
          return 'null'
        } else if (n === 1) {
          return 'eine'
        } else if (n === 2) {
          return 'zwei'
        } else if (n === 3) {
          return 'drei'
        } else if (n === 4) {
          return 'vier'
        } else if (n === 5) {
          return 'fünf'
        } else {
          return n
        }
      }
    },
    computed: {
      ...mapState([
        'sdgs'
      ]),
      sdg () {
        return this.sdgs[this.$route.params.sdg]
      },
      image () {
        return require('~/assets/img/sdg/E_SDG_goals_icons-individual-rgb-' + ('00' + this.sdg.number).substr(-2) + '.png')
      },
      indi_dns_keep: function () {
        return _.sortBy(_.filter(this.sdg.ind.dns, 'keep'), ['modTarget', 'uncalculable', 'id'])
      },
      indi_dns_not_keep: function () {
        return _.sortBy(_.filter(this.sdg.ind.dns, ['keep', false]), ['id'])
      },
      indi_dns: function () { // Keep sorting order
        return _.concat(this.indi_dns_keep, this.indi_dns_not_keep)
      },
      dns: function () {
        return this.sdg.values.dns
      },
      okf: function () {
        return this.sdg.values.okf
      },
      widthIndicator: function () {
        const amount = this.sdg.n.udns + this.sdg.n.uokf
        return 100 / amount
      },
      linesNormal: function () {
        const indicators = _.filter(this.sdg.ind.dns, indicator => {
          return indicator.keep
        })
        return _.map(indicators, (indicator, n) => {
          return (n + 0.5) * this.indicatorWidth + (n * this.indicatorMargin * 2) + 'px'
        })
      },
      linesMod: function () {
        const offset = this.linesNormal.length
        const indicators = _.filter(this.sdg.ind.dns, indicator => {
          return indicator.modTarget
        })
        return _.map(indicators, (indicator, n) => {
          const position = _.findIndex(this.sdg.ind.okf, { 'id': indicator.altIndicator })
          const x1 = (n + offset + 0.5) * this.indicatorWidth + ((n + offset) * this.indicatorMargin * 2)
          const x2 = (n + offset + position + 0.5) * this.indicatorWidth + ((n + offset + position) * this.indicatorMargin * 2)
          const y1 = 0
          const y2 = this.indicatorLinesHeight
          return `M${x1} ${y1} C${x1} ${y2 / 3}, ${x2}, ${y2 / 3 * 2}, ${x2} ${y2}`
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  .inpage-header {
    padding-bottom: $spacing;
  }

  .sdg-image {
    text-align: center;

    img {
      max-height: 200px;
    }
  }

  .sdg-process {
    display: flex;
    align-items: center;
    justify-content: center;

    .sdg-process-wrapper {
      width: 70%;
        min-width: 400px;
        max-height: 5rem;

      svg {
        width: 100%;
        heright: 100%;
      }
    }
  }

  .indicator-overview {
    margin: 4rem 0;
    flex-direction: column;

    & > section {
      width: 100%;
    }
  }

  .indicator-vis {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, .02);
    box-shadow: inset 5px 5px 20px 0px rgba(116, 116, 116, 0.25);
    overflow: scroll;
    max-width: 100%;
  }

  .indicators {
    margin: 0 auto;

    section {
      padding: $spacing / 2 $spacing;
    }

    .legend i {
      color: $color-mute;
    }

    .caption {
      padding-left: calc(#{$spacing} + 10px);
    }

    .indicator-list {
      display: flex;

      li {
        margin: 0 10px; // 10px is fixed in js!
      }
    }

    .indicator-lines {
      svg {
        width: 100%;
        height: 100px;
        margin: 0 10px; // 10px is fixed in js!

        line, path {
          stroke: #aaa;
          fill: none;
        }
      }
    }
  }

  .description {
    display: flex;
    height: auto;
    flex-direction: rows;
    justify-content: space-between;
    padding: 0;

    div {
      display: flex;
      flex-direction: column;
    }

    p {
      flex: 1;
    }

    .process {
      display: block;
      padding: 2rem;
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
    }

    & > section {
      padding: 0 !important;
    }
  }
</style>
