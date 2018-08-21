<template>
  <ul>
    <li v-for="(sdg, index) in sdgsCopy" class="sdg-item" v-bind:key="sdg.number">
      <div class="sdg-link" >
        <div class="sdg-label">
          <nuxt-link :to="'sdg/' + sdg.slug" :style=" { 'color': '#' + sdg.color }">
            <div class="sdg-number">
              {{ sdg.number }}
            </div>
            <div class="sdg-text" :title="sdg.labelLong">
              {{ sdg.labelShort }}
            </div>
          </nuxt-link>
          <a @click="toggle(sdg)" class="toggle-button" :style=" { 'color': '#' + sdg.color }">
            <i v-show="sdg.isActive" class="icon-angle-up" />
            <i v-show="!sdg.isActive" class="icon-angle-down" />
          </a>
        </div>
        <div class="sdg-vis">
          <VisProgress :sdg="sdg" :vTickLabels="index === 0" :vTicks="false" />
        </div>
      </div>
      <transition name="fade">
        <div class="card" v-show="sdg.isActive">
          <div class="dns card-content">
            <h5>Offizielle Indikatoren:</h5>
            <div v-for="elem in sdg.ind.dns" class="dns-link">
              <nuxt-link :to="'indicator/' + elem.slug" class="dns">
                {{ elem.label }}
              </nuxt-link>
            </div>
          </div>
          <div class="okf card-content">
            <h5>2030Watch Indikatoren:</h5>
            <div v-for="elem in sdg.ind.okf">
              <nuxt-link :to="'indicator/' + elem.slug" class="okf">
                {{ elem.label }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
  import VisProgress from '~/components/VisProgress.vue'

  export default {
    props: ['sdgs'],
    data: function () {
      return {
        sdgsCopy: this.sdgs
      }
    },
    methods: {
      toggle: function (sdg) {
        sdg.isActive = !sdg.isActive
        // TODO find another solution
        // this is a workaround since the update doesn't get detected (!)
        this.sdgsCopy.splice(0, 0)
      },
      addActivityStatus: function () {
        this.sdgsCopy.forEach(function (sdg) {
          sdg.isActive = false
        })
      }
    },
    components: {
      VisProgress
    },
    beforeMount () {
      this.addActivityStatus()
    },
    mounted: function () {
    },
    watch: {}
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  .card {
    border: 1px solid;
    border-color: #E0E0E0;
    border-radius: 3px;
    padding: 1.3rem;
    flex: 1;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
  }

  .card-content {
    flex: 1;
  }

  .dns-link {
    :hover {
      color: darken($color-dns, 8%);
    }
  }

  .fade-enter-active {
    transition: opacity .7s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .toggle-button {
    font-size: 1.4rem;
    margin-left: 0.8rem;
  }

  .sdg-item {
    flex-wrap: wrap;
  }

  .sdg-vis {
    cursor: default;
  }

</style>
