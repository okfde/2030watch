<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="bread-spacer">/</span><nuxt-link :to="'../sdg/' + indicator.sdg.slug">{{ indicator.sdg.label }}</nuxt-link><span class="bread-spacer">/</span><span class="bread-current">{{ indicator.label }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ indicator.sdg.sdg }} – {{ indicator.sdg.label }}</small>
        <h1>{{ indicator.label }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>{{ indicator.txtintroduction }}</p>
            <p>{{ indicator.author === 'dns' ? 'Offizieller Indikator' : '2030 Indikator' }} <span v-if="category">({{ category }})</span></p>
          </div>
          <div class="progress">
            <VisPieChart :value="indicator.progress" fill="ffffff" :background="indicator.sdg.color" />
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        <h2>Wie geht 2030Watch mit diesem Indikator um?</h2>
      </div>
      <div class="wrapper columns columns-gutter">
        <section>
          <small class="caption">Beschreibung</small>
          <p>{{ indicator.txtdescription }}</p>
          <small class="caption">Zielwert</small>
          <p>{{ indicator.txttarget }}</p>
          <small class="caption">Kategorie</small>
          <p>{{ indicator.txtcategory }}</p>
        </section>
        <section>
          <small class="caption">Indikator-Details</small>
          <table>
            <tbody>
              <tr>
                <td>Ziel</td><td>{{ indicator['goal'] }}</td>
              </tr>
              <tr>
                <td>Zielwert</td>
                <td v-html="format(indicator['target'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td>Aktueller Wert ({{ indicator['currentYear'] }})</td><td v-html="format(indicator['current'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td>Startwert ({{ indicator['startYear'] }})</td>
                <td v-html="format(indicator['start'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td>Begründung</td><td>{{ indicator['reason'] }}</td>
              </tr>
              <tr>
                <td>Lizenz</td><td>{{ indicator['license'] }}</td>
              </tr>
            </tbody>
          </table>
          <h3>Datenpate</h3>
          <h3>Teilen</h3>
          <span>{{ link }}</span>
        </section>
      </div>
      <div class="wrapper">
        <div class="box viz" v-if="hasCountries && countries.length">
          <h2>Wo steht Deutschland im internationalen Vergleich?</h2>
          <div class="viz-title">{{ indicator.label }} in {{ indicator.unit }}, {{ indicator['currentYear'] }}</div>
          <VisBarChart :values="countries" />
          <div class="viz-dl">
             <a class="btn__download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'"><i class="icon-download"></i>Download data</a>
          </div>
        </div>
        <div class="box viz" v-if="hasTimeline && timeline.length">
          <h2>Wie hat sich der Indikator in Deutschland über die Zeit verändert?</h2>
          <div class="viz-title">{{ indicator.label }} in {{ indicator.unit }}</div>
          <VisLineChart :values="timeline" />
          <div class="viz-dl">
             <a class="btn__download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'"><i class="icon-download"></i>Download data</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisPieChart from '~/components/VisPieChart.vue'
  import VisBarChart from '~/components/VisBarChart.vue'
  import VisLineChart from '~/components/VisLineChart.vue'
  import format from '~/assets/js/format.js'

  export default {
    validate ({ params, store }) {
      return store.getters.indicatorsSlugs.includes(params.indicator)
    },
    head () {
      return {
        title: this.indicator.label || 'Indicator',
        titleTemplate: '2030Watch - %s'
      }
    },
    methods: {
      format: format,
      buildCSV: function (key, arr) {
        const rows = [[key, 'value'], ...arr]
        let csvContent = 'data:text/csv;charset=utf-8,'
        rows.forEach(row => {
          csvContent += row.join(',') + '\r\n'
        })
        return encodeURI(csvContent)
      }
    },
    data: function () {
      return {
        link: ''
      }
    },
    mounted: function () {
      this.link = window.location.origin + this.$route.fullPath
    },
    computed: {
      ...mapState([
        'data'
      ]),
      indicator () {
        return this.data[this.$route.params.indicator]
      },
      hasCountries () {
        return typeof this.indicator.countries !== 'undefined'
      },
      countries () {
        const keys = Object.keys(this.indicator.countries)
        const values = keys.slice(0, 20).map(key => {
          return [key, this.indicator.countries[key]]
        })
        return values.filter(value => {
          return value[1] !== null
        })
      },
      timeline () {
        const years = Object.keys(this.indicator.timeline)
        const values = years.map(key => {
          return [key, this.indicator.timeline[key]]
        })
        return values.filter(value => {
          return value[1] !== null
        })
      },
      hasTimeline () {
        return typeof this.indicator.timeline !== 'undefined'
      },
      category () {
        const { indicator } = this
        const categories = []
        if (indicator.author === 'okf') { categories.push('neuer Indikator') }
        if (indicator.badIndicator) { categories.push('ungeeigneter Indikator') }
        if (indicator.keep) { categories.push('übernommener Indikator') }
        if (indicator.badTarget) { categories.push('aussageloser Zielwert') }
        if (indicator.modTarget) { categories.push('modifizierter Zielwert') }
        if (indicator.uncalculable) { categories.push('nicht berechenbar') }
        if (indicator.spill) { categories.push('Spillover') }
        return categories.length ? categories.join(', ') : false
      },
      countriesDownload () {
        return this.buildCSV('country', this.countries)
      },
      timelineDownload () {
        return this.buildCSV('year', this.timeline)
      }
    },
    components: {
      VisPieChart,
      VisBarChart,
      VisLineChart
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/base";

  .progress > * {
    max-height: 150px;
    max-width: 150px;
  }

  .viz {
    margin: 3em 0;

    &:first-of-type {
      margin-top: 1em;
    }

    .viz-title {
      text-align: center;
      padding: $spacing / 2;
      font-weight: 600;
    }

    .viz-dl {
      text-align: right;
    }
  }
</style>
