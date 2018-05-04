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
        <h1>{{ sdg.labelShort }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>{{ sdg.textIntro }}</p>
          </div>
          <div>
            <VisProgress :sdg="sdg" />
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <VisLeiste :current="sdg.slug" />
      <div class="wrapper">
        <h2>Daten und Indikatoren zur Forschrittsberechnung</h2>
        <p>{{ sdg.textIndicators }} Die Deutsche Nachhaltigkeitsstrategie umfasst {{ numberToStringNominativ(sdg.n.dns) }} Indikator{{ sdg.n.dns > 1 ? 'en' : '' }} und 2030Watch schlägt {{ numberToStringNominativ(sdg.n.okf) }} Alternativ-Indikator{{ sdg.n.okf > 1 ? 'en' : '' }} vor.</p>
        <div class="indicator-overview columns columns-gutter columns-rows">
          <div class="description">
            <section class="description-dns">
              <small class="caption">Offizieller Indikatorenkatalog</small>
              <h3>Deutsche Nachhaltigkeitsstrategie (DNS)</h3>
              <p>Diese{{ sdg.n.dns === 1 ? 'r' : '' }} {{ numberToStringGenitiv(sdg.n.dns) }} Indikator{{ sdg.n.dns === 1 ? '' : 'en' }} spiegel{{ sdg.n.dns === 1 ? 't' : 'n' }} laut der Bundesregierung den Fortschritt von »{{ sdg.labelShort }}« wider. Auf dieser Grundlage wäre in 2016 dieses Nachhaltigkeitsziel erreicht zu</p>
              <h3>{{ dns.toFixed(0) }}&#8239;%</h3>
            </section>
            <section class="description-okf">
              <small class="caption">Alternativer und komplementärer</small>
              <h3>Indikatorenkatalog 2030Watch (OKF)</h3>
              <p>2030Watch schlägt hingegen eine erweiterte Indikatoren-Liste vor, die {{ numberToStringNominativ(sdg.n.udns) }} offizielle{{ sdg.n.udns <= 1 ? 'n' : '' }} Indikator{{ sdg.n.udns <= 1 ? '' : 'en' }} übernimmt, {{ numberToStringNominativ(sdg.n.baI) }} streicht, {{ numberToStringNominativ(sdg.n.moT) }} modifiziert sowie {{ sdg.n.okf }} weitere{{ sdg.n.okf <= 1 ? 'n' : '' }} hinzufügt. Aus diesem alternativen Indikatorenset würde sich folgender Fortschritt bei »{{ sdg.labelShort }}« berechnen:</p>
              <h3>{{ okf.toFixed(0) }}&#8239;%</h3>
            </section>
          </div>
          <div class="indicators">
            <section>
              <ul class="indicator-list">
                <li v-for="(indicator, slug) in sdg.ind.dns"><VisIndicator :i="indicator" /></li>
              </ul>
            </section>
            <section>
              <span>Lines</span>
            </section>
            <section>
              <ul class="indicator-list">
                <li v-for="(indicator, slug) in sdg.ind.dns" v-if="!indicator.badIndicator && !indicator.modTarget"><VisIndicator :i="indicator" /></li>
                <li v-for="(indicator, slug) in sdg.ind.okf"><VisIndicator :i="indicator" /></li>
              </ul>
            </section>
          </div>
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

  export default {
    validate ({ params, store }) {
      return store.getters.sdgsSlugs.includes(params.sdg)
    },
    head () {
      return {
        title: this.sdg.labelShort || 'all',
        titleTemplate: '2030 Watch - %s'
      }
    },
    mounted () {
    },
    components: {
      VisLeiste,
      VisProgress,
      VisIndicator
    },
    methods: {
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
      dns: function () {
        return this.sdg.values.dns
      },
      okf: function () {
        return this.sdg.values.okf
      }
    }
  }
</script>

<style lang="scss">
  .indicator-overview {
    margin: 4rem 0;
  }

  .indicator-list {
    display: flex;

    li {
      margin: 0 0.5rem;
    }
  }

  .description {
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;

    & > section {
      padding: 0 !important;
    }
  }

  .description-okf {
    align-self: flex-end;
  }
</style>
