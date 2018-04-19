<template>
  <div class="container rows">
    <section class="columns">
      <header>
        <Slideshow />
      </header>
    </section>
    <section class="columns">
      <div>
        <h2>SDG Liste</h2>
        <div class="vis-wrapper">
          <VisListe />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import VisListe from '~/components/VisListe.vue'
  import Slideshow from '~/components/Slideshow.vue'

  export default {
    data: function () {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    components: {
      VisListe,
      Slideshow
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

</style>
