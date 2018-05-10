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
            <p>{{ indicator.author === 'dns' ? 'Offizieller Indikator' : '2030 Indikator' }} (xxx)</p>
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
                <td>Aktueller Wert {{ indicator['currentYear'] }})</td><td v-html="format(indicator['current'], 1, indicator['unit'])" />
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
        </section>
      </div>
      <div class="wrapper">
        <div v-if="hasCountries">
          <h2>Deutschland im Ländervergleich</h2>
          <VisBarChart :values="countries" />
        </div>
        <div v-if="hasTimeline">
          <h2>Der Indikator im Lauf der Zeit</h2>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, year) in indicator['timeline']">
                <td>{{ year }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisPieChart from '~/components/VisPieChart.vue'
  import VisBarChart from '~/components/VisBarChart.vue'
  import format from '~/assets/js/format.js'

  export default {
    validate ({ params, store }) {
      return store.getters.indicatorsSlugs.includes(params.indicator)
    },
    head () {
      return {
        title: this.indicator.topic || 'all',
        titleTemplate: '2030 Watch - %s'
      }
    },
    methods: {
      format: format
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
        return keys.slice(0, 20).map(key => {
          return [key, this.indicator.countries[key]]
        })
      },
      hasTimeline () {
        return typeof this.indicator.timeline !== 'undefined'
      }
    },
    components: {
      VisPieChart,
      VisBarChart
    }
  }
</script>

<style lang="scss" scoped>
  .progress > * {
    max-height: 150px;
    max-width: 150px;
  }
</style>
