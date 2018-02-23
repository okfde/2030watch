<template>
  <div class="container rows">
    <section class="columns">
      <Slideshow />
    </section>
    <section class="columns">
      <div>
        <h2>Sonnen-Grafik</h2>
        <div class="vis-wrapper">
          <VisStar />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import VisStar from '~/components/VisStar.vue'
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
      VisStar,
      Slideshow
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

</style>
