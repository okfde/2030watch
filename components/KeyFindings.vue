<template>
  <div class="findings">
    <header>
      <h2>Zusammenfassung: Ein alternatives Nachhaltigkeitsbild</h2>
    </header>
    <section class="">
      <ul>
        <li>
          <p>
            Eine sehr hohe Nachhaltigkeit haben laut DNS {{ countingsDNS['sehr hohe Nachhaltigkeit'] }} SDGs. Die OKF bewertet {{ countingsOKF['sehr hohe Nachhaltigkeit'] }} so positiv. Eine hohe Nachhaltigkeit haben bei DNS {{ countingsDNS['hohe Nachhaltigkeit'] }} bzw. {{ countingsOKF['hohe Nachhaltigkeit'] }} SGGs bei der OKF. Mittel werden {{ countingsDNS['mittlere Nachhaltigkeit'] }} und {{ countingsOKF['mittlere Nachhaltigkeit'] }} SDGs bewertet. Eine geringe Nachhaltigkeit haben {{ countingsDNS['geringe Nachhaltigkeit'] }} und {{ countingsOKF['geringe Nachhaltigkeit'] }} SDGs. Der DNS zufolge müssen {{ countingsDNS['sehr geringe Nachhaltigkeit'] }} SDGs mit sehr geringer Nachhaltigkeit bewertet werden. Die OKF bewertet {{ countingsOKF['sehr geringe Nachhaltigkeit'] }} als sehr gering nachhaltig.
          </p>
        </li>
        <li>
          <p>
            Den größten Handlungsbedarf sieht die OKF bei den Indikatoren »{{ first.label }}« und »{{ last.label }}«. Dort sind ist der Fortschritt zwischen dem offiziellem und dem inoffiziellem Indikatorenset am größten (<span v-html="format(first.diff)" />/<span v-html="format(last.diff)" />).
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import VisIndicator from '~/components/VisIndicator.vue'
  import _ from 'lodash'
  import format from '~/assets/js/format.js'

  export default {
    computed: {
      ...mapState([
        'sdgs'
      ]),
      difference: function () {
        const diff = _.map(this.sdgs, sdg => {
          return {
            'label': sdg.labelShort,
            'diff': sdg.values.dns - sdg.values.okf
          }
        })
        return _.sortBy(diff, 'diff')
      },
      first: function () {
        return this.difference[0]
      },
      last: function () {
        return this.difference[this.difference.length - 1]
      },
      ratingsOKF: function () {
        return _.map(this.sdgs, 'rating.okf')
      },
      ratingsDNS: function () {
        return _.map(this.sdgs, 'rating.dns')
      },
      countingsOKF: function () {
        return _.countBy(this.ratingsOKF)
      },
      countingsDNS: function () {
        return _.countBy(this.ratingsDNS)
      }
    },
    methods: {
      format: format
    },
    components: {
      VisIndicator
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/variables";

  .findings {
    background-color: #fff;
    border: 1px solid #F1F2F4;
    border-radius: 2px;
    padding: 3rem;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.25);

    header, section, footer {
      width: 100%;
    }
  }
</style>
