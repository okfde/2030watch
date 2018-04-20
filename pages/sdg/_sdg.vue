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
            <strong>{{ sdg.okf }} {{ sdg.total }}</strong>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <VisLeiste :current="sdg.slug" />
      <div class="wrapper">
        <h3>Die offiziellen Indikatoren der Bundesregierung</h3>
        <span>Diese Indiktoren spiegeln laut Bundesregierung den Fortschritt des Zieles »{{ sdg.label }}« wider. Daraus würde sich folgender Fortschritt berechnen:</span>
        <h3>OKF: {{ sdg.okf }}</h3>
        <h3>DNS: {{ sdg.dns }}</h3>
        <h3>Total: {{ sdg.total }}</h3>
        <h3>DNS: {{ sdg.dns }}</h3>
        <ul>
          <li v-for="indicator in sdg.items"><nuxt-link :to="'../indicator/' + indicator.slugTopic">{{ indicator.origin }} – {{ indicator.topic }}</nuxt-link></li>
        </ul>
        <h3>Die komplementären Indikatoren der OKF</h3>
        <span>Wir schlagen hingegen eine erweiterte Indikatoren-Liste vor, die einen Indikator übernimmt, einen modifiziert, einen löscht und zwei hinzufügt. Daraus ergibt sich folgender Fortschritt:</span>
        <h3>Total: {{ sdg.total }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import VisLeiste from '~/components/VisLeiste.vue'

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
      VisLeiste
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
