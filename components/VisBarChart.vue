<template>
  <div class="vis">
    <svg>
      <line x1="0%" x2="100%" y1="1%" y2="1%" class="tick" />
      <line x1="0%" x2="100%" y1="50%" y2="50%" class="tick" />
      <line x1="0%" x2="100%" y1="100%" y2="100%" class="quiet" />
      <rect
        v-for="(value, n) in values"
        class="bar"
        :x="n * (100 / values.length) + '%'"
        :width="(100 / values.length - 1) + '%'"
        :y="(100 - calcHeight(value[1])) + '%'"
        :height="calcHeight(value[1]) + '%'"
        />
    </svg>
    <ul>
      <li v-for="value in values" class="label" :style="{ width: (100 / values.length) + '%' }"><span>{{ value[0] }}</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['values'],
    methods: {
      calcHeight: function (v) {
        return ((100 - 0) * ((v - 0) / (this.maxValue - 0))) + 0
      }
    },
    computed: {
      maxValue () {
        const arr = this.values.map(value => {
          return value[1]
        })
        return Math.max(...arr)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/variables";
  svg {
    width: 100%;
  }

  .tick {
    stroke: black;
    stroke-width: 1px;
  }

  .bar {
    fill: $color-okf;
  }

  ul li {
    display: inline-block;
    text-align: left;
    overflow: hidden;
  }

  .label {
    transform: rotate(90deg);
  }
</style>
