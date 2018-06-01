<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <a href="/#keyfindings">Übersicht </a><span class="bread-spacer">/</span><nuxt-link :to="'../sdg/' + indicator.sdg.slug"> SDG {{ indicator.sdg.sdg}} – {{ indicator.sdg.label }} </nuxt-link><span class="bread-spacer">/</span><span class="bread-current"> {{ indicator.label }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ indicator.sdg.sdg }} – {{ indicator.sdg.label }}</small>
        <h1>{{ indicator.label }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>{{ indicator.txtintroduction }}</p>
            <p>{{ indicator.author === 'dns' ? 'DNS Indikator – modifiziert –' : '2030 Indikator –' }}
              <span v-if="category">
                 <span v-if="indicator.author === 'okf'" title="Neues Thema" class="indicator-icon"><i class="icon-plus-circled" /></span>
                 <span v-if="indicator.badIndicator" title="Ungeeignet" class="indicator-icon"><i class="icon-cancel-circled" /></span>
                 <span v-if="indicator.keep" title="Übernommen" class="indicator-icon"><i class="icon-ok-circled" /></span>
                 <span v-if="indicator.badTarget" title="Nicht bewertbarer Zielwert" class="indicator-icon"><i class="icon-minues-circled" /></span>
                 <span v-if="indicator.modTarget" title="Modifizierter Zielwert" class="indicator-icon"><i class="icon-cog-circled" /></span>
                 <span v-if="indicator.uncalculable" title="Nicht berechenbar" class="indicator-icon"><i class="icon-help-circled" /></span>
                 <span v-if="indicator.spill" title="Internationale Auswirkungen" class="indicator-icon"><i class="icon-star-circled" /></span>
              </span>
            </p>
          </div>
          <div class="progress">
            <VisPieChart :value="indicator.progress" fill="ffffff" :background="indicator.sdg.color" />
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <VisLeiste :current="indicator.sdg.slug" />
      <div class="wrapper">
        <div class="box vis" v-if="hasCountries && countries.length">
          <h2>Wo steht Deutschland im internationalen Vergleich?</h2>
          <h5 class="vis-title">{{ indicator.label }} (in {{ indicator.unit }}), {{ indicator['currentYear'] }}</h5>
          <VisBarChart :values="countries" />
          <div class="vis-dl">
             <a class="btn btn-download" :href="countriesDownload" :download="indicator.slug + '-countries.csv'"><i class="icon-download" /> Daten herunterladen</a>
          </div>
        </div>
        <div class="box vis" v-if="hasTimeline && timeline.length">
          <h2>Wie hat sich der Indikator in Deutschland über die Zeit verändert?</h2>
          <h5 class="vis-title">{{ indicator.label }} (in {{ indicator.unit }})</h5>
          <VisLineChart :values="timeline" />
          <div class="vis-dl">
             <a class="btn btn-download" :href="timelineDownload" :download="indicator.slug + '-timeline.csv'"><i class="icon-download" /> Daten herunterladen</a>
          </div>
        </div>
      </div>

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

      <div class="wrapper columns columns-gutter">
        <div class="description">
          <h4>Methodik</h4>
          <nuxt-link to="/projekt">Hier</nuxt-link> erfährst du mehr darüber wie Indikatoren berechnet und in Kategorien eingeteilt werden.
        </div>
      </div>

      <div class="wrapper columns columns-gutter">
        <div class="description">
          <h4>Indikator-Details</h4>
          <table class="box">
            <tbody>
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
              <tr v-if="indicator['license']">
                <td class="title">Lizenz</td><td>{{ indicator['license'] }}</td>
              </tr>
              <tr v-if="indicator['indicator source']">
                <td class="title">Indikatorquelle</td><td>{{ indicator['indicator source'] || '—'  }}</td>
              </tr>
              <tr v-if="indicator['data source']">
                <td class="title">Datenquelle</td><td><a :href="indicator['sourcelink']">{{ indicator['data source'] }}</a></td>
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
          <h4>Datenpate</h4>
          <div>
            Bei Interesse, Datenpate zu werden, wende dich bitte an
            <a href="mailto:2030-watch@okfn.de">2030-watch@okfn.de</a>.
          </div>
        </div>

        <div v-if="indicator['pate']" class="description">
          <h4>Datenpate</h4>
          <div class="pate-logo">
            <a :href="indicator['pateUrl']" target="_blank">
              <img :src="require(`@/static/img/datenpaten/${indicator['pateLogo']}`)">
            </a>
          </div>
          <div>
            {{ indicator['pateText'] }}
          </div>
          <div>
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
      VisLineChart,
      VisLeiste
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .progress {
    display: flex;
    // justify-content: center;
    // align-items: center;

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
      font-size: 0.7em;
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
</style>
