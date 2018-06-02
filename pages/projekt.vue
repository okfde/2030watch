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
          <h2>Ziel des Projekts</h2>
          <Accordeon :faqs="ziel" />
        </div>
      </section>
      <section class="wrapper">
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
          body: 'Die Agenda 2030 wurde im September 2015 auf einem Gipfel der Vereinten Nationen von allen Mitgliedsstaaten verabschiedet. Mit der Agenda 2030 für nachhaltige Entwicklung hat sich die internationale Staatengemeinschaft dafür ausgesprochen, die globalen Herausforderungen, wirtschaftlichen Fortschritt im Einklang mit sozialer Gerechtigkeit und  im Rahmen der ökologischen Grenzen der Erde zu gestalten, gemeinsam zu lösen. Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung (Sustainable Development Goals, SDGs). 193 Länder haben sich verpflichtet, die Agenda bis zum Jahr 2030 umzusetzen.'
        },
        {
          title: 'Was sind die globalen nachhaltigen Entwicklungsziele (SDGs)?',
          body: 'Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung, 169 Unterzielen und 232 Indikatoren. Der SDG-Katalog ist auf Basis eines globalen partizipativen Prozesses entwickelt worden. Die 17 SDGs berücksichtigen erstmals alle drei Dimensionen der Nachhaltigkeit – Soziales, Umwelt, Wirtschaft – gleichermaßen. Ihnen sind fünf Kernbotschaften als handlungsleitende Prinzipien vorangestellt: Mensch, Planet, Wohlstand, Frieden und Partnerschaft. Im Englischen spricht man von den "5 Ps": People, Planet, Prosperity, Peace, Partnership.'
        },
        {
          title: 'Wer soll die 2030 Agenda umsetzen?',
          body: 'Die 2030 Agenda ist eine freiwillige Selbstverpflichtung der Regierungen aus 193 Ländern. Dazu “übersetzen” alle beteiligten Länder den globalen SDG-Katalog in einen eigenen Fahrplan, um die globalen Nachhaltigkeitsziele umzusetzen. In Deutschland ist die nationale Nachhaltigkeitsstrategie der zentrale Umsetzungsrahmen der Agenda 2030. Die United Nations (UN) spielt bei der Koordinierung der 2030 Agenda und der Weiterentwicklung des SDG-Indikatorenkatalogs eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler*innen und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen, allerdings gibt es dazu keine formelle Selbstverpflichtung.'
        }
        ],
        ziel: [{
          title: 'Was ist das Ziel von 2030Watch?',
          body: 'Die Vision von 2030Watch ist es, dass Deutschland die globalen Nachhaltigkeitsziele ambitioniert umsetzt. Um diese Vision zu verfolgen, will 2030Watch anhand von Indikatoren ein Bild zeichnen, wie erfolgreich Deutschland die SDGs umsetzt. Indem 2030Watch offizielle Indikatoren der Deutschen Nachhaltigkeitsstrategie mit Indikatoren aus der Zivilgesellschaft ergänzt, wollen wir eine kritische Sichtweise über den Stand der Umsetzung von Nachhaltigkeit in Deutschland anbieten, Handlungsfelder beleuchten und die internationale Verantwortung Deutschlands als hochentwickeltes Industrieland hervorheben.'
        },
        {
          title: 'Wen wollen wir mit 2030Watch erreichen?',
          body: 'Wir wollen mit 2030Watch mehrere Zielgruppen erreichen: primär zivilgesellschaftliche Organisationen wie Vereine und Bürgerinitiativen, die zu SDG Themen arbeiten und interessierte Bürgerinnen und Bürger. Darüber hinaus hoffen wir, auch Journalist*innen und Politiker*innen sowie Nichtregierungsorganisationen zu erreichen.'
        },
        {
          title: 'Stellt 2030Watch die Umsetzung der 2030 Agenda in Deutschland objektiv dar?',
          body: 'Grundsätzlich verstehen wir 2030Watch als ein politisches Projekt, welches eine ambitionierte Umsetzung der Agenda 2030 fordert. Wir sammeln ergänzende Fortschritts Maßstäbe (Indikatoren), die von zivigesellschaftlichen Organisationen erarbeiten wurden und vergleichen diese mit dem Nachhaltigkeitsverständnis Deutschlands bei der offiziellen Berichterstattung. 2030Watch ist nicht gedacht für wissenschaftliche Analysen beispielsweise zu den Wechselwirkungen verschiedener Politikbereiche. Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag und als eine Positionierung gedacht.'
        },
        {
          title: 'Verfälscht 2030Watch damit eine objektive Berichterstattung?',
          body: 'Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar. Viele Ziele und Unterziele der Agenda sind vage formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030Watch. Auch die Festlegung eines Zielwertes je Indikator ist oft eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht?'
        },
        {
          title: 'Wie wird 2030Watch weiterentwickelt?',
          body: 'Bis Ende des Sommer 2018 werden Indikatoren-Inhalte für alle 17 SDGs hochgeladen. Außerdem überlegen wir uns auch wie wir andere Features wie z.B. ein Mapping schon verbindlicher Abkommen zu den verschiedenen SDGs, hinzufügen können. Im Sommer 2018 werden wir noch viele Anpassungen an unsere Webseite 2030Watch unternehmen und freuen uns über Eurer Feedback hierzu.'
        }
        ],
        methode: [{
          title: 'Welche Indikatoren werden dargestellt?',
          body: 'Die offiziellen Indikatoren wurden ausschließlich von der Deutschen Nachhaltigkeitsstrategie (DNS) übernommen. Die Deutsche Nachhaltigkeitsstrategie beurteilt die Indikatoren mit einem Wetterzeichen und zeigt so den Trend, ob sich der Indikator dem Zielwert nähert oder nicht. Wir von 2030Watch haben die Indikatoren in ein eigenes Bewertungssystem übersetzt, welches versucht, darzustellen, wie weit ein Indikator vom Ziel für 2030 entfernt ist. Auf der 2030Watch Seite werden hierzu weitere Indikatoren hinzugezogen, welche von der Zivilgesellschaft als Fortschrittsmaßstäbe von Nachhaltigkeit vorgeschlagen werden.'
        },
        {
          title: 'Wie hat 2030Watch Indikatoren ausgewählt?',
          body: 'Die ergänzenden Indikatoren hat 2030 Watch geprüft und nach eigener Bewertung ausgewählt. Die Auswahl beruht auf unserer Recherche, Indikatorvorschlägen nichtstaatlicher Akteure und auf Gesprächen mit Experten aus Zivilgesellschaft und Forschung. Unsere Auswahlkriterien sind: 1. Das SDG Unterziel ist für Deutschland relevant. 2. Deutschland hat aus offizieller Sicht zu diesem Unterziel Handlungsbedarf. Handlungsbedarf besteht, wenn eines der folgenden Kriterien erfüllt ist. 2.a Es gibt einen offiziellen IAEG-SDG (Inter-Agency and Expert Group on Sustainable Development Goal) oder EU2020 Indikator, bei dem Deutschland mehr als 20% vom Zielwert entfernt ist. 2.b Die Bundesregierung bezeichnet dieses Unterziel in der Nachhaltigkeitsstrategie als relevant, hat aber keinen eigenen Indikator. 2.c Die Bundesregierung bezeichnet dieses Ziel selbst in offiziellen Verlautbarungen (inkl. internationalen Abkommen) als relevant, hat aber keinen eigenen Indikator. 3. Deutschland hat aus zivilgesellschaftlicher Sicht zu diesem Unterziel großen Handlungsbedarf. In Kommentaren von respektierten Organisationen wird ein Indikator zu diesem Thema gefordert. 4. Disaggregierte Daten “Leave no one behind” 4.a Gender 4.b Kinder, Jugendliche, Erwachsene, Senioren 4.c Menschen mit Migrationshintergrund 4.d Menschen mit Behinderungen 5. Vollständigkeit der Daten: Daten sind für Deutschland verfügbar, werden regelmäßig erhoben und sind in 2013 oder später erhoben worden. 6. Datenqualität: Daten stammen von offiziellen statistische Quellen. Qualitative Daten stammen von anerkannten Organisationen. Die Bewertungsmethode ist idealerweise an internationalen Vereinbarungen - good practices - angelehnt. Mindeststandard für qualitative Bewertungen ist, dass sie transparent und nachvollziehbar sind.'
        },
        {
          title: 'Wie hat 2030Watch die Indikatoren eingeteilt (Kategorien)?',
          body: 'Indikatoren wurden in folgende Kategorien eingeteilt: Neues Thema: Dieser Indikator legt ein neues Thema vor, das noch nicht in der Deutschen Nachhaltigkeitsstrategie beinhaltet ist. Ungeeignet: Der Indikator misst keine Veränderung in Bezug auf Nachhaltigkeit und misst die Wirkung einer Maßnahme nur unzureichend. Übernommen: Dieser Indikator ist ein offizieller Indikator der deutschen Nachhaltigkeitsstrategie und wird von 2030Watch ohne Veränderungen übernommen. Nicht bewertbarer Zielwert: Dieser Indikator hat keinen genau definierten Zielwert und erlaubt es daher nicht, den Fortschritt bis 2030 zu bewerten. Modifizierter Zielwert: Dieser Zielwert ist unzureichend und 2030Watch schlägt einen neuen Zielwert vor. Nicht berechenbar: Für diesen Indikator kann man auf Grund fehlender Daten den Ziel- oder Ausgangswert nicht berechnen. Internationale Auswirkungen: Dieser Indikator misst internationale Auswirkungen durch Deutschland und zeigt somit die Verantwortung Deutschlands für nachhaltige Rahmenbedingungen in anderen Ländern.'
        },
        {
          title: 'Wie misst 2030Watch Fortschritt eines Indikators?',
          body: 'Wir berechnen für jeden Indikator, wie weit er prozentual vom Zielwert (100%) entfernt ist (Ausgangswert-Zielwert-Aktueller Wert), um alle Indikatoren miteinander vergleichen zu können.'
        },
        {
          title: 'Wie misst 2030Watch Fortschritt zur Erreichung von einem Nachhaltigkeitsziel?',
          body: 'Der Fortschritt auf Seiten der Deutschen Nachhaltigkeitsstrategie wird mit einem Mittelwert von allen Indikatorenwerten pro einem SDG beziffert. Der Fortschritt auf der Seite von 2030Watch wird mit einem Mittelwert von dem erweiterten Indikatorenkataloges beziffert. Indikatoren, die als ungeeignet eingestuft wurden, werden nicht in die Berechnung fließen. Wichtig zu betonen, ist, dass wir nicht behaupten, diese Fortschrittsberechnung sei eine objektive Darstellung. Die Berechnungen sollen dazu dienen, einen Vergleich zwischen Nachhaltigkeitsbildern zu ermöglichen und zur Debatte anregen.'
        },
        {
          title: 'Wie werden Ausgangswerte berechnet?',
          body: 'Wir lehnen unsere Auswahl an gängigen Vorgehen an wie zum Beispiel das von Sustainable Development Solutions Network (SDSN). Sobald ein eindeutiger Ausgangswert in den Datenreihen gegeben ist, übernehmen wir diesen. Wenn dies nicht der Fall ist, wenden wir die Methode von SDSN an: von den internationalen Länderdaten wird 2,5% der Anzahl der Werte gestrichen. Wenn es also 40 Beobachtungen gibt (Daten für 40 Länder), kann der niedrigste Werte gestrichen werden. Für Indikatoren ohne international vergleichbare Daten und ohne natürlichen Ausgangswert, orientieren wir uns an dem Basisjahr 2008 der EU2020 Strategie.'
        },
        {
          title: 'Wie werden Zielwerte berechnet?',
          body: 'Bei der Verwendung der DNS Indikatoren benutzen wir die offiziellen Zielwerte. Für die ergänzenden Indikatoren wird der Zielwert von uns ausgewählt - beruhend auf internationalen Abkommen, Fachliteratur oder Expertengesprächen. In den Fällen, in denen wir keinen Zielwert haben, nehmen wir den Durchschnitt der “5 Top Performer”, sprich die fünf besten Werte.'
        },
        {
          title: 'Woher kommen die aktuellen Werte?',
          body: 'Wir nehmen die aktuellsten verfügbaren Werte. Das bedeutet für die DNS Werte, dass wir in einigen Fällen aktuellere als die DNS haben, wenn zum Beispiel die OECD-Werte aktueller sind.'
        },
        {
          title: 'Welche Länder werden zum Vergleich herangezogen?',
          body: 'Wir nehmen entweder Daten von den EU28 oder OECD mit Präferenz für den Datensatz mit den aktuellsten Werten.'
        }
        ]
      }
    },
    components: {
      Accordeon
    },
    head () {
      return {
        title: 'Über das Projekt | 2030Watch'
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
