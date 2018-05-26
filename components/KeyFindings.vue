<template>
  <div class="findings">
    <h2>Ein erweitertes Nachhaltigkeitsbild</h2>
    <p>Vergleicht man die offiziellen Daten der Bundes&shy;regierung (DNS) mit dem von uns vorgeschlagenen erweiterten Indikatoren&shy;katalog zeigt sich, dass die Nachhaltig&shy;keitsziele nur unzureichend erfüllt werden. Insgesamt ergibt sich folgende Gegenüberstellung:</p>
    <table>
      <thead>
        <tr>
          <th>Nachhaltigkeit<span class="mobile-invisible">sstufe</span></th>
          <th class="mobile-invisible">SDG-Ziel erreicht zu</th>
          <th><span class="mobile-invisible">Anzahl &ndash; </span>DNS</th>
          <th><span class="mobile-invisible">Anzahl &ndash; </span>2030Watch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[4] }" /> sehr hoch</td>
          <td v-html="format(80) + '&#8239;&mdash;&#8239;' + format(100)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['sehr hohe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['sehr hohe Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[3] }" /> hoch</td>
          <td v-html="format(60) + '&#8239;&mdash;&#8239;' + format(80)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['hohe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['hohe Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[2] }" /> mittel</td>
          <td v-html="format(40) + '&#8239;&mdash;&#8239;' + format(60)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['mittlere Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['mittlere Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[1] }" /> niedrig</td>
          <td v-html="format(20) + '&#8239;&mdash;&#8239;' + format(40)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['geringe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['geringe Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[0] }" /> sehr niedrig</td>
          <td v-html="'&ensp;' + format(0) + '&#8239;&mdash;&#8239;' + format(20)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['sehr geringe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['sehr geringe Nachhaltigkeit']" /></td>
        </tr>
      </tbody>
    </table>
    <!-- <p>Den größten Handlungsbedarf sehen wir bei den Indikatoren »{{ first.label }}« und »{{ last.label }}«. Dort sind ist der Fortschritt zwischen dem offiziellem und dem inoffiziellem Indikatorenset am größten (<span v-html="format(first.diff)" />/<span v-html="format(last.diff)" />).</p> -->
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import VisIndicator from '~/components/VisIndicator.vue'
  import _ from 'lodash'
  import format from '~/assets/js/format.js'

  export default {
    computed: {
      ...mapState([
        'sdgs'
      ]),
      ...mapGetters([
        'stepsColors'
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
    table {
      @include media-query($on-desktop) {
        & {
          margin: $spacing;
        }
      }

      th {
        padding: 5px 0;
      }

      td {
        vertical-align: top;
        padding: 5px 0;
        font-family: $font-family-modern;

        .icon {
          display: inline-block;
          border-radius: 100%;
          width: 13px;
          height: 13px;
          margin-right: 10px;

          &.dns {
            background-color: $color-dns;
          }

          &.okf {
            background-color: $color-okf;
          }
        }
      }
    }
  }
</style>
