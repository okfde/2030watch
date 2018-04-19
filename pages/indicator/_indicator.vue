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
      // if this function returns false an 404 is printed
      console.log(params)
      // return true
      return store.getters.indicatorsSlugs.includes(params.indicator)
      // return !params.slug || params.slug === 'active' || params.slug === 'completed'
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
      // let self = this
      // window.addEventListener('keyup', ev => {
      //   self.$router.push('/')
      // })
    },
    components: {
      // Slick
    },
    computed: {
      indicator () {
        // This property gets calculated every time. It finds the corresponding project in the store
        console.log(this.$route.params.indicator, this.$store.getters.indicators)
        return this.$store.getters.indicators[this.$route.params.indicator]
      }
    }
  }
</script>

<style>

</style>
