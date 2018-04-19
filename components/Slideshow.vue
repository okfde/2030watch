<template>
  <div class="intro">
    <header>
      <h2>Warum wir andere Indikatoren brauchen um Fortschritt zu messen</h2>
    </header>
    <section>
      <div>
        <div v-if="slide === 0">
          <p>Das Nachhaltigkeitsziel SDG 5 steht für die Gleichstellung der Geschlechter. Im Zuge der gesetzlichen Vorschriften sind bestimmte Unternehmen in Deutschland seit 2016 dazu verpflichtet, mindestens 30% Frauenanteil in den Aufsichtsräten zu erreichen. Auch die Bundesregierung dasselbe Ziel für SDG 5 gesetzt, jedoch bis 2030.</p>
        </div>
        <div v-else-if="slide === 1">
          <p>Die Vereinten Nationen sprechen von gleichberechtigter Partizipation von Frauen in Politik, Wirtschaft und öffentlichem Leben. Aus Sicht von 2030Watch ist daher das Ziel von 30% der DNS nicht ambitioniert genug. Mit der Betrachtung von lediglich 106 Unternehmen nimmt die DNS außerdem nur einen unzureichenden Bereich der Teilhabe in den Blick.</p>
        </div>
        <div v-else-if="slide === 2">
          <p>2030Watch fordert im Einklang mit SDG 5 einen Frauenanteil von 50% in Aufsichtsräten und anderen Führungsebenen. Ergänzend zur Wirtschaft ist 2030Watch das Thema der politischen Partizipation von Frauen ebenso wichtig. Daher ergänzt 2030Watch die DNS um die Betrachtung des Frauenanteils in Parlamenten. Auch beim Anteil von Frauen in Parlamenten wird ein starker Handlungsbedarf Deutschlands offensichtlich.</p>
        </div>
        <div v-else>
          <p>Viele weitere spannende Stories und Ergänzen finden sich in den weiteren SDGs. Lernt, diskutiert, entdeckt!</p>
        </div>
      </div>
      <div>
        Grafik
      </div>
    </section>
    <footer>
      <span class="btn">Weiter</span>
    </footer>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        slide: 0
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    components: {
    },
    mounted () {
    }
  }
</script>

<style lang="scss">
  .intro {
    background-color: #fff;
    border: 1px solid #F1F2F4;
    border-radius: 2px;
    padding: 1rem;

    header, section, footer {
      width: 100%;
    }

    section {
      display: flex;

      div {
        flex: 1;
      }
    }

    footer {
      text-align: right;

      span {
        display: inline-block;
      }
    }
  }

</style>
