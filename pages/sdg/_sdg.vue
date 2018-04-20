<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="bread-spacer">/</span><span class="bread-current">{{ sdg.label }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG {{ sdg.n + 1 }}</small>
        <h1>{{ sdg.label }}</h1>
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
        <p>Die Agenda 2030 schlägt 14 Indikatoren zur Messung von Geschlechtergleichberechtigung vor und umfasst Unterziele zu Diskriminierung, Gewalt, Partizipation, unbezahlte Pflegebelastung, Zugang zum Gesundheitswesen, und Chancengleichheit im politischen, ökonomischen und öffentlichen Leben. Die Deutsche Nachhaltigkeitsstrategie umfasst 3 Indikatoren und 2030Watch schlägt 5 Alternativ Indikatoren vor.</p>
        <div class="columns columns-gutter columns-rows">
          <section>
            <small class="caption">Offizieller Indikatorenkatalog</small>
            <h3>Deutsche Nachhaltigkeitsstrategie (DNS)</h3>
            <p>Diese XXX Indikatoren spiegeln laut der Bundesregierung den Fortschritt von »{{ sdg.label }}« wieder. Auf dieser Grundlage wäre in 2016 dieses Nachhaltigkeitsziel erreicht zu</p>
            <h3>OKF: {{ sdg.okf }}</h3>
          </section>
          <section>
            <ul>
              <li v-for="indicator in sdg.items"><nuxt-link :to="'../indicator/' + indicator.slugTopic">{{ indicator.origin }} – {{ indicator.topic }}</nuxt-link></li>
            </ul>
          </section>
        </div>
        <div class="columns columns-gutter columns-rows">
          <section>
            <small class="caption">Alternativer und komplementärer</small>
            <h3>Indikatorenkatalog 2030Watch (OKF)</h3>
            <p>2030Watch schlägt hingegen eine erweiterte Indikatoren-Liste vor, die einen offiziellen Indikator übernimmt, einen streicht, und einen modifiziert sowie vier weitere hinzufügt. Aus diesem alternativen Indikatorenset würde sich folgender Fortschritt bei »{{ sdg.label }}« berechnen:</p>
            <h3>Total: {{ sdg.total }}</h3>
          </section>
          <section>
            <ul>
              <li v-for="indicator in sdg.items"><nuxt-link :to="'../indicator/' + indicator.slugTopic">{{ indicator.origin }} – {{ indicator.topic }}</nuxt-link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    computed: {
      sdg () {
        return this.$store.getters.sdgs[this.$route.params.sdg]
      }
    }
  }
</script>

<style lang="scss">

</style>
