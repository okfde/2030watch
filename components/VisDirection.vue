<template>
  <svg class="sdg-vis" :title="rotation">
    <line
      class="diff"
      :transform="'rotate(' + (rotation - 90) + ' 1 15)'"
      :stroke="diff > 0 ? '#D22F27' : '#5C9E31'"
      :x1="1"
      :y1="15"
      :x2="19"
      :y2="15" />
  </svg>
</template>

<script>
  import format from '~/assets/js/format.js'
  import Scale from '~/assets/js/Scale.js'

  export default {
    props: ['diff'],
    methods: {
      format: format
    },
    computed: {
      rotation: function () {
        if (this.diff < 0) {
          const scale = new Scale().domain([-100, 0]).range([0, 90])
          return scale.map(this.diff)
        }
        if (this.diff > 0) {
          const scale = new Scale().domain([0, 100]).range([90, 180])
          return scale.map(this.diff)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sdg-vis {
    width: 20px;
    height: 30px;
    margin-right: 10px;

    .diff {
      stroke-width: 2px;
    }
  }
</style>
