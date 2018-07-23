<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über das Projekt</h1>
        <p>Hier findest du Hintergrundinformationen und FAQs zu unserem Anliegen, unseren Zielen und unserer Methodik</p>
      </div>
    </header>
    <div class="content">
      <section class="wrapper">
        <h2>Hintergrund</h2>
        <Accordeon :faqs="background" />
      </section>
      <section>
        <div class="wrapper">
          <h2>Ziel des Projektes</h2>
          <Accordeon :faqs="ziel" />
        </div>
      </section>
      <section id="methode" class="wrapper">
        <h2>Unsere Methode</h2>
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
        background: [{
          title: 'Was ist die Agenda 2030?',
          id: 'background-agenda-2030',
          body: `<p>Die Agenda 2030 wurde im September 2015 auf einem Gipfel der Vereinten Nationen von allen Mitgliedsstaaten verabschiedet. Mit der Agenda 2030 für Nachhaltige Entwicklung hat sich die internationale Staatengemeinschaft dafür ausgesprochen, die globalen Herausforderungen, wirtschaftlichen Fortschritt im Einklang mit sozialer Gerechtigkeit und  im Rahmen der ökologischen Grenzen der Erde zu gestalten, gemeinsam zu lösen.</p>
          <p>Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für Nachhaltige Entwicklung (Sustainable Development Goals, SDGs). 193 Länder haben sich verpflichtet, die Agenda bis zum Jahr 2030 umzusetzen.</p>`
        },
        {
          title: 'Was sind die globalen nachhaltigen Entwicklungsziele (SDGs)?',
          id: 'background-sdgs',
          body: `<p>Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung, 169 Unterzielen und 232 Indikatoren. Der SDG-Katalog ist auf Basis eines globalen partizipativen Prozesses entwickelt worden. Die 17 SDGs berücksichtigen erstmals alle drei Dimensionen der Nachhaltigkeit – Soziales, Umwelt, Wirtschaft – gleichermaßen. Ihnen sind fünf Kernbotschaften als handlungsleitende Prinzipien vorangestellt: Mensch, Planet, Wohlstand, Frieden und Partnerschaft. Im Englischen spricht man von den "5 Ps": People, Planet, Prosperity, Peace, Partnership.</p>`
        },
        {
          title: 'Wer soll die 2030 Agenda umsetzen?',
          id: 'background-umsetzung',
          body: `<p>Die 2030 Agenda ist eine freiwillige Selbstverpflichtung der Regierungen aus 193 Ländern. Dazu “übersetzen” alle beteiligten Länder den globalen SDG-Katalog in einen eigenen Fahrplan, um die globalen Nachhaltigkeitsziele umzusetzen. In Deutschland ist die Deutsche Nachhaltigkeitsstrategie (DNS) der zentrale Umsetzungsrahmen der Agenda 2030.</p>
          <p>Die United Nations (UN) spielt bei der Koordinierung der 2030 Agenda und der Weiterentwicklung des SDG-Indikatorenkatalogs eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler*innen und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen, allerdings gibt es dazu keine formelle Selbstverpflichtung.</p>`
        }
        ],
        ziel: [{
          title: 'Was ist das Ziel von 2030Watch?',
          id: 'ziel-2030Watch',
          body: `<p>Die Vision von 2030Watch ist es, dass Deutschland die globalen Nachhaltigkeitsziele ambitioniert umsetzt.</p>
          <p>Um diese Vision zu verfolgen, will 2030Watch anhand von Indikatoren ein Bild zeichnen, wie erfolgreich Deutschland die SDGs umsetzt. Indem 2030Watch offizielle Indikatoren der Deutschen Nachhaltigkeitsstrategie mit Indikatoren aus der Zivilgesellschaft ergänzt, wollen wir</p>
          <p>– eine kritische Sichtweise über den Stand der Umsetzung von Nachhaltigkeit in Deutschland anbieten,</p>
          <p>– Handlungsfelder beleuchten,</p>
          <p>– die Forderung "Leave no one behind" (Lass niemanden zurück) der Agenda 2030 erfüllen und</p>
          <p>– die internationale Verantwortung Deutschlands als hochentwickeltes Industrieland hervorheben.</p>`
        },
        {
          title: 'Wen wollen wir mit 2030Watch erreichen?',
          id: 'ziel-wen-erreichen',
          body: `<p>Wir wollen mit 2030Watch mehrere Zielgruppen erreichen: primär zivilgesellschaftliche Organisationen wie Vereine und Bürgerinitiativen, die zu SDG Themen arbeiten und interessierte Bürgerinnen und Bürger. Darüber hinaus hoffen wir, auch Journalist*innen und Politiker*innen sowie Nichtregierungsorganisationen zu erreichen.</p>`
        },
        {
          title: 'Stellt 2030Watch die Umsetzung der 2030 Agenda in Deutschland objektiv dar?',
          id: 'ziel-2030Watch-objektiv',
          body: `<p>Grundsätzlich verstehen wir 2030Watch als ein politisches Projekt, welches eine ambitionierte Umsetzung der Agenda 2030 fordert.</p>
          <p>Wir sammeln ergänzende Fortschrittsmaßstäbe (Indikatoren), die von zivilgesellschaftlichen Organisationen erarbeiten wurden und vergleichen diese mit dem Nachhaltigkeitsverständnis Deutschlands bei der offiziellen Berichterstattung.</p>
          <p>2030Watch ist nicht gedacht für wissenschaftliche Analysen beispielsweise zu den Wechselwirkungen verschiedener Politikbereiche.</p>
          <p>Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag, Standpunktesammlung und eine Positionierung gedacht.</p>`
        },
        {
          title: 'Verfälscht 2030Watch damit eine objektive Berichterstattung?',
          id: 'ziel-objektive-berichterstattung',
          body: `<p>Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar. Viele Ziele und Unterziele der Agenda sind vage formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030Watch.</p>
          <p>Auch die Festlegung eines Zielwertes je Indikator ist oft eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht?</p>`
        },
        {
          title: 'Wie wird 2030Watch weiterentwickelt?',
          id: 'ziel-2030Watch-weiterentwicklung',
          body: `<p>Bis Ende des Sommer 2018 wird 2030Watch  zu allen 17 SDGs Indikatorenvorschläge veröffentlichen.  Außerdem überlegen wir, wie wir andere Features wie z.B. ein Mapping schon verbindlicher Abkommen zu den verschiedenen SDGs hinzufügen können. Im Sommer 2018 werden wir noch viele Anpassungen an unsere Webseite 2030Watch unternehmen und freuen uns über euer Feedback hierzu.</p>`
        }
        ],
        methode: [{
          title: 'Welche Indikatoren werden dargestellt?',
          id: 'methode-indikatoren',
          body: `<p>Die offiziellen Indikatoren wurden ausschließlich von der Deutschen Nachhaltigkeitsstrategie (DNS) übernommen. Die Deutsche Nachhaltigkeitsstrategie beurteilt die Indikatoren mit einem Wetterzeichen und zeigt so den Trend, ob sich der Indikator dem Zielwert nähert oder nicht. Wir von 2030Watch haben die Indikatoren in ein eigenes Bewertungssystem übersetzt, welches versucht, darzustellen, wie weit ein Indikator vom Ziel für 2030 entfernt ist.</p>
          <p>Auf der 2030Watch Seite werden hierzu weitere Indikatoren hinzugezogen, welche von der Zivilgesellschaft als Fortschrittsmaßstäbe von Nachhaltigkeit vorgeschlagen werden.</p>`
        },
        {
          title: 'Wie hat 2030Watch Indikatoren ausgewählt?',
          id: 'methode-indikatoren-auswahl',
          body: `<p>Die ergänzenden Indikatoren hat 2030Watch geprüft und nach eigener Bewertung ausgewählt. Die Auswahl beruht auf unserer Recherche, Indikatorvorschlägen nichtstaatlicher Akteure und auf Gesprächen mit Experten aus Zivilgesellschaft und Forschung.</p>
          <p>Unsere Auswahlkriterien sind:</p>
          <p>1. Das SDG Unterziel ist für Deutschland relevant.</p>
          <p>2. Deutschland hat aus offizieller Sicht zu diesem Unterziel Handlungsbedarf. Handlungsbedarf besteht, wenn eines der folgenden Kriterien erfüllt ist.</p>
          <p>a. Es gibt einen offiziellen IAEG-SDG (Inter-Agency and Expert Group on Sustainable Development Goal) oder EU2020 Indikator, bei dem Deutschland mehr als 20% vom Zielwert entfernt ist.</p>
          <p>b. Die Bundesregierung bezeichnet dieses Unterziel in der Nachhaltigkeitsstrategie als relevant, hat aber keinen eigenen Indikator.</p>
          <p>c. Die Bundesregierung bezeichnet dieses Ziel selbst in offiziellen Verlautbarungen (inkl. internationalen Abkommen) als relevant, hat aber keinen eigenen Indikator.</p>
          <p>3. Deutschland hat aus zivilgesellschaftlicher Sicht zu diesem Unterziel großen Handlungsbedarf. In Kommentaren von respektierten Organisationen wird ein Indikator zu diesem Thema gefordert.</p>
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
          <p><span style="text-decoration:underline;">Neues Thema:</span> Dieser Indikator legt ein neues Thema vor, das noch nicht in der Deutschen Nachhaltigkeitsstrategie (DNS) beinhaltet ist.</p>
          <p><span style="text-decoration:underline">Ungeeignet:</span>  Der Indikator misst keine Veränderung in Bezug auf Nachhaltigkeit und misst die Wirkung einer Maßnahme nur unzureichend.</p>
          <p><span style="text-decoration:underline;">Übernommen:</span> Dieser Indikator ist ein offizieller Indikator der deutschen Nachhaltigkeitsstrategie (DNS) und wird von 2030Watch ohne Veränderungen übernommen.</p>
          <p><span style="text-decoration:underline;">Nicht bewertbarer Zielwert:</span> Dieser Indikator hat keinen genau definierten Zielwert und erlaubt es daher nicht, den Fortschritt bis 2030 zu bewerten.</p>
          <p><span style="text-decoration:underline;">Modifizierter Zielwert:</span> Dieser Zielwert ist unzureichend und 2030Watch schlägt einen neuen Zielwert vor.</p>
          <p><span style="text-decoration:underline;">Nicht berechenbar:</span> Für diesen Indikator kann man auf Grund fehlender Daten den Ziel- oder Ausgangswert nicht berechnen.</p>
          <p><span style="text-decoration:underline;">Internationale Auswirkungen:</span> Dieser Indikator misst internationale Auswirkungen durch Deutschland und zeigt somit die Verantwortung Deutschlands für nachhaltige Rahmenbedingungen in anderen Ländern.</p>`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt eines Indikators?',
          id: 'methode-fortschrittsmessung',
          body: `<p>Wir berechnen für jeden Indikator, wie weit er vom jeweiligen Zielwert entfernt ist. Der jeweilige Zielwert wird dann als 100% eingestuft. Die Formel um den Fortschritt zu berechnen ist: Ausgangswert-Aktueller Wert/Ausgangswert -Zielwert. So wird eine Vergleichbarkeit der Fortschritte zwischen den einzelnen Indikatoren hergestellt.</p>`
        },
        {
          title: 'Wie misst 2030Watch den Fortschritt zur Erreichung von einem Nachhaltigkeitsziel?',
          id: 'methode-fortschritt-nachhaltigkeit',
          body: `<p>Der Fortschritt auf Seiten der Deutschen Nachhaltigkeitsstrategie (DNS) wird mit einem Mittelwert von allen Indikatorenwerten pro jeweiligem SDG berechnet.</p>
          <p>Der Fortschritt auf der Seite von 2030Watch wird über den Mittelwert des jeweiligen erweiterten Indikatorenkataloges beziffert. Indikatoren, die als ungeeignet eingestuft wurden, fließen nicht in die Berechnung ein.</p>
          <p>Wichtig zu betonen, ist, dass wir nicht behaupten, diese Fortschrittsberechnung sei eine objektive Darstellung. Die Berechnungen sollen dazu dienen, einen Vergleich zwischen Nachhaltigkeitsbildern zu ermöglichen und stellen einen Debattenbeitrag dar.</p>`
        },
        {
          title: 'Wie werden Ausgangswerte berechnet?',
          id: 'methode-ausgangswerte',
          body: `<p>Wir lehnen unsere Auswahl an gängige Vorgehen an, wie zum Beispiel das von <a href="http://www.sdgindex.org/" target="_blank">Sustainable Development Solutions Network</a> (SDSN). Sobald ein eindeutiger Ausgangswert in den Datenreihen gegeben ist, übernehmen wir diesen. Wenn dies nicht der Fall ist, wenden wir die Methode von <a href="http://www.sdgindex.org/" target="_blank">SDSN</a> an: von den internationalen Länderdaten werden 2,5% der Anzahl der Werte gestrichen. Wenn es also 40 Beobachtungen gibt (Daten für 40 Länder), kann der niedrigste Werte gestrichen werden. Für Indikatoren ohne international vergleichbare Daten und ohne natürlichen Ausgangswert, orientieren wir uns an dem <a href="http://ec.europa.eu/eurostat/documents/3217494/8113874/KS-EZ-17-001-EN-N.pdf/c810af1c-0980-4a3b-bfdd-f6aa4d8a004e" target="_blank">Basisjahr 2008 der EU2020 Strategie</a>.</p>`
        },
        {
          title: 'Wie werden Zielwerte berechnet?',
          id: 'methode-zielwerte',
          body: `<p>Bei der Verwendung der Deutschen Nachhaltigkeitsstrategie (DNS) Indikatoren übernehmen wir die offiziellen Zielwerte.</p>
          <p>Für die ergänzenden Indikatoren wird der Zielwert von uns ausgewählt – beruhend auf internationalen Abkommen, Fachliteratur oder Expertengesprächen.</p>
          <p>In den Fällen, in denen wir keinen Zielwert haben, nehmen wir den Durchschnitt der "5 Top Performer", sprich die fünf besten Werte.</p>`
        },
        {
          title: 'Woher kommen die aktuellen Werte?',
          id: 'methode-aktuellen-werte',
          body: `<p>Wir nehmen die aktuellsten verfügbaren Werte. Das bedeutet für die Werte der Deutschen Nachhaltigkeitsstrategie (DNS), dass wir in einigen Fällen aktuellere Werte als die DNS haben, wenn zum Beispiel die OECD-Werte aktueller sind.</p>`
        },
        {
          title: 'Welche Länder werden zum Vergleich herangezogen?',
          id: 'methode-laendervergleich',
          body: `<p>Wir nehmen entweder Daten von den EU28 oder OECD mit Präferenz für den Datensatz mit den aktuellsten Werten.</p>`
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
</style>
