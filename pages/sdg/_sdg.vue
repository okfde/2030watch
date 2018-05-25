<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="bread-spacer">/</span><span class="bread-current">{{ sdg.labelShort }}</span>
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
          <div class="sdg-process">
            <div class="sdg-process-wrapper">
              <VisProgress :sdg="sdg" :vMarkerLabels="false" :compact="false" :vMarkerLabelsNames="true" :invert="false" :vTicks="false" />
            </div>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <VisLeiste :current="sdg.slug" />
      <div class="wrapper">
        <h2>Daten und Indikatoren zur Forschrittsberechnung</h2>
        <p>{{ sdg.textIndicators }} Die Deutsche Nachhaltigkeitsstrategie umfasst {{ numberToStringNominativ(sdg.n.dns) }} Indikator{{ sdg.n.dns > 1 ? 'en' : '' }} und 2030Watch schlägt {{ numberToStringNominativ(sdg.n.okf) }} Alternativ-Indikator{{ sdg.n.okf > 1 ? 'en' : '' }} vor.</p>
        <div class="indicator-overview columns columns-rows">
          <section class="description description-dns columns columns-gutter">
            <div>
              <hgroup>
                <h3 class="dns">Deutsche Nachhaltigkeitsstrategie (DNS)</h3>
              </hgroup>
              <p>Diese{{ sdg.n.dns === 1 ? 'r' : '' }} {{ numberToStringGenitiv(sdg.n.dns) }} Indikator{{ sdg.n.dns === 1 ? '' : 'en' }} spiegel{{ sdg.n.dns === 1 ? 't' : 'n' }} laut der Bundesregierung den Fortschritt von »{{ sdg.labelShort }}« wider. Auf dieser Grundlage wäre in 2016 dieses Nachhaltigkeitsziel erreicht zu</p>
              <span class="process dns" v-html="format(dns)" />
            </div>
            <div>
              <hgroup>
                <h3 class="okf">2030Watch</h3>
              </hgroup>
              <p>2030 Watch schlägt hingegen eine erweiterte Indikatoren-Liste vor, die {{ numberToStringNominativ(sdg.n.udns) }} offizielle{{ sdg.n.udns <= 1 ? 'n' : '' }} Indikator{{ sdg.n.udns <= 1 ? '' : 'en' }} übernimmt, {{ numberToStringNominativ(sdg.n.baI) }} streicht, {{ numberToStringNominativ(sdg.n.moT) }} modifiziert sowie {{ sdg.n.okf }} weitere{{ sdg.n.okf <= 1 ? 'n' : '' }} hinzufügt. Aus diesem alternativen Indikatorenset würde sich folgender Fortschritt bei »{{ sdg.labelShort }}« berechnen:</p>
              <span class="process okf" v-html="format(okf)" />
            </div>
          </section>
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
                  <li><span class="label"><i class="icon-plus-circled" /> neuer Indikator</span></li>
                  <li><span class="label"><i class="icon-cancel-circled" /> ungeeigneter Indikator</span></li>
                  <li><span class="label"><i class="icon-ok-circled" /> übernommener Indikator</span></li>
                  <li><span class="label"><i class="icon-minus-circled" /> aussageloser Zielwert</span></li>
                  <li><span class="label"><i class="icon-cog-circled" /> modifizierter Zielwert</span></li>
                  <li><span class="label"><i class="icon-help-circled" /> nicht berechenbar</span></li>
                  <li><span class="label"><i class="icon-star-circled" /> Spillover</span></li>
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
      console.log(marginLeft)
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
          const d = `M${x1} ${y1} C${x1} ${y2 / 3}, ${x2}, ${y2 / 3 * 2}, ${x2} ${y2}`
          return d
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  .inpage-header {
    padding-bottom: $spacing * 4;
  }

  .sdg-process {
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: none;

    .sdg-process-wrapper {
      width: 80%;
      padding: 20px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);

      svg {
        width: 90%;
        max-height: 5rem;
        margin: 1rem 5%;
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
