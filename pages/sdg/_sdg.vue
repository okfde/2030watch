<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="bread-spacer">/</span><span class="bread-current">{{ sdg.label.short }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ sdg.id }}</small>
        <h1>{{ sdg.label.long }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Die Gleichberechtigung der Geschlechter ist ein elementarer Faktor für nachhaltige Entwicklung weltweit. Frauen müssen gleichgestellt sich an allen Entscheidungen beteiligen können, die ihr Leben beeinflussen.</p>
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
        <p>Die Agenda 2030 schlägt 14 Indikatoren zur Messung von Geschlechtergleichberechtigung vor und umfasst Unterziele zu Diskriminierung, Gewalt, Partizipation, unbezahlte Pflegebelastung, Zugang zum Gesundheitswesen, und Chancengleichheit im politischen, ökonomischen und öffentlichen Leben. Die Deutsche Nachhaltigkeitsstrategie umfasst {{ sdg.n.dns }} Indikator{{ sdg.n.dns > 1 ? 'en' : '' }} und 2030Watch schlägt {{ sdg.n.okf }} Alternativ Indikator{{ sdg.n.okf > 1 ? 'en' : '' }} vor.</p>
        <div class="columns columns-gutter columns-rows">
          <section>
            <small class="caption">Offizieller Indikatorenkatalog</small>
            <h3>Deutsche Nachhaltigkeitsstrategie (DNS)</h3>
            <p>Diese{{ sdg.n.dns > 1 ? '' : 'r' }} {{ sdg.n.dns > 1 ? sdg.n.dns : '' }} Indikator{{ sdg.n.dns > 1 ? 'en' : '' }} spiegeln laut der Bundesregierung den Fortschritt von »{{ sdg.label.short }}« wieder. Auf dieser Grundlage wäre in 2016 dieses Nachhaltigkeitsziel erreicht zu</p>
            <h3>{{ sdg.dns.toFixed(2) }}&#8239;%</h3>
          </section>
          <section>
            <ul>
              <li v-for="(indicator, slug) in sdg.ind.dns"><nuxt-link :to="'../indicator/' + slug">{{ indicator.label }}</nuxt-link></li>
            </ul>
          </section>
        </div>
        <div class="columns columns-gutter columns-rows">
          <section>
            <small class="caption">Alternativer und komplementärer</small>
            <h3>Indikatorenkatalog 2030Watch (OKF)</h3>
            <p>2030Watch schlägt hingegen eine erweiterte Indikatoren-Liste vor, die {{ numberToString(sdg.n.dns) }} offiziellen Indikator übernimmt, {{ numberToString(sdg.n.baT + sdg.n.baI) }} streicht, und einen modifiziert sowie {{ sdg.n.okf }} weitere hinzufügt. Aus diesem alternativen Indikatorenset würde sich folgender Fortschritt bei »{{ sdg.label.short }}« berechnen:</p>
            <h3>{{ sdg.okf.toFixed(2) }}&#8239;%</h3>
          </section>
          <section>
            <ul>
              <li v-for="(indicator, slug) in sdg.ind.okf"><nuxt-link :to="'../indicator/' + slug">{{ indicator.label }}</nuxt-link></li>
            </ul>
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

  export default {
    validate ({ params, store }) {
      return store.getters.sdgsSlugs.includes(params.sdg)
    },
    head () {
      return {
        title: this.sdg.label || 'all',
        titleTemplate: '2030 Watch - %s'
      }
    },
    mounted () {
    },
    components: {
      VisLeiste,
      VisProgress
    },
    methods: {
      numberToString: function (n) {
        if (n === 0) {
          return 'keinen'
        } else if (n === 1) {
          return 'einen'
        } else if (n === 2) {
          return 'zwei'
        } else if (n === 3) {
          return 'drei'
        } else {
          return n
        }
      }
    },
    computed: {
      ...mapState([
        'dataSDGs'
      ]),
      sdg () {
        return this.dataSDGs[this.$route.params.sdg]
      }
    }
  }
</script>

<style lang="scss">

</style>
