<template>
  <div class="container">
    <header>
      <h2>SDG - {{ sdg.label }}</h2>
      <h3>OKF: {{ sdg.okf }}</h3>
      <h3>DNS: {{ sdg.dns }}</h3>
      <h3>Total: {{ sdg.total }}</h3>
    </header>
    <h3><nuxt-link to="/">← Zurück</nuxt-link></h3>
    <div class="content">
      <h3>Die offiziellen Indikatoren der Bundesregierung</h3>
      <span>Diese Indiktoren spiegeln laut Bundesregierung den Fortschritt des Zieles »{{ sdg.label }}« wider. Daraus würde sich folgender Fortschritt berechnen:</span>
      <h3>DNS: {{ sdg.dns }}</h3>
      <ul>
        <li v-for="indicator in sdg.items"><nuxt-link :to="'../indicator/' + indicator.slugTopic">{{ indicator.origin }} – {{ indicator.topic }}</nuxt-link></li>
      </ul>
      <h3>Die komplementären Indikatoren der OKF</h3>
      <span>Wir schlagen hingegen eine erweiterte Indikatoren-Liste vor, die einen Indikator übernimmt, einen modifiziert, einen löscht und zwei hinzufügt. Daraus ergibt sich folgender Fortschritt:</span>
      <h3>Total: {{ sdg.total }}</h3>
    </div>
  </div>
</template>

<script>
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
    data () {
      return {
        editedTodo: 'hallo'
      }
    },
    mounted () {
    },
    components: {
    },
    computed: {
      sdg () {
        return this.$store.getters.sdgs[this.$route.params.sdg]
      }
    }
  }
</script>

<style>

</style>
