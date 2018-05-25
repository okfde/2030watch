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
      <div class="wrapper description">
        <h4>Beschreibung</h4>
        <p>{{ indicator.txtdescription }}</p>
        <h4>2030Watch-Kategorie</h4>
        <p>{{ indicator.txtcategory }}</p>
        <h4>Zielwert</h4>
        <p>{{ indicator.txttarget }}</p>
      </div>
      <div class="wrapper">
        <div class="box viz" v-if="hasCountries && countries.length">
          <h2>Wo steht Deutschland im internationalen Vergleich?</h2>
          <div class="viz-title">{{ indicator.label }} (in {{ indicator.unit }}), {{ indicator['currentYear'] }}</div>
          <VisBarChart :values="countries" />
          <div class="viz-dl">
             <a class="btn__download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'"><i class="icon-download"></i>Daten herunterladen</a>
          </div>
        </div>
        <div class="box viz" v-if="hasTimeline && timeline.length">
          <h2>Wie hat sich der Indikator in Deutschland über die Zeit verändert?</h2>
          <div class="viz-title">{{ indicator.label }} (in {{ indicator.unit }})</div>
          <VisLineChart :values="timeline" />
          <div class="viz-dl">
             <a class="btn__download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'"><i class="icon-download"></i>Daten herunterladen</a>
          </div>
        </div>
      </div>
      <div class="wrapper columns columns-gutter">
        <div class="wrapper description">
          <h4>Indikator-Details</h4>
          <table class="box">
            <tbody>
              <tr>
                <td class="title">Ziel</td><td>{{ indicator['goal'] }}</td>
              </tr>
              <tr>
                <td class="title">Zielwert</td>
                <td v-html="format(indicator['target'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td class="title">Aktueller Wert ({{ indicator['currentYear'] }})</td><td v-html="format(indicator['current'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td class="title">Startwert ({{ indicator['startYear'] }})</td>
                <td v-html="format(indicator['start'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td class="title">Begründung</td><td>{{ indicator['reason'] }}</td>
              </tr>
              <tr>
                <td class="title">Lizenz</td><td>{{ indicator['license'] }}</td>
              </tr>
            </tbody>
          </table>
          <h4 class="caption">Diesen Indikator teilen</h4><i class="icon-link"></i>
          <input type="text" :value="link">
        </div>
        <div class="wrapper description">
          <h4>Datenpate</h4>
          <img src="http://via.placeholder.com/500x360" alt="Blogpost Vorschaubild">
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
        titleTemplate: '%s | 2030Watch'
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
  @import "~@/assets/style/variables";

  .progress {
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
    max-height: 150px;
    max-width: 150px;
    }
  }

  .description {

    h4 {
    color: #222;
    padding-bottom: $spacing / 4;
  }

    p, table, img {
      padding: 0 0 $spacing 0;
    }

    table {
      padding: $spacing;
      margin-bottom: $spacing;

      td {
        padding: 1em 0;
        border-bottom: 1px solid lighten($color-mute,20%);

        &.title {
          font-weight: 600;
        }
      }
    }

    h4.caption, i {
      display: inline;
    }

    i {
      margin-left: 10px;
    }

    input {
      padding: $spacing / 2; 
      margin-top: $spacing / 2; 
      width: 300px;
      font-size: 0.7em;
      background-color: #f9f9f9;
      border:1px solid $color-mute;
    }
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
