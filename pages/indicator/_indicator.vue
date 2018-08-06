<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/#keyfindings">Übersicht</nuxt-link>
        <span class="bread-spacer">/</span>
        <nuxt-link :to="'/sdg/' + indicator.sdg.slug"> SDG {{ indicator.sdg.sdg}} – {{ indicator.sdg.label }} </nuxt-link><span class="bread-spacer">/</span><span class="bread-current"> {{ indicator.label }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ indicator.sdg.sdg }} – {{ indicator.sdg.label }}</small>
        <h1>{{ indicator.label }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>{{ indicator.txtintroduction }}</p>
          </div>
          <div></div>
        </section>

        <div class="indicator-categories">
          <p>{{ indicator.author === 'dns' ? 'Offizieller Indikator' : '2030Watch Indikator' }}
            <span v-if="category">
               <span v-if="indicator.newIndicator" title="Neuer Indikator" class="indicator-icon">
                 <i class="icon-plus-squared" />
               </span>
               <span v-if="indicator.modTarget" title="Modifizierter Zielwert" class="indicator-icon">
                 <i class="icon-pencil-squared" />
               </span>
               <span v-if="indicator.uncalculable" title="Nicht berechenbar" class="indicator-icon">
                 <i class="icon-minus-squared" />
               </span>
            </span>
          </p>
        </div>
      </div>
    </header>

    <div class="content">
      <VisLeiste :current="indicator.sdg.slug" />

      <div class="indicator-navigation">
        <span class="navigation-backwards">
          <span v-if="getCurrentIndicatorCounter !== 0">
            <nuxt-link :to="'/indicator/' + this.indiNav[getCurrentIndicatorCounter - 1].slug"
             :style="{ 'color': '#' + this.indiNav[getCurrentIndicatorCounter - 1].color }"
             :title="'SDG ' + this.indiNav[getCurrentIndicatorCounter - 1].sdg + ' – '
              + this.indiNav[getCurrentIndicatorCounter - 1].label + ' – '
              + (this.indiNav[getCurrentIndicatorCounter - 1].author === 'dns' ? 'Offizieller Indikator' : '2030Watch Indikator') "
            >
              <span class="vis-dl">
                <i class="icon-angle-left" />
                <span>
                  {{ this.indiNav[getCurrentIndicatorCounter - 1].label }}
                </span>
              </span>
            </nuxt-link>
          </span>
        </span>
        <span class="navigation-forwards">
          <span v-if="getCurrentIndicatorCounter !== this.indiNav.length - 1">
            <nuxt-link :to="'/indicator/' + this.indiNav[getCurrentIndicatorCounter + 1].slug"
              :style="{ 'color': '#' + this.indiNav[getCurrentIndicatorCounter + 1].color }"
              :title="'SDG ' + this.indiNav[getCurrentIndicatorCounter + 1].sdg + ' – '
                + this.indiNav[getCurrentIndicatorCounter + 1].label + ' – '
                + (this.indiNav[getCurrentIndicatorCounter + 1].author === 'dns' ? 'Offizieller Indikator' : '2030Watch Indikator') "
            >
              <span class="vis-dl">
                <span>
                  {{ this.indiNav[getCurrentIndicatorCounter + 1].label }}
                </span>
                <i class="icon-angle-right" />
              </span>
            </nuxt-link>
          </span>
        </span>
      </div>

      <div class="wrapper">
        <div class="box vis" v-if="hasCountries && countries.length">
          <h2>Wie steht Deutschland im Vergleich zu EU/OECD Ländern?</h2>

          <bar-chart :height="200" :data="barChartData" :options="barChartOptions"></bar-chart>

          <div class="vis-dl vis-data-source">
            Datenquelle:
            <a :href="indicator.sourcelink">
              {{ indicator['data source'] }}
            </a>
          </div>

          <div class="vis-dl">
             <a class="btn btn-download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'">
               <i class="icon-download" /> Daten herunterladen
             </a>
          </div>

          <!-- TODO -->
          <br />
          <br />
          <br />

          <h5 class="vis-title">{{ indicator.label }} (in {{ indicator.unit }}), {{ indicator['currentYear'] }}</h5>
          <VisBarChart :values="countries" />
          <div class="vis-dl">
             <a class="btn btn-download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'"><i class="icon-download" /> Daten herunterladen</a>
          </div>
        </div>
        <div class="box vis" v-if="hasTimeline && timeline.length">
          <h2>Wie hat sich der Indikator in Deutschland über die Zeit verändert?</h2>

          <line-chart :height="200" :data="lineChartData" :options="lineChartOptions"></line-chart>

          <div class="vis-dl vis-data-source">
            Datenquelle:
            <a :href="indicator.sourcelink">
              {{ indicator['data source'] }}
            </a>
          </div>

          <div class="vis-dl">
             <a class="btn btn-download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'">
               <i class="icon-download" />
               Daten herunterladen
             </a>
          </div>

          <!-- TODO -->
          <br />
          <br />
          <br />


          <h5 class="vis-title">{{ indicator.label }} (in {{ indicator.unit }})</h5>
          <VisLineChart :values="timeline" />
          <div class="vis-dl">
             <a class="btn btn-download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'"><i class="icon-download" /> Daten herunterladen</a>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <h2>
          Weitere Informationen zu diesem Indikator
        </h2>
      </div>
      <div class="wrapper description">
        <h4>Beschreibung</h4>
        <p>{{ indicator.txtdescription }}</p>
        <h4>Kategorie</h4>
        <p>{{ indicator.txtcategory }}</p>
        <h4>Ausgangswert (Fortschrittsberechnung)</h4>
        <p>{{ indicator.txtstartingvalue }}</p>
        <h4>Zielwert</h4>
        <p>{{ indicator.txttarget }}</p>
      </div>

      <div class="wrapper columns columns-gutter">
        <div class="description">
          <h4>Methodik</h4>
          <nuxt-link to="/projekt#methode">Hier</nuxt-link> erfährst du mehr darüber wie Indikatoren berechnet und in Kategorien eingeteilt werden.
        </div>
      </div>

      <div class="wrapper columns columns-gutter">
        <div class="description">
          <h4>Indikator-Details</h4>
          <table class="box">
            <tbody>
              <tr>
                <td class="title">Zielwert/SOLL</td>
                <td v-html="format(indicator['target'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td class="title">Aktueller Wert/IST ({{ indicator['currentYear'] }})</td><td v-html="format(indicator['current'], 1, indicator['unit'])" />
              </tr>
              <tr>
                <td class="title">Ausgangswert Fortschrittsberechnung ({{ indicator['startYear'] }})</td>
                <td v-html="format(indicator['start'], 1, indicator['unit'])" />
              </tr>
              <tr v-if="indicator['license']">
                <td class="title">Lizenz</td><td>{{ indicator['license'] }}</td>
              </tr>
              <tr v-if="indicator['indicator source']">
                <td class="title">Indikatorquelle</td><td>{{ indicator['indicator source'] || '—'  }}</td>
              </tr>
              <tr v-if="indicator['data source']">
                <td class="title">Datenquelle</td>
                <td>
                  <a :href="indicator['sourcelink']" target="_blank">
                  {{ indicator['data source'] }}
                  </a>
                </td>
              </tr>
              <tr v-if="indicator['pate']">
                <td class="title">Datenpate</td><td>{{ indicator['pate'] }}</td>
              </tr>
            </tbody>
          </table>
          <h4 class="caption">Diesen Indikator teilen</h4>
          <a title="Bei Facebook teilen" target="_blank" :href="'https://facebook.com/sharer.php?u=' + encodeURIComponent(link)"><i class="icon-facebook-squared" /></a>
          <a title="Bei Twitter teilen" target="_blank" :href="'https://twitter.com/share?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(indicator.label)"><i class="icon-twitter" /></a>
          <a title="Per E-Mail teilen" :href="'mailto:?subject=' + encodeURIComponent(indicator.label) + '&body=' + encodeURIComponent(link)"><i class="icon-mail" /></a>
          <input type="text" :value="link" />
        </div>

        <div v-if="!indicator['pate']" class="description">
          <h4>Werde Datenpate für diesen Indikator</h4>
          <div>
            Ziel von 2030Watch ist es, für jeden Indikator einen Datenpaten zu haben.
            Datenpaten sind Fachorganisationen, die einen Indikator "adoptieren", den sie für
            ein Unterziel für sinnvoll halten. Sie legen den Zielwert fest, der bis 2030
            erreicht werden sollte. Darüber hinaus unterstützen sie das Projekt in der
            Datenbereitstellung. Bei Interesse, Datenpate zu werden, wende dich bitte an
            <a href="mailto:2030-watch@okfn.de">2030-watch@okfn.de</a>.
          </div>
        </div>

        <div v-if="indicator['pate'] && indicator['pateUrl'] && indicator['pateLogo']" class="description">
          <h4>Datenpate</h4>
          <div class="pate-logo">
            <a :href="indicator['pateUrl']" target="_blank">
              <img :src="require(`@/static/img/datenpaten/${indicator['pateLogo']}`)">
            </a>
          </div>
          <div v-if="indicator['pateText']">
            {{ indicator['pateText'] }}
          </div>
          <div v-if="indicator['pateContact'] && indicator['pateMail']">
            Kontaktperson:
            <a :href="'mailto:' + indicator['pateMail']">
              {{ indicator['pateContact'] }}
            </a>
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
  import VisLeiste from '~/components/VisLeiste.vue'
  import _ from 'lodash'
  import BarChart from '~/components/BarChart.js'
  import LineChart from '~/components/LineChart.js'

  export default {
    validate ({ params, store }) {
      return store.getters.indicatorsSlugs.includes(params.indicator)
    },
    head () {
      return {
        title: this.indicator.label || 'Indicator',
        titleTemplate: '%s | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: this.indicator.label || 'Indicator' }
        ]
      }
    },
    methods: {
      format,
      buildCSV: function (arr) {
        const rows = [...arr]
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
      // TODO check for better way to use router base
      const base = this.$router.options.base === '/' ? '' : this.$router.options.base
      this.link = window.location.origin + base + this.$route.fullPath
    },
    computed: {
      ...mapState([
        'data', 'indiNav'
      ]),
      getCurrentIndicatorCounter () {
        return _.findIndex(this.indiNav, {id: this.indicator.id, author: this.indicator.author})
      },
      indicator () {
        return this.data[this.$route.params.indicator]
      },
      hasCountries () {
        return typeof this.indicator.countries !== 'undefined'
      },
      metadata () {
        return [
          ['metadata', 'value'],
          // ['title', this.indicator.title],
          ['datasource', this.indicator['data source']],
          ['sourcelink', this.indicator.sourcelink],
          ['license', this.indicator.license]
        ]
      },
      barChartData () {
        return {
          labels: this.getCountries,
          datasets: [
            {
              label: this.indicator.unitShort,
              backgroundColor: '#3700B3',
              // strokeColor: 'rgba(220,220,220,1)',
              // fillColor: 'rgba(220,220,220,0.5)',
              data: this.getValues
            }
          ]
        }
      },
      barChartOptions () {
        return {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            displayColors: false,
            cornerRadius: 0,
            callbacks: {
              label: function (tooltipItems, data) {
                return `${tooltipItems.yLabel} ${data.datasets[tooltipItems.datasetIndex].label}`
              }
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: `${this.indicator.label} in ${this.indicator.unit} (${this.indicator['currentYear']})`
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Länder'
              },
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      },

      lineChartData () {
        return {
          labels: this.getYears,
          datasets: [
            {
              label: this.indicator.unitShort,
              fill: false,
              lineTension: 0,
              backgroundColor: '#3700B3',
              // strokeColor: 'rgba(220,220,220,1)',
              // fillColor: 'rgba(220,220,220,0.5)',
              data: this.getValuesForGermany
            }
          ]
        }
      },

      lineChartOptions () {
        return {
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            displayColors: false,
            cornerRadius: 0,
            callbacks: {
              label: function (tooltipItems, data) {
                return `${tooltipItems.yLabel} ${data.datasets[tooltipItems.datasetIndex].label}`
              }
            }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: `${this.indicator.label} in ${this.indicator.unit}`
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Länder'
              },
              ticks: {
                autoSkip: false
              }
            }]
          }
        }
      },

      getCountries () {
        const keys = Object.keys(this.indicator.countries)
        let countries = []
        keys.slice(0, keys.length - 1).map(key => {
          countries.push(key)
        })
        return countries
      },
      getValues () {
        const keys = Object.keys(this.indicator.countries)
        let values = []
        keys.slice(0, keys.length - 1).map(key => {
          values.push(this.indicator.countries[key])
        })
        return values
      },
      countries () {
        const keys = Object.keys(this.indicator.countries)
        const values = keys.slice(0, keys.length - 1).map(key => {
          return [key, this.indicator.countries[key]]
        })
        // filter and sort
        return values.filter(value => {
          // TODO: offer negative y-axis
          // right now negative values are cut off
          return value[1] !== null && value[1] >= 0
        }).sort((a, b) => {
          return (a[1] > b[1]) ? 1 : ((b[1] > a[1]) ? -1 : 0)
        })
      },
      getYears () {
        const indiTimeline = Object.keys(this.indicator.timeline)
        let years = []
        indiTimeline.map(key => {
          years.push(key)
        })
        return years
      },
      getValuesForGermany () {
        const indiTimeline = Object.keys(this.indicator.timeline)
        let values = []
        indiTimeline.map(key => {
          values.push(this.indicator.timeline[key])
        })
        return values
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
        // TODO check categories
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
        const data = _.concat(this.metadata, [['country', 'value']], this.countries)
        return this.buildCSV(data)
      },
      timelineDownload () {
        const data = _.concat(this.metadata, [['year', 'value']], this.timeline)
        return this.buildCSV(data)
      }
    },
    components: {
      VisPieChart,
      VisBarChart,
      VisLineChart,
      VisLeiste,
      BarChart,
      LineChart
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
    max-height: 100px;
    max-width: 100px;
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
        width: 50%;
        padding: 1em 0;
        border-bottom: 1px solid lighten($color-mute,20%);

        &.title {
          font-weight: 600;
        }
      }

      tr:last-child {
        td {
          border: none;
        }
      }
    }

    i {
      display: inline-block;
      margin-right: 10px;
    }

    input {
      padding: $spacing / 2;
      margin-top: $spacing / 2;
      display: block;
      width: 300px;
      font-size: 0.8em;
      background-color: #f9f9f9;
      border: 1px solid $color-mute;
    }
  }

  .vis {
    margin: 3em 0;

    &:first-of-type {
      margin-top: 1em;
    }

    .vis-title {
      // text-align: center;
      // padding: $spacing / 2;
      padding: 0 0 0 $spacing / 2;
      font-weight: 600;
    }

    .vis-dl {
      text-align: right;
    }
  }

  .pate-logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .indicator-icon {
    margin-left: .5em;
  }

  .indicator-categories {
    margin-top: 1rem;
  }

  .indicator-navigation {
    margin-top: 1rem;
  }

  .navigation-backwards {
    margin-left: 1rem;
  }

  .navigation-forwards {
    float: right;
    margin-right: 1rem;
  }

  .vis-data-source {
    margin-bottom: 0.5rem;
  }

</style>
