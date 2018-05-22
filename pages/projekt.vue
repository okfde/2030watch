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
          body: 'Die Agenda 2030 wurde im September 2015 auf einem Gipfel der Vereinten Nationen von allen Mitgliedsstaaten verabschiedet. Mit der Agenda 2030 für nachhaltige Entwicklung hat sich die internationale Staatengemeinschaft dafür ausgesprochen die globalen Herausforderungen, wirtschaftlichen Fortschritt im Einklang mit sozialer Gerechtigkeit und im Rahmen der ökologischen Grenzen der Erde zu gestalten, gemeinsam zu lösen. Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung (Sustainable Development Goals, SDGs). 193 Länder haben sich dazu verpflichtet die Agenda bis zum Jahr 2030 umzusetzen.'
        },
        {
          title: 'Was sind die globalen nachhaltigen Entwicklungsziele (SDGs)?',
          body: 'Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung, 169 Unterzielen und 232 Indikatoren. Der SDG Katalog ist auf Basis eines globalen partizipativen Prozesses entwickelt worden. Die 17 SDGs berücksichtigen erstmals alle drei Dimensionen der Nachhaltigkeit – Soziales, Umwelt, Wirtschaft – gleichermaßen. Ihnen sind fünf Kernbotschaften als handlungsleitende Prinzipien vorangestellt: Mensch, Planet, Wohlstand, Frieden und Partnerschaft. Im Englischen spricht man von den "5 Ps": People, Planet, Prosperity, Peace, Partnership.'
        },
        {
          title: 'Wer soll die 2030 Agenda umsetzen?',
          body: 'Die 2030 Agenda ist eine freiwillige Selbstverpflichtung der Regierungen von 193 Ländern. Dazu "übersetzen" alle Länder den globalen SDG Katalog in einen eigenen Fahrplan um die globalen Nachhaltigkeitsziele umzusetzen. In Deutschland ist die nationale Nachhaltigkeitsstrategie der zentrale Umsetzungsrahmen der Agenda 2030. Die UN spielt bei der Koordinierung der 2030 Agenda und der Weiterentwicklung des SDG Indikatorenkatalogs eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen, allerdings gibt es dazu aber keine formelle Selbstverpflichtung.'
        }
        ],
        ziel: [{
          title: 'Was ist das Ziel von 2030Watch?',
          body: 'Die Vision von 2030Watch ist das Deutschland die globalen Nachhaltigkeitsziele ambitioniert umsetzt. Um diese Vision zu verfolgen will 2030Watch anhand von Indikatoren ein Bild zeichnen, wie gut Deutschland die SDGs umsetzt. Indem 2030Watch offizielle Indikatoren mit alternativen Indikatoren vergleicht wollen wir eine kritische Sichtweise über den Stand der Umsetzung von Nachhaltigkeit in Deutschland anbieten, Handlungsfelder beleuchten und die internationale Verantwortung Deutschlands als Industrieland hervorheben.'
        },
        {
          title: 'Wen wollen wir mit 2030Watch erreichen?',
          body: 'Wir wollen mit 2030Watch mehrere Zielgruppen erreichen: primär Vereine und Bürgerinitiativen, die zu SDG Themen arbeiten und interessierte Bürgerinnen und Bürger. Darüber hinaus hoffen wir auch Journalisten und Politiker sowie Nichtregierungsorganisationen zu erreichen.'
        },
        {
          title: 'Stellt 2030Watch die Umsetzung der 2030 Agenda in Deutschland objektiv dar?',
          body: 'Grundsätzlich verstehen wir 2030Watch als ein politisches Projekt, welches auf eine ambitionierte Umsetzung der Agenda 2030 pocht. Wir sammeln alternative Fortschritts Maßstäbe (Indikatoren), die von zivigesellschaftlichen Organisationen erarbeiten wurden und vergleichen diese mit dem Nachhaltigkeitsbild Deutschlands der offiziellen Berichterstattung. 2030Watch ist nicht gedacht für wissenschaftliche Analysen beispielsweise zu den Wechselwirkungen verschiedener Politikbereiche. Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag und als eine Positionierung gedacht.'
        },
        {
          title: 'Verfälscht 2030Watch damit eine objektive Berichterstattung?',
          body: 'Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar. Viele Ziele und Unterziele der Agenda sind vage formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030Watch. Auch die Festlegung eines Zielwertes je Indikator ist oft eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht?'
        }
        ],
        methode: [{
          title: 'Welche Indikatoren werden dargestellt?',
          body: 'Die offiziellen Indikatoren wurden ausschließlich von der Deutschen Nachhaltigkeitsstrategie übernommen. Die Deutsche Nachhaltigkeitsstrategie beurteilt die Indikatoren nach dem Trend, ob sich der Indikator dem Zielwert nähert mit einem Wetterzeichen. 2030Watch hat die Indikatoren übersetzt in unser Bewertungssystem, welches versucht darzustellen wie weit ein Indikator vom Ziel für 2030 entfernt ist. Auf der 2030Watch Seite werden hierzu weitere Indikatoren, die von der Zivilgesellschaft vorgeschlagen werden, hinzugezogen.'
        },
        {
          title: 'Wie hat 2030Watch Indikatoren ausgewählt?',
          body: 'Die alternativen Indikatoren hat 2030Watch ausgewählt. Die Auswahl beruht auf unserer Recherche, Indikatorvorschlägen nichtstaatlicher Akteure, und auf Gesprächen mit Experten aus Zivilgesellschaft und Forschung. Unser Auswahlkriterien sind: 1. Das SDG Unterziel ist für Deutschland relevant. 2. Deutschland hat aus offizieller Sicht zu diesem Unterziel Handlungsbedarf. Handlungsbedarf besteht, wenn eines der folgenden Kriterien erfüllt ist. 2.a Es gibt einen offiziellen IAEG oder EU2020 Indikator, bei dem Deutschland mehr als 20% vom Zielwert entfernt ist. 2.b Die Bundesregierung bezeichnet dieses Unterziel in der Nachhaltigkeitsstrategie als relevant, hat aber keinen eigenen Indikator 2.c Die Bundesregierung bezeichnet dieses Ziel selber in offiziellen Verlautbarungen (inkl. internationalen Abkommen) als relevant, hat aber keinen eigenen Indikator. 3. Deutschland hat aus zivilgesellschaftlicher Sicht zu diesem Unterziel großen Handlungsbedarf. In Kommentaren von respektierten Organisationen wird ein Indikator zu diesem Thema gefordert. 4. Disaggregierte Daten "Leave no one behind" 4.a Gender 4.b. Kinder, Jugendliche, Erwachsene, Senioren 4.c Menschen mit Migrationshintergrund 4.d Menschen mit Behinderungen 5. Vollständigkeit der Daten: Daten sind für Deutschland verfügbar, werden regelmäßig erhoben und sind in 2013 oder später erhoben worden. 6. Datenqualität: Daten stammen von offiziellen statistischen Quellen. Qualitative Daten sind von anerkannten Organisationen, die Bewertungsmethode ist idealerweise an internationalen Vereinbarungen - good practices - angelehnt. Mindeststandard für qualitative Bewertungen ist, dass sie transparent und nachvollziehbar sind.'
        },
        {
          title: 'Wie hat 2030Watch die Indikatoren eingeteilt (Kategorien)?',
          body: 'Indikatoren wurden in folgende Kategorien eingeteilt: DNS nicht berechenbar: Für diesen Indikator kann man auf Grund fehlender Daten den Ziel- oder Ausgangswert nicht berechnen. DNS ungeeignet: Der Indikator misst keine Veränderung in Bezug auf Nachhaltigkeit und misst die Wirkung einer Maßnahme nur unzureichend. DNS modifizierter Zielwert: Dieser Zielwert ist schlecht und 2030Watch schlägt einen neuen Zielwert vor. DNS aussageloser Zielwert: Dieser Indikator hat einen Zielwert, der es nicht erlaubt abzulesen, was ein Fortschritt bis 2030 bedeuten würde. DNS/2030Watch Spillover: Dieser Indikator misst internationale Auswirkungen durch Deutschland und zeigt somit die Verantwortung Deutschlands für nachhaltige Rahmenbedingungen in anderen Ländern. 2030W Neues Thema: Dieser Indikator zeigt ein neues Thema, welches noch nicht in der deutschen Nachhaltigkeitsstrategie beinhaltet ist. DNS=Deutsche Nachhaltigkeitsstrategie 2030W=ein nicht offizieller Indikatorenvorschlag'
        },
        {
          title: 'Wie misst 2030Watch Fortschritt eines Indikators?',
          body: 'Um alle Indikatoren miteinander vergleichen zu können berechnen wir für jeden Indikator  wie weit er prozentual vom Zielwert (100%) entfernt ist (Ausgangswert-Zielwert-Aktueller Wert).'
        },
        {
          title: 'Wie misst 2030Watch Fortschritt zur Erreichung von einem Nachhaltigkeitsziel?',
          body: 'Auf der DNS Seite wird ein Mittelwert von allen Indikatorenwerten pro SDG zusammengerechnet. Der Fortschritt eines SDG 2030Watch Indkatorenkatalogs wird berechnet indem ein Mittelwert von allen DNS Indikatorenwerten (minus DNS Indikatoren die als ungeeignet bewertet wurden oder wo der Zielwert verändert wurde) und allen ergänzenden Indikatorenwerten.'
        },
        {
          title: 'Wie werden Ausgangswerte berechnet?',
          body: 'Wenn ein klarer Ausgangswert gegeben ist übernehmen wir diesen. Ansonsten wenden wir die Methode von SDSN an: von den internationalen Länderdaten wird 2,5% der Anzahl der Werte gestrichen. Wenn es also 40 Beobachtungen gibt (Daten für 40 Länder) dann kann der unterste Werte gestrichen werden. Für Indikatoren ohne international vergleichbare Daten und ohne natürlichen Ausgangswert, orientieren wir uns an dem Basisjahr 2008 der EU2020 Strategie.'
        },
        {
          title: 'Wie werden Zielwerte berechnet?',
          body: 'Für die Indikatoren der deutschen Nachhaltigkeitsstrategie benutzen wir die offiziellen Zielwerte. Für die alternativen Indikatoren wird der Zielwert von uns ausgewählt beruhend auf internationalen Abkommen, Fachliteratur oder Expertengesprächen. In den Fällen, wo wir keinen Zielwert haben, nehmen wir den Durchschnitt der "5 Top Performer", sprich die fünf besten Werte.'
        },
        {
          title: 'Woher kommen die aktuellen Werte?',
          body: 'Wir nehmen die aktuellsten verfügbare Werte. Das bedeutet für die DNS Werte, dass wir in einigen Fällen aktuellere als die DNS haben, wenn die OECD-Werte aktueller sind.'
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
