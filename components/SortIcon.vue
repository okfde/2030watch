<template>
  <svg :class="{ 'icon': true, 'icon-sort': true, 'active': active }">
    <polyline points="0,7 5,0 10,7" :transform="'translate(0,' + (reverse && active ? 10 : 0) + ') scale(1, ' + (reverse && active ? -1 : 1) + ')'" />
  </svg>
</template>

<script>
  export default {
    props: ['active', 'reverse']
  }
</script>

<style lang="scss" scoped>
  .icon-sort {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    fill: #D0CFCE;

    &.active {
      fill: #9B9B9A;
    }

    * {
      transition-duration: 0.3s;
    }
  }
</style>
