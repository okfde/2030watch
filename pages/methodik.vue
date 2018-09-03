<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Methodik</h1>
        <p>Hier findest du Informationen zu unserer Methodik</p>
      </div>
    </header>
    <div class="content">
      <section id="methode" class="wrapper">
        <Accordeon :faqs="methode" />
      </section>
    </div>
  </div>
</template>

<script>
  import Accordeon from '~/components/Accordeon.vue'
  export default {
    data () {
      return {
        methode: [{
          title: 'Welche Indikatoren werden dargestellt?',
          id: 'methode-indikatoren',
          body: `<p>Die offiziellen Indikatoren wurden ausschließlich von der Deutschen Nachhaltigkeitsstrategie übernommen. Die Deutsche Nachhaltigkeitsstrategie beurteilt die Veränderunge einer Indikatorentwicklung  mit Wetterzeichen: Sonne (nahezu erreicht), Wolke/Sonne (richtige Richtung), Wolke (Lücken), Donner (falsche Richtung) und zeigt so den Trend, ob sich der Indikator dem Zielwert nähert oder nicht. Wir von 2030Watch haben die Indikatoren in ein eigenes Bewertungssystem übersetzt, welches versucht, darzustellen, wie nah ein Indikator dem Ziel für das Jahr 2030 ist.</p>
          <p>Auf 2030-watch.de werden hierzu weitere Indikatoren hinzugezogen, die größtenteils aus der von der Zivilgesellschaft (NGOs) als Fortschrittsmaßstäbe von Nachhaltigkeit vorgeschlagen werden.</p>`
        },
        {
          title: 'Wie hat 2030Watch Indikatoren ausgewählt?',
          id: 'methode-indikatoren-auswahl',
          body: `<p>Die ergänzenden Indikatoren hat 2030Watch geprüft und nach eigener Bewertung ausgewählt. Die Auswahl beruht auf unserer Recherche, Indikatorvorschlägen nichtstaatlicher Akteure und auf Gesprächen mit Expert*innen aus Zivilgesellschaft und Forschung.</p>
          <p>Unsere Auswahlkriterien sind:</p>
          <p>1. Das SDG Unterziel ist für Deutschland relevant.</p>
          <p>2. Deutschland hat aus offizieller Sicht zu diesem Unterziel Handlungsbedarf. Handlungsbedarf besteht, wenn eines der folgenden Kriterien erfüllt ist:</p>
          <p>a. Es gibt einen offiziellen IAEG-SDG (Inter-Agency and Expert Group on Sustainable Development Goal) oder EU2020 Indikator, bei dem Deutschland mehr als 20% vom Zielwert entfernt ist.</p>
          <p>b. Die Bundesregierung bezeichnet dieses Unterziel in der Nachhaltigkeitsstrategie als relevant, hat aber keinen eigenen Indikator.</p>
          <p>c. Die Bundesregierung bezeichnet dieses Ziel selbst in offiziellen Verlautbarungen (inkl. internationalen Abkommen) als relevant, hat aber keinen eigenen Indikator.</p>
          <p>3. Deutschland hat aus zivilgesellschaftlicher Sicht zu diesem Unterziel großen Handlungsbedarf. In öffentlichen Aufrufen von respektierten Organisationen wird ein Indikator zu diesem Thema gefordert.</p>
          <p>4. Disaggregierte Daten "Leave no one behind"</p>
          <p>a. Gender</p>
          <p>b. Kinder, Jugendliche, Erwachsene, Senioren</p>
          <p>c. Menschen mit Migrationshintergrund</p>
          <p>d. Menschen mit Behinderungen</p>
          <p>5. Vollständigkeit der Daten: Daten sind für Deutschland verfügbar, werden regelmäßig erhoben und sind in 2013 oder später erhoben worden.</p>
          <p>6. Datenqualität: Daten stammen von offiziellen statistischen Quellen. Die Bewertungsmethode ist idealerweise an internationalen Vereinbarungen – good practices – angelehnt.</p>`
        },
        {
          title: 'Wie hat 2030Watch die Indikatoren eingeteilt (Kategorien)?',
          id: 'methode-einteilung-kategorien',
          body: `<p>Indikatoren wurden in folgende Kategorien eingeteilt:</p>
          <p><span style="text-decoration:underline;">Neuer Indikator:</span> Dieser Indikator legt ein neues Thema vor, das noch nicht in der Deutschen Nachhaltigkeitsstrategie beinhaltet ist.</p>
          <p><span style="text-decoration:underline">Modifizierter Zielwert:</span>  Dieser Zielwert ist unzureichend und 2030Watch schlägt einen neuen Zielwert vor.</p>
          <p><span style="text-decoration:underline;">Nicht berechenbar:</span> Für diesen Indikator kann man auf Grund fehlender Daten und Angaben der Ziel- oder Ausgangswert nicht berechnet werden.</p>`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt eines Indikators?',
          id: 'methode-fortschrittsmessung',
          body: `<p>Wir berechnen für jeden Indikator, wie weit er vom jeweiligen Zielwert entfernt ist. Der Zielwert bezieht sich auf das Jahr 2030. Wir berechnen zwei Größen und setzen diese ins
          Verhältnis miteinander: Fortschritt (%) = (Spanne <b>a</b> (<b>a</b>ktuell=Anfangswert-aktueller Wert)/Spanne <b>F</b> (<b>F</b>ortschritt=Anfangswert-Zielwert))*100. So wird eine Vergleichbarkeit der Fortschritte zwischen den einzelnen Indikatoren hergestellt.</p>`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt zur Erreichung von einem Nachhaltigkeitsziel?',
          id: 'methode-fortschritt-nachhaltigkeit',
          body: `<p>Der Fortschritt bezieht sich auf das definierte Ziel für das Jahr 2030. Der offizielle Fortschritt wird mit einem Mittelwert von allen offiziellen Indikatorenwerten pro jeweiligem SDG berechnet.
          Der Fortschritt auf der Seite von 2030Watch wird über den Mittelwert der jeweiligen erweiterten Indikatorenliste berechnet: also alle berechenbaren offiziellen Indikatoren plus neue 2030Watch Indikatoren (um Dopplungen zu vermeiden, werden Indikatoren mit modifizierten Zielwert nur einmal berechnet).</p>
          <p>Wichtig zu betonen, ist, dass wir nicht behaupten, diese Fortschrittsberechnung sei eine objektive Darstellung. Die Berechnungen sollen dazu dienen, einen Vergleich zwischen Nachhaltigkeitsbildern zu ermöglichen und stellen einen Debattenbeitrag dar.</p>`
        },
        {
          title: 'Wie werden Ausgangswerte berechnet?',
          id: 'methode-ausgangswerte',
          body: `<p>Wir lehnen unsere Auswahl an gängige Vorgehen an, wie zum Beispiel das von <a href="http://www.sdgindex.org/" target="_blank">Sustainable Development Solutions Network</a> (SDSN). Sobald ein eindeutiger Ausgangswert in den Datenreihen definiert ist, übernehmen wir diesen. Wenn dies nicht der Fall ist, wenden wir die Methode von <a href="http://www.sdgindex.org/" target="_blank">SDSN</a> an: von den internationalen Länderdaten werden 2,5% der Anzahl der Werte gestrichen. Wenn es also 40 Beobachtungen gibt (Daten für 40 Länder), kann der niedrigste Werte gestrichen werden. Für Indikatoren ohne international vergleichbare Daten und ohne natürlichen Ausgangswert, orientieren wir uns an dem <a href="http://ec.europa.eu/eurostat/documents/3217494/8113874/KS-EZ-17-001-EN-N.pdf/c810af1c-0980-4a3b-bfdd-f6aa4d8a004e" target="_blank">Basisjahr 2008 der EU2020 Strategie</a>.</p>`
        },
        {
          title: 'Wie werden Zielwerte berechnet?',
          id: 'methode-zielwerte',
          body: `<p>Bei der Verwendung der Indikatoren der Deutschen Nachhaltigkeitsstrategie übernehmen wir die offiziellen Zielwerte.</p>
          <p>Für die ergänzenden Indikatoren wird der Zielwert von uns ausgewählt - beruhend auf internationalen Abkommen, Fachliteratur oder Expertengesprächen.</p>
          <p>In den Fällen, in denen wir keinen Zielwert haben, nehmen wir den Durchschnitt der "5 Top Performer", sprich die fünf besten Werte der vorhandenen Länderreihe.</p>`
        },
        {
          title: 'Woher kommen die aktuellen Werte?',
          id: 'methode-aktuellen-werte',
          body: `<p>Wir nehmen die aktuellsten verfügbaren Werte. Das bedeutet für die Werte der Deutschen Nachhaltigkeitsstrategie, dass wir in einigen Fällen aktuellere Werte als die offiziellen haben, wenn zum Beispiel die OECD-Werte aktueller sind.</p>`
        },
        {
          title: 'Welche Länder werden zum Vergleich herangezogen?',
          id: 'methode-laendervergleich',
          body: `<p>Wir nehmen wenn möglich Daten der EU28 oder OECD mit Präferenz für den Datensatz mit den aktuellsten Werten.</p>`
        }
        ]
      }
    },
    components: {
      Accordeon
    },
    head () {
      return {
        title: 'Über das Projekt | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Über das Projekt' }
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
    }
  }

  ul li, ol li {
    list-style: inherit;
    > ol li {
      list-style-type: lower-latin;
    }
  }

  ol {
    padding-left: 1rem;
    margin-left: 0;
  }

  section > p > span {
    text-decoration: underline;
  }

  .formula {
    text-align: center;
  }
</style>
