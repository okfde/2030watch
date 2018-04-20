<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="bread-spacer">/</span><nuxt-link :to="'../sdg/' + indicator.slugSdg">{{ indicator.sdg }}</nuxt-link><span class="bread-spacer">/</span><span class="bread-current">{{ indicator.topic }}</span>
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <small class="caption">SDG XXX</small>
        <h1>{{ indicator.topic }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Dieser Indikator zeigt den Anteil von Frauen in Aufsichtsräten von börsennotierten und voll mitbestimmungspflichtigen Unternehmen in Deutschland. 2016 gingen 106 Unternehmen in die Berechnung mit ein. Datengrundlage bilden die Ergebnisse von Wahlen in den Hauptversammlungen.</p>
            <p>Offizieller Indikator (mit schlechtem Zielwert)</p>
          </div>
          <div>
            <strong>{{ indicator.labelValue }}</strong>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        <h2>Wie geht 2030Watch mit diesem Indikator um?</h2>
        <small class="caption">Beschreibung</small>
        <p>Dieser Indikator zeigt den Anteil von Frauen in Aufsichtsräten von börsennotierten und voll mitbestimmungspflichtigen Unternehmen in Deutschland. 2016 gingen 106 Unternehmen in die Berechnung mit ein. Datengrundlage bilden die Ergebnisse von Wahlen in den Hauptversammlungen. Im Zuge der gesetzlichen Vorschriften sind börsennotierte und voll mitbestimmungspflichtige Unternehmen in Deutschland seit 2016 dazu verpflichtet mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Die deutsche Nachhaltigkeitsstrategie setzt das gleiche Ziel für das Jahr 2030 fest.</p>
        <small class="caption">Zielwert</small>
        <p>Im Zuge der gesetzlichen Vorschriften sind börsennotierte und voll mitbestimmungspflichtige Unternehmen in Deutschland schon seit 2016 dazu verpflichtet mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Der Zielwert der DNS für das Jahr 2030 liegt damit nur 2,7 % höher als der aktuelle Wert (2016). Der Indikatorzielwert der DNS von 30% erscheint daher als wenig ambitioniert.</p>
        <small class="caption">Kategorie</small>
        <p>modifizierter Zielwert - 2030Watch schlägt einen neuen Zielwert von 50% Frauen in Aufsichtsräten der börsennotierten und voll mitbestimmungspflichtigen Unternehmen. Der neue Zielwert von 50% entspricht den Zielen der 2030 Agenda und dem Geschlechterverhältnis in Deutschland.</p>
        <div class="columns columns-gutter columns-rows">
          <section>
            Details
          </section>
          <section>
            Datenpate
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    data () {
      return {
        editedTodo: 'hallo'
      }
    },
    mounted () {
    },
    components: {
      // Slick
    },
    computed: {
      indicator () {
        return this.$store.getters.indicators[this.$route.params.indicator]
      }
    }
  }
</script>

<style>

</style>
