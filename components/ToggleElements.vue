<template>
  <ul>
    <!-- <li v-for="item in items" :class="{ activeclass: item.isActive }">
      <div class="item-text">
        {{ item }}
      </div>
      <div v-show="item.isActive" class="item-desc">
        {{ item }}
      </div>
    </li> -->


    <li v-for="(sdg, index) in sdgsCopy" class="sdg-item" v-bind:key="sdg.number">
      <div class="sdg-link" >
        <nuxt-link :to="'sdg/' + sdg.slug" class="sdg-label" :style=" { 'color': '#' + sdg.color }">
          <div class="sdg-number">
            {{ sdg.number }}
          </div>
          <div class="sdg-text" :title="sdg.labelLong">
            {{ sdg.labelShort }}
          </div>
        </nuxt-link>

        <a @click="toggle(sdg)" style="font-size:1.4rem;">
          <i class="icon-angle-down" />
        </a>

        <div class="sdg-vis" style="cursor: default;">
          <VisProgress :sdg="sdg" :vTickLabels="index === 0" :vTicks="false" />
        </div>
      </div>

      <div v-show="sdg.isActive">
        <div class="dns">
          <span style="font-weight:bold">Offizielle Indikatoren:</span>
          <div v-for="elem in sdg.ind.dns">
            <nuxt-link :to="'indicator/' + elem.slug">
              {{ elem.label }}
            </nuxt-link>
          </div>
        </div>
        <div class="okf">
          <span style="font-weight:bold">2030Watch Indikatoren:</span>
          <div v-for="elem in sdg.ind.okf">
            <nuxt-link :to="'indicator/' + elem.slug">
              {{ elem.label }}
            </nuxt-link>
          </div>
        </div>
      </div>

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
