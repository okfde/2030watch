<template>
  <div class="page-container">
    <nav class="inpage-nav">
      <div class="wrapper">
        <nuxt-link to="/">Übersicht</nuxt-link><span class="spacer">/</span><nuxt-link :to="'../sdg/' + indicator.slugSdg">{{ indicator.sdg }}</nuxt-link><span class="spacer">/</span>{{ indicator.topic }}
      </div>
    </nav>
    <header class="inpage-header">
      <div class="wrapper">
        <h1>{{ indicator.topic }}</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Die Gleichberechtigung der Geschlechter ist ein elementarer Faktor für nachhaltige Entwicklung weltweit. Frauen müssen gleichgestellt sich an allen Entscheidungen beteiligen können, die ihr Leben beeinflussen.</p>
          </div>
          <div>
            <strong>{{ indicator.labelValue }}</strong>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <div class="wrapper">
        {{ indicator.sdg }}
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
