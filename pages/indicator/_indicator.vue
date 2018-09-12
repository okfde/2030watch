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
        <div class="columns columns-gutter">
          <div>
            <small class="caption">SDG {{ indicator.sdg.sdg }} – {{ indicator.sdg.label }}</small>
            <h1>{{ indicator.label }}</h1>
            <p class="txtintroduction">{{ indicator.txtintroduction }}</p>
          </div>
          <div class="description">
            <table class="box header-box" :style="{ 'background-color': sdgColorLighter }" >
              <tbody>
                <tr :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }">
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" class="title">Kategorie</td>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }"> {{ indicator.author === 'dns' ? 'Offizieller Indikator' : '2030Watch Indikator' }}
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
                  </td>
                </tr>
                <tr>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" class="title">IST ({{ indicator['currentYear'] }})</td>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" v-html="format(indicator['current'], 1, indicator['unitShort'])" />
                </tr>
                <tr>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" class="title">SOLL ({{ (indicator.id === '1_1' || indicator.id === '1_2' ) && indicator.author === 'dns' ? '2016' : '2030' }})</td>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" v-html="format(indicator['target'], 1, indicator['unitShort'])" />
                </tr>
                <tr>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" class="title">Ausgangswert Berechnung <span v-if="indicator['startYear']">({{ indicator['startYear'] }})</span></td>
                  <td :style="{ 'border-bottom': '1px solid #' + indicator.sdg.color }" v-html="format(indicator['start'], 1, indicator['unitShort'])" />
                </tr>
                <tr>
                  <td class="title">2030-Ziel erreicht zu</td>
                  <td v-html="format(indicator['progress'], 0)" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </header>

    <div class="content">
      <VisLeiste :current="indicator.sdg.slug" />

      <div class="wrapper">
        <div class="indicator-navigation indicator-navigation-top">
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
      </div>

      <div class="wrapper" v-if="indicator.txt2030target">
        <h2 class="h2-txt2030target">{{ indicator.txt2030target }}</h2>
      </div>

      <div class="wrapper">
        <div id="captureBarChart" class="box vis" v-if="hasCountries && countries.length">
          <h2>Wie steht Deutschland im Vergleich zu EU/OECD Ländern?</h2>
          <div data-html2canvas-ignore class="vis-dl button-container">
             <a v-if="!sortedByValue" class="btn btn-download" @click="updateBarChart()">
               <i class="icon-sort-number-up" /> Nach Wert sortieren
             </a>
             <a v-else class="btn btn-download" @click="updateBarChart()">
               <i class="icon-sort-name-up" /> Alphabetisch sortieren
             </a>
          </div>

          <bar-chart id="barChartDownload" ref="barChartDownload" :height="200" :chart-data="datacollection" :options="barChartOptions"></bar-chart>

          <div class="vis-dl vis-data-source">
            Datenquelle:
            <a :href="indicator.sourcelink">
              {{ indicator['data source'] }}
            </a>
          </div>

          <div data-html2canvas-ignore class="vis-dl" v-if="indicator.id !== '7_2'">
            <a id="barChartDownloadButton" class="btn btn-download png-download mobile-invisible" :download="indicator.slug + '.png'">
              <i class="icon-file-image" /> PNG herunterladen
            </a>
            <a class="btn btn-download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'">
              <i class="icon-download" /> Daten herunterladen
            </a>
          </div>
        </div>

        <div id="captureLineChart" class="box vis" v-if="hasTimeline && timeline.length">
          <h2>Wie hat sich der Indikator in Deutschland über die Zeit verändert?</h2>

          <line-chart :height="200" :data="lineChartData" :options="lineChartOptions"></line-chart>

          <div class="vis-dl vis-data-source">
            Datenquelle:
            <a :href="indicator.sourcelink">
              {{ indicator['data source'] }}
            </a>
          </div>

          <div data-html2canvas-ignore class="vis-dl" v-if="indicator.id !== '7_2'">
            <a id="lineChartDownloadButton" class="btn btn-download png-download mobile-invisible" :download="indicator.slug + '.png'">
              <i class="icon-file-image" /> PNG herunterladen
            </a>
            <a class="btn btn-download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'">
              <i class="icon-download" />
              Daten herunterladen
            </a>
          </div>

        </div>
      </div>

      <div class="info-wrapper">
        <div class="wrapper">
          <h2 :style="{ 'color': '#' + indicator.sdg.color}">
            Weitere Informationen zu diesem Indikator
          </h2>
        </div>
        <div class="wrapper description">
          <h4 :style="{ 'color': '#' + indicator.sdg.color}">Beschreibung</h4>
          <p>{{ indicator.txtdescription }}</p>

          <h4 :style="{ 'color': '#' + indicator.sdg.color}">Zielwert</h4>
          <p>{{ indicator.txttarget }}</p>

          <h4 :style="{ 'color': '#' + indicator.sdg.color}">Ausgangswert (Fortschrittsberechnung)</h4>
          <p>{{ indicator.txtstartingvalue }}</p>

          <h4 :style="{ 'color': '#' + indicator.sdg.color}">Kategorie</h4>
          <p>{{ indicator.txtcategory }}</p>


          <h4 :style="{ 'color': '#' + indicator.sdg.color}">Methodik</h4>
          <p>
            <nuxt-link to="/methodik">Hier</nuxt-link> erfährst du mehr darüber wie Indikatoren berechnet und in Kategorien eingeteilt werden.
          </p>
          <div v-if="indicator.author === 'dns'">
            &#42; Indikator-Beschreibung und Zielwert sind der
            <a href="https://www.bundesregierung.de/Content/Infomaterial/BPA/Bestellservice/Deutsche_Nachhaltigkeitsstrategie_Neuauflage_2016.pdf?__blob=publicationFile&v=7"
              target="_blank"
            >Deutschen Nachhaltigkeitsstrategie 2016</a> entnommen.
          </div>
        </div>
      </div>

      <div class="wrapper columns columns-gutter">
        <div class="description">
          <h4 :style="{ 'color': '#' + indicator.sdg.color}" class="h4-title">Indikator-Details</h4>
          <table class="box table-fixed">
            <tbody>
              <tr>
                <td class="title">Kategorie</td>
                <td> {{ indicator.author === 'dns' ? 'Offizieller Indikator' : '2030Watch Indikator' }}
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
                </td>
              </tr>
              <tr>
                <td class="title">Zielwert/SOLL<br />({{ (indicator.id === '1_1' || indicator.id === '1_2' ) && indicator.author === 'dns' ? '2016' : '2030' }})</td>
                <td v-html="format(indicator['target'], 1, indicator['unitShort'])" />
              </tr>
              <tr>
                <td class="title">Aktueller Wert/&shy;IST<br />({{ indicator['currentYear'] }})</td>
                <td v-html="format(indicator['current'], 1, indicator['unitShort'])" />
              </tr>
              <tr>
                <td class="title">Ausgangswert Fortschritts&shy;berechnung<br /><span v-if="indicator['startYear']">({{ indicator['startYear'] }})</span></td>
                <td v-html="format(indicator['start'], 1, indicator['unitShort'])" />
              </tr>
              <tr v-if="indicator['license']">
                <td class="title">Nutzungs&shy;bedingungen</td>
                <td class="td-break-urls" :title="indicator['license']">{{ indicator['license'] }}</td>
              </tr>
              <tr v-if="indicator['indicator source']">
                <td class="title">Indikatorquelle</td>
                <td>{{ indicator['indicator source'] || '—'  }}</td>
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
                <td class="title">Datenpatenschaft</td><td>{{ indicator['pate'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="!indicator['pate']" class="description" id="datenpate">
          <h4 class="h4-title">Werde Datenpate/Datenpatin für diesen Indikator</h4>
          <div>
            Ziel von 2030Watch ist es, für jeden Indikator einen Datenpaten oder eine Datenpatin zu haben.
            Datenpaten sind Fachorganisationen, die einen Indikator "adoptieren", den sie für
            ein Unterziel für sinnvoll halten. Sie legen den Zielwert fest, der bis 2030
            erreicht werden sollte. Darüber hinaus unterstützen sie das Projekt in der
            Datenbereitstellung. Bei Interesse, Datenpatin oder Datenpate zu werden, wende dich bitte an
            <a href="mailto:2030-watch@okfn.de">2030-watch@okfn.de</a>.
          </div>
        </div>

        <div v-if="indicator['pate'] && indicator['pateUrl'] && indicator['pateLogo']" class="description description-datenpate">
          <h4 class="h4-title">Datenpate/Datenpatin</h4>
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

      <div class="wrapper columns columns-gutter sharing">
        <div class="description">
          <h4 class="caption">Diesen Indikator teilen</h4>
          <a title="Per E-Mail teilen" :href="'mailto:?subject=' + encodeURIComponent(indicator.label) + '&body=' + encodeURIComponent(link)"><i class="icon-mail" /></a>
          <a title="Bei Twitter teilen" target="_blank" :href="'https://twitter.com/share?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(indicator.label)"><i class="icon-twitter" /></a>
          <a title="Bei Facebook teilen" target="_blank" :href="'https://facebook.com/sharer.php?u=' + encodeURIComponent(link)"><i class="icon-facebook-official" /></a>
          <input type="text" :value="link" />
        </div>
        <div></div>
      </div>

      <div class="wrapper">
        <div class="indicator-navigation">
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
  import html2canvas from 'html2canvas'
  const tinycolor = require('tinycolor2')

  export default {
    validate ({ params, store }) {
      return store.getters.indicatorsSlugs.includes(params.indicator)
    },
    head () {
      return {
        title: this.indicator.label || 'Indicator',
        titleTemplate: '%s | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: this.indicator.label || 'Indicator' },
          { hid: 'og-description', property: 'og:description', content: this.indicator.txtintroduction }
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
      },
      renderImage () {
        const canvas = this.$refs.barChartDownload.$refs.canvas
        const image = canvas.toDataURL('image/png', 1.0)
        this.canvasToSRC = image
      },
      updateBarChart () {
        this.datacollection = {
          labels: this.sortedByValue ? this.getCountries : this.getCountriesSortedByValue,
          datasets: [
            {
              label: this.indicator.unitShort,
              backgroundColor: '#023753',
              data: this.sortedByValue ? this.getValues : this.getSortedValues
            }
          ]
        }
        this.sortedByValue = !this.sortedByValue
      }
    },
    data: function () {
      return {
        link: '',
        sortedByValue: false,
        datacollection: null,
        canvasToSRC: undefined,
        dataURI: undefined,
        sdgColorLighter: undefined
      }
    },
    mounted: function () {
      // TODO check for better way to use router base
      const base = this.$router.options.base === '/' ? '' : this.$router.options.base
      this.link = window.location.origin + base + this.$route.fullPath
      this.updateBarChart()
      const color = '#' + this.indicator.sdg.color
      this.sdgColorLighter = tinycolor(color).darken(7).toString()
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
          ['indicator', this.indicator.label],
          ['SDG', `${this.indicator.sdg.sdg}: ${this.indicator.sdg.label}`],
          ['datasource', this.indicator['data source']],
          ['sourcelink', this.indicator.sourcelink],
          ['license', this.indicator.license]
        ]
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
          },
          animation: {
            onComplete: function () {
              // TODO check for a better solution
              const elemToRender = document.getElementById('captureBarChart')
              const options = {
                logging: false,
                imageTimeout: 0
              }
              html2canvas(elemToRender, options).then(canvas => {
                this.dataURI = canvas.toDataURL('image/png', 1.0)
                document.getElementById('barChartDownloadButton').href = encodeURI(this.dataURI)
              })
            }
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
              backgroundColor: '#023753',
              data: this.getValuesForCountries
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
                labelString: 'Jahre'
              },
              ticks: {
                autoSkip: false
              }
            }]
          },
          animation: {
            onComplete: function () {
              // TODO check for a better solution
              const elemToRender = document.getElementById('captureLineChart')
              const options = {
                logging: false,
                imageTimeout: 0
              }
              html2canvas(elemToRender, options).then(canvas => {
                this.dataURI = canvas.toDataURL('image/png', 1.0)
                document.getElementById('lineChartDownloadButton').href = encodeURI(this.dataURI)
              })
            }
          }
        }
      },
      getCountries () {
        return Object.keys(this.indicator.countries)
      },
      getValues () {
        const keys = Object.keys(this.indicator.countries)
        let values = []
        keys.slice(0, keys.length - 1).map(key => {
          values.push(this.indicator.countries[key])
        })
        return values
      },
      getCountriesSortedByValue () {
        var sortable = []
        for (var country in this.indicator.countries) {
          sortable.push([country, this.indicator.countries[country]])
        }
        sortable.sort(function (a, b) {
          return a[1] - b[1]
        })
        let sortedCountries = []
        sortable.map(elem => {
          sortedCountries.push(elem[0])
        })
        return sortedCountries
      },
      getSortedValues () {
        var sortable = []
        for (var country in this.indicator.countries) {
          sortable.push([country, this.indicator.countries[country]])
        }
        sortable.sort(function (a, b) {
          return a[1] - b[1]
        })
        let values = []
        sortable.map(elem => {
          values.push(elem[1])
        })
        return values
      },
      getTargetForCountries () {
        const indiTimeline = Object.keys(this.indicator.countries)
        let values = []
        indiTimeline.map(key => {
          values.push(this.indicator.target)
        })
        return values
      },
      countries () {
        const keys = Object.keys(this.indicator.countries)
        const values = keys.slice(0, keys.length - 1).map(key => {
          return [key, this.indicator.countries[key]]
        })
        // filter null values
        return values.filter(value => {
          return value[1] !== null
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
      getValuesForCountries () {
        const indiTimeline = Object.keys(this.indicator.timeline)
        let values = []
        indiTimeline.map(key => {
          values.push(this.indicator.timeline[key])
        })
        return values
      },
      getTargetForTimeline () {
        const indiTimeline = Object.keys(this.indicator.timeline)
        let values = []
        indiTimeline.map(key => {
          values.push(this.indicator.target)
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
      padding-bottom: $spacing / 4;
    }

    p, table, img {
      padding: 0 0 $spacing 0;
    }

    table {
      padding: $spacing;
      margin-bottom: $spacing;

      td {
        padding: 0.8em 0.2rem;
        border-bottom: 1px solid lighten($color-mute, 20%);

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
  }

  .indicator-icon {
    margin-left: .5em;
  }

  .indicator-navigation {
    margin-top: 2rem;
  }

  .navigation-forwards {
    float: right;
  }

  .vis-data-source {
    margin-bottom: 0.5rem;
  }

  .txtintroduction {
    font-size: 1.2rem;
  }

  .header-box {
    border-radius: 0px;
    border: none;
    padding: 0.5rem 1rem 0.3rem 1.5rem !important;
    text-shadow: none;
  }

  .button-container {
    margin-bottom: 1rem;
  }

  .png-download {
    margin-right: 1rem;
  }

  .info-wrapper {
    padding: 1rem 0 1rem 0;
    background-color: #EEEEEE;
  }

  .h2-txt2030target {
    color: $color-default !important;
  }

  .inpage-header {
    padding-bottom: $spacing;
  }

  .h4-title {
    margin-bottom: 0.5rem;
  }

  .sharing {
    margin-bottom: 3rem !important;
  }

  @media screen and (max-width: $on-laptop) {
    .txtintroduction {
      margin-bottom: 2rem;
    }

    .box {
      padding: 1rem;
    }

    .sharing {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    .description table {
      padding: 1rem;
    }

    .indicator-icon {
      margin-left: 0;
    }

    .indicator-navigation-top {
      margin-bottom: 2rem;
    }
  }

  .table-fixed {
    table-layout: fixed;
  }

  .td-break-urls  {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .description-datenpate {
    display: flex;
    flex-direction: column;
  }
</style>
