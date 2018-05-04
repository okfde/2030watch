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
        <small class="caption">Beschreibung</small>
        <p>{{ indicator.txtdescription }}</p>
        <small class="caption">Zielwert</small>
        <p>{{ indicator.txttarget }}</p>
        <small class="caption">Kategorie</small>
        <p>{{ indicator.txtcategory }}</p>
        <div class="columns columns-gutter columns-rows">
          <section>
            <table>
              <thead>
                <tr>
                  <th>key</th>
                  <th>value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="key in ['unit', 'goal', 'target', 'current', 'start', 'startYear', 'currentYear', 'reason', 'newTopic', 'pate', 'license']">
                  <td>{{ key }}</td>
                  <td>{{ indicator[key] }}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            Datenpate
          </section>
        </div>
        <h2>Countries</h2>
        <VisBarChart :values="countries" />
        <h2>Timeline</h2>
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
</template>

<script>
  import { mapState } from 'vuex'
  import VisPieChart from '~/components/VisPieChart.vue'
  import VisBarChart from '~/components/VisBarChart.vue'

  export default {
    validate ({ params, store }) {
      return store.getters.indicatorsSlugs.includes(params.indicator)
    },
    head () {
      // console.log(this.editedTodo, this.project.title)
      return {
        title: this.indicator.topic || 'all',
        titleTemplate: '2030 Watch - %s'
      }
    },
    computed: {
      ...mapState([
        'data'
      ]),
      indicator () {
        return this.data[this.$route.params.indicator]
      },
      countries () {
        const keys = Object.keys(this.indicator.countries)
        return keys.slice(0, 20).map(key => {
          return [key, this.indicator.countries[key]]
        })
      }
    },
    components: {
      VisPieChart,
      VisBarChart
    }
  }
</script>

<style lang="scss" scoped>
  .progress {
    svg {
      width: 200px;
    }
  }
</style>
