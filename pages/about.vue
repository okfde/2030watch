<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über uns</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Wer steckt hinter 2030Watch? Was treibt uns an? Hier erfährst du mehr</p>
          </div>
        </section>
      </div>
    </header>
    <div class="content">

      <section>
        <div class="wrapper">
          <h2>2030Watch</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>
                2030Watch zeigt eine alternative Sichtweise wie gut Deutschland
                die globalen Nachhaltigkeitsziele umsetzt. Ist Deutschland auf
                dem Weg einer Transformation wie in der Agenda 2030 vorgesehen?
                2030Watch untersucht diese Fragen anhand von Indikatoren: Wie
                wird Nachhaltigkeit gemessen und wie könnte oder sollte man
                Nachhaltigkeit messen? 2030Watch vergleicht die offiziellen
                Indikatoren der deutschen Nachhaltigkeitsstrategien mit
                alternativen Indikatoren.
              </p>
              <p>
                2030Watch wird hauptsächlich durch das BMZ im Rahmen des von
                Engagement Global verwalteten Programms für Entwicklungspolitische
                Bildung (FEB) sowie von Brot für die Welt und der Landesstelle
                für Entwicklungszusammenarbeit gefördert. Das vorgesehene
                Projektbudget für 2017-2018 beträgt ca. 214 000 Euro: 75% des
                Budgets wurden vom FEB Programm des BMZ getragen, 23% von Brot
                für die Welt/EED und LEZ (2,0%).
              </p>
            </div>
            <div class="section-img">
              <img src="../assets/img/2030watch_logo.png" alt="2030Watch Logo">
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <h2>Team</h2>
          <div class="section-wrapper">
            <team-member
              v-for="(member, key) in team"
              :key="key"
              :member="member"
            ></team-member>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <h2>Open Knowledge Foundation</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>
                Die Open Knowledge Foundation Deutschland (OKF DE) ist ein
                gemeinnütziger Verein, der sich für die Verbreitung von freiem
                Wissen in der Gesellschaft einsetzt. Unsere Projekte schaffen
                die digitale Infrastruktur für zivilgesellschaftliches Handeln
                und unterstützen Bürger, Journalisten und Organisationen dabei,
                ihr Recht auf Information, Transparenz und Beteiligung wahrzunehmen.
              </p>
              <p>
                Unsere Arbeit erstreckt sich auf die Bereiche Politik und
                Informationsfreiheit, Civic Tech, Forschung, kulturelle Bildung
                und Jugendförderung.
              </p>
              <p>
                Wir sind Teil eines internationalen Netzwerkes von Experten und
                Freiwilligen in 58 Ländern.
              </p>
              <p>
                Die Arbeit der OKF DE wird fast ausschließlich durch Einzelprojekte
                finanziert. Geldgeber sind die EU, staatliche Geber auf nationaler
                und kommunaler Ebene, Stiftungen, Nichtregierungsorganisationen
                sowie private Spender.
              </p>
              <p>
                Mehr Infos hier: <a href="https://okfn.de">okfn.de</a>
              </p>
            </div>
            <div class="section-img">
              <img src="../assets/img/okf_logo.png" alt="OKFN Logo">
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <h2>Unsere Finanzpartner</h2>
          <div class="section-wrapper">
            <div class="section-img">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BMZ_Logo.svg/800px-BMZ_Logo.svg.png"
                alt="Logo des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung"
                width="250px"
              >
            </div>
            <div class="section-img">
              <img src="https://www.brot-fuer-die-welt.de/typo3conf/ext/as_template/Resources/Public/Images/logo.svg"
                alt="Logo von Brot für die Welt"
                width="150px"
              >
            </div>
            <div class="section-img">
              <img src="http://a4f.be-fair.eu/uploads/File/wtf_lez.gif"
                alt="Logo der Landesstelle für Entwicklungszusammenarbeit"
                width="250px"
              >
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="wrapper">
          <h2>Finanzberichte</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>
                Coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import TeamMember from '~/components/TeamMember.vue'

  export default {
    data () {
      return {
        team: [{
          name: 'Rebecca Varghese Buchholz',
          imgUrl: require('~/assets/img/team/rebecca.jpg'),
          role: 'Projektleitung',
          email: 'rebecca.buchholz@okfn.de',
          twitter: 'https://twitter.com/okfde'
        },
        {
          name: 'Claudia Schwegmann',
          imgUrl: require('~/assets/img/team/claudia.jpg'),
          role: 'Gründerin',
          email: 'claudia.schwegmann@okfn.org ',
          twitter: 'https://twitter.com/okfde'
        },
        {
          name: 'John David Langlo',
          imgUrl: require('~/assets/img/team/john.jpg'),
          role: 'Studentischer Mitarbeiter',
          email: 'john.langlo@okfn.de',
          twitter: 'https://twitter.com/okfde'
        },
        {
          name: 'Saadya Windauer',
          imgUrl: require('~/assets/img/team/saadya.jpg'),
          role: 'Projektmanagerin',
          email: 'saadya.windauer@okfn.de',
          twitter: 'https://twitter.com/okfde'
        },
        {
          name: 'Jennifer Gebske',
          imgUrl: require('~/assets/img/team/jenny.jpg'),
          role: 'Entwicklerin',
          email: 'jennifer.gebske@okfn.de',
          twitter: 'https://twitter.com/okfde'
        }]
      }
    },
    components: {
      TeamMember
    },
    head () {
      return {
        title: 'Über uns | 2030Watch'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .content {
    section {
       &:nth-child(even) {
        background: #fff;
      }

      &:nth-of-type(2) {
        .section-wrapper {
          padding-top: $spacing;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
      }

      &:nth-of-type(4) {
        .section-wrapper {
          padding-top: $spacing;
        }
      }
    }
  }
</style>
