<template>
  <div class="findings">
    <h2>Ein erweitertes Nachhaltigkeitsbild</h2>
    <p>
      Vergleicht man die offiziellen Daten der Bundes&shy;regierung (Deutsche Nachhaltigkeitstrategie (DNS))
      mit dem von uns vorgeschlagenen erweiterten Indikatoren&shy;katalog zeigt sich, dass der
      Handlungsbedarf viel größer ist als was die DNS Indikatoren sagen. Insgesamt ergibt sich
      folgende Gegenüberstellung:
    </p>
    <table>
      <thead>
        <tr>
          <th>Nachhaltigkeit<span class="mobile-invisible">sstufe</span></th>
          <th class="mobile-invisible">SDG-Ziel erreicht zu</th>
          <th><span class="mobile-invisible">Anzahl &ndash; </span>Offiziell</th>
          <th><span class="mobile-invisible">Anzahl &ndash; </span>2030Watch</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[0] }" /> niedrig</td>
          <td v-html="'&ensp;' + format(0) + '&#8239;&mdash;&#8239;' + format(40)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['geringe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['geringe Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[1] }" /> mittel</td>
          <td v-html="format(40) + '&#8239;&mdash;&#8239;' + format(80)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['mittlere Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['mittlere Nachhaltigkeit']" /></td>
        </tr>
        <tr>
          <td><span class="icon mobile-invisible" :style="{ 'background-color': stepsColors[2] }" /> hoch</td>
          <td v-html="format(80) + '&#8239;&mdash;&#8239;' + format(100)" class="mobile-invisible">
          <td><span class="icon dns" v-for="item in countingsDNS['hohe Nachhaltigkeit']" /></td>
          <td><span class="icon okf" v-for="item in countingsOKF['hohe Nachhaltigkeit']" /></td>
        </tr>
      </tbody>
    </table>
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
