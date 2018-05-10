<template>
  <div class="findings">
    <section class="key-findings">
      <h2>Zusammenfassung: Ein erweitertes Nachhaltigkeitsbild</h2>
      <p>Vergleicht man die offiziellen Daten der Bundesregierung (DNS) mit dem von uns vorgeschlagenen erweiterten Indikatorenkatalog zeigt sich, dass die Nachhaltigkeitsziele nur unzureichend erfüllt werden. Insgesamt ergibt sich folgende Gegenüberstellung:</p>
      <div class="columns columns-gutter">
        <table>
            <tr>
              <th class="caption">Nachhaltigkeitsstufe</th>
              <th class="caption">SDG-Ziel erreicht zu</th>
              <th class="caption">Anzahl – DNS</th>
              <th class="caption">Anzahl – 2030 Watch</th>
            </tr>
            <tr>
              <td><img class="arrow-very-high" src="../assets/icons/arrow.svg">sehr hoch</td>
              <td>0% - 20%</td>
              <td><div class="dns" v-for="item in countingsDNS['sehr hohe Nachhaltigkeit']"></div></td>
              <td><div class="okf" v-for="item in countingsOKF['sehr hohe Nachhaltigkeit']"></div></td>
            </tr>
            <tr>
              <td><img class="arrow-high" src="../assets/icons/arrow.svg">hoch</td>
              <td>20% - 40%</td>
              <td><div class="dns" v-for="item in countingsDNS['hohe Nachhaltigkeit']"></div></td>
              <td><div class="okf" v-for="item in countingsOKF['hohe Nachhaltigkeit']"></div></td>
            </tr>
            <tr>
              <td><img class="arrow-medium" src="../assets/icons/arrow.svg">mittel</td>
              <td>40% - 60%</td>
              <td><div class="dns" v-for="item in countingsDNS['mittlere Nachhaltigkeit']"></div></td>
              <td><div class="okf" v-for="item in countingsOKF['mittlere Nachhaltigkeit']"></div></td>
            </tr>
            <tr>
              <td><img class="arrow-low" src="../assets/icons/arrow.svg">niedrig</td>
              <td>60% - 80%</td>
              <td><div class="dns" v-for="item in countingsDNS['geringe Nachhaltigkeit']"></div></td>
              <td><div class="okf" v-for="item in countingsOKF['geringe Nachhaltigkeit']"></div></td>
            </tr>
            <tr>
              <td><img class="arrow-very-low" src="../assets/icons/arrow.svg">sehr niedrig</td>
              <td>80% - 100%</td>
              <td><div class="dns" v-for="item in countingsDNS['sehr geringe Nachhaltigkeit']"></div></td>
              <td><div class="okf" v-for="item in countingsOKF['sehr geringe Nachhaltigkeit']"></div></td>
            </tr>
        </table>
      </div>
      <div>
        <p>
          Den größten Handlungsbedarf sehen wir bei den Indikatoren »{{ first.label }}« und »{{ last.label }}«. Dort sind ist der Fortschritt zwischen dem offiziellem und dem inoffiziellem Indikatorenset am größten (<span v-html="format(first.diff)" />/<span v-html="format(last.diff)" />).
        </p>
      </div>
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
  @import "~@/assets/style/base";

  .findings {
    
    header, section, footer {
      width: 100%;
    }

    .key-findings {
      margin: 0 0 $spacing 0;

      table {
        margin: $spacing;
        font-size: 0.95rem;
        
        th {
          padding: 5px;
          text-align: left;
          font-size: 0.8em;
        }

        td  {
          padding: 5px;
          font-family: $font-family-modern;
          font-size: 0.8rem;

          img {
            margin-right: 10px;

             &.arrow-very-high {
              width: 12px;
              height: 12px;
              transform: rotate(270deg);
            }

             &.arrow-high {
              width: 12px;
              height: 12px;
              transform: rotate(-45deg);
            }
            
             &.arrow-medium {
              width: 12px;
              height: 12px;
            }

             &.arrow-low {
              width: 12px;
              height: 12px;
              transform: rotate(45deg);
            }

             &.arrow-very-low {
              width: 12px;
              height: 12px;
              transform: rotate(90deg);
            }
          }

          div {
            display: inline-block;
            border-radius: 100%;
            width: 15px;
            height: 15px;
            margin-right: 10px;
            border: 2px solid #f9f9f9;

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
  }
</style>
