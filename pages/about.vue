<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über uns</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Wer steckt hinter 2030 Watch? Was treibt uns an? Hier erfährst du mehr</p>
          </div>
          <div>
            <!-- <strong>halleo gdg</strong> -->
          </div>
        </section>
      </div>
    </header>
    <div class="content">
        <section>
          <h2>2030 Watch</h2>
          <div class="section-wrapper">
            <div class="section-text">
              <p>Das Projektbudget für 2015 war 55.620 Euro. 73% des Budgets wurden vom BMZ getragen. Die übrigen Finanzgeber waren Welthungerhilfe (9%), Brot für die Welt /EED (9%) Terre des Hommes (7%) und katholischer Fonds (ca. 2%). Der Rest (weniger als 1%) sind Eigenmittel. Das Budget für 2016 ist vorläufig. Nach diesem Budget ist unser Hauptförderer weiterhin das BMZ im Rahmen des von Engagement Global verwalteten Programm für Entwicklungspolitische Bildung (FEB), sowie Brot für die Welt und die Welthungerhilfe.</p> 
              <p>Das Projektbudget für 2016 war 62.900 Euro. 69% des Budgets wurden vom FEB Programm des BMZ getragen. Die übrigen Finanzgeber waren Welthungerhilfe (9%), Brot für die Welt/EED (15%) und LEZ (2,5%). Die verbleibenden 3 % der Mittel sind kleine Zuwendungen vom Forum Ziviler Friedensdienst, von der Deutschen Stiftung Weltbevölkerung und von Transparency International für die SDG Konferenz im Mai 2016 sowie private Spenden.</p>
            </div>
            <div class="section-img">
              <img src="../assets/img/2030watch_logo.png" alt="2030 Watch Logo">
            </div>
          </div>
        </section>
        <section>
          <h2>Open Knowledge Foundation</h2>
          <div class="section-wrapper">
            <div class="section-text">
               <p>Die Open Knowledge Foundation Deutschland (OKF DE) ist ein gemeinnütziger Verein, der sich für die Verbreitung von freiem Wissen in der Gesellschaft einsetzt. Unsere Projekte schaffen die digitale Infrastruktur für zivilgesellschaftliches Handeln und unterstützen Bürger, Journalisten und Organisationen dabei, ihr Recht auf Information, Transparenz und Beteiligung wahrzunehmen. Wir sind Teil eines internationalen Netzwerkes von Experten und Freiwilligen in 58 Ländern.</p>
               <p>Freies Wissen bildet die Grundlage für eine offene und demokratische Gesellschaft. Es ermöglicht soziale Teilhabe, Entwicklung, Austausch, Bildung und neue Geschäftsmodelle. Unsere Arbeit erstreckt sich auf die Bereiche Politik und Informationsfreiheit, Civic Tech, Forschung, kulturelle Bildung und Jugendförderung.</p>
               <p>Wir realisieren Veranstaltungen, Workshops, Booksprints, Hackdays und Vorträge rund um das offene Wissen und bieten individuelle Unterstützung und Beratung durch unser 20-köpfiges Team.Die Arbeit der OKF DE wird fast ausschließlich durch Einzelprojekte finanziert. Geldgeber sind die EU, staatliche Geber auf nationaler und kommunaler Ebene, Stiftungen, Nichtregierungsorganisationen sowie private Spender. Eine genaue Aufstellung unserer Finanzen findet Du hier.</p>
            </div>
            <div class="section-img">
              <img src="../assets/img/okf_logo.png" alt="OKFN Logo">
            </div>
          </div>
        </section>
         <section>
          <h2>Team</h2>
          <div class="section-wrapper">
            <div class="columns-rows">
              <team-member></team-member>
              <team-member></team-member>
            </div>
              <div class="columns-rows">
              <team-member></team-member>
              <team-member></team-member>
            </div>
       
          </div>
        </section>
         <section>
          <h2>Förderung &amp; Partner</h2>
          <div>
              2030 Watch wird von verschiedenene Trägerorganisationen gefördert. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic.
            </div>
          <div class="section-wrapper">
            <div class="section-img">
              <img src="http://via.placeholder.com/250x250" alt="Förderer Logo">
            </div>
             <div class="section-img">
              <img src="http://via.placeholder.com/250x250" alt="Förderer Logo">
            </div>
             <div class="section-img">
              <img src="http://via.placeholder.com/250x250" alt="Förderer Logo">
            </div>
          </div>
        </section>
    </div>
  </div>
</template>

<script>
  import TeamMember from '~/pages/team/TeamMember.vue'
  export default {
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
      TeamMember
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/base";

  section {
    &:nth-of-type(3) {
      .section-wrapper {
        padding-top: $spacing;
        justify-content: space-around;
      }
    }

    &:nth-of-type(4) {
      .section-wrapper {
        padding-top: $spacing;
      }
    }
  }

</style>