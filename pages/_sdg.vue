<template>
  <div class="container">
    <h2>SDG</h2>
    <p>{{ sdg }}</p>
  </div>
</template>

<script>
  export default {
    // validate ({ params, store }) {
    //   // if this function returns false an 404 is printed
    //   // console.log(params)
    //   // console.log(store.getters.slugs, params.photos)
    //   // return true
    //   return store.getters.sdgsSlugs.includes(params.sdg)
    //   // return !params.slug || params.slug === 'active' || params.slug === 'completed'
    // },
    // head () {
    //   // console.log(this.editedTodo, this.project.title)
    //   return {
    //     title: this.project.title || 'all',
    //     titleTemplate: '2030 Watch - %s'
    //   }
    // },
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
      sdg () {
        // This property gets calculated every time. It finds the corresponding project in the store
        return this.$store.getters.sdgs[this.$route.params.sdg]
      }
    }
  }
</script>

<style>

</style>
