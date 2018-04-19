<template>
  <div class="container">
    <nav><nuxt-link to="/">Übersicht</nuxt-link><span class="spacer">/</span><nuxt-link :to="'../sdg/' + indicator.slugSdg">{{ indicator.sdg }}</nuxt-link><span class="spacer">/</span>{{ indicator.topic }}</nav>
    <h2>Indicator - {{ indicator.topic }}</h2>
    <h3><nuxt-link :to="'../sdg/' + indicator.slugSdg">← {{ indicator.sdg }}</nuxt-link></h3>
    <span>{{ indicator.labelValue }}</span>
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
