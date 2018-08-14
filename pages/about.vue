<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über uns</h1>
        <section class="columns columns-gutter">
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
                2030Watch zeigt eine ergänzende Sichtweise, wie gut Deutschland die globalen Nachhaltigkeitsziele umsetzt. Ist Deutschland auf dem Weg einer Transformation, wie in der Agenda 2030 vorgesehen? 2030Watch untersucht diese Frage anhand von Indikatoren: Wie wird die Umsetzung zu einer Nachhaltigen Entwicklung in Deutschland gemessen? Was wird übersehen? Wie stellen wir sicher, dass das Prinzip "Leave No One Behind" (Lass niemanden zurück) nicht außer Acht gelassen wird? Dazu vergleicht 2030Watch die offiziellen Indikatoren der deutschen Nachhaltigkeitsstrategien mit zusätzlichen Indikatoren.
              </p>
              <p>
                2030Watch wird hauptsächlich durch das Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung (BMZ) im Rahmen des von Engagement Global verwalteten Förderprogramms für Entwicklungspolitische Bildung (FEB) sowie von Brot für die Welt (BfdW) und der Landesstelle für Entwicklungszusammenarbeit (LEZ) gefördert. Das vorgesehene Projektbudget für 2017-2018 beträgt ca. 214 000 Euro: 75% des Budgets werden vom FEB Programm des BMZ getragen, 23% von Brot für die Welt/EED und 2% LEZ Berlin.
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
          <h2>Open Knowledge Foundation Deutschland</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>
                Die Open Knowledge Foundation Deutschland (OKF) ist ein gemeinnütziger Verein, der sich für die Verbreitung von freiem Wissen in der Gesellschaft einsetzt. Unsere Projekte schaffen die digitale Infrastruktur für zivilgesellschaftliches Handeln und unterstützen Bürger, Journalisten und Organisationen dabei, ihr Recht auf Information, Transparenz und Beteiligung wahrzunehmen.
              </p>
              <p>
                Unsere Arbeit erstreckt sich auf die Bereiche Politik und Informationsfreiheit, Civic Tech, Forschung, kulturelle Bildung und Jugendförderung. Wir sind Teil eines internationalen Netzwerkes von Experten und Freiwilligen in 58 Ländern.
              </p>
              <p>
                Die Arbeit der OKF wird fast ausschließlich durch Einzelprojekte finanziert. Geldgeber sind die EU, staatliche Geber auf nationaler und kommunaler Ebene, Stiftungen, Nichtregierungsorganisationen sowie private Spender.
              </p>
              <p>
                Mehr Infos hier: <a href="https://okfn.de" target="_blank">okfn.de</a>
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
          <h2>Gefördert durch</h2>
          <div class="section-wrapper">
            <div class="section-img">
              <img src="../assets/img/sponsors/BMZ.png"
                alt="Logo des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung"
                width="250px"
              >
              <p class="section-description">
                Für den Inhalt dieser Publikation ist allein Open Knowledge Foundation Deutschland e.V.
                verantwortlich; die hier dargestellten Positionen geben nicht den Standpunkt von Engagement
                Global gGbH und dem Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung wieder.
              </p>
            </div>
            <div class="section-img">
              <img src="../assets/img/sponsors/BrotfuerdieWelt.svg"
                alt="Logo von Brot für die Welt"
                width="150px"
              >
            </div>
            <div class="section-img">
              <img src="../assets/img/sponsors/LEZ.png"
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
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Claudia Schwegmann',
          imgUrl: require('~/assets/img/team/claudia.jpg'),
          role: 'Gründerin',
          email: 'claudia.schwegmann@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Saadya Windauer',
          imgUrl: require('~/assets/img/team/saadya.jpg'),
          role: 'Projektmanagerin',
          email: 'saadya.windauer@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        },
        {
          name: 'Jennifer Gebske',
          imgUrl: require('~/assets/img/team/jenny.jpg'),
          role: 'Entwicklerin',
          email: 'jennifer.gebske@okfn.de',
          twitter: 'https://twitter.com/2030WatchDe'
        }]
      }
    },
    components: {
      TeamMember
    },
    head () {
      return {
        title: 'Über uns | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Über uns' }
        ]
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

  .section-description {
    text-align: left;
    font-size: 0.7rem;
    line-height: 1.0rem;
    color: gray;
  }
</style>
