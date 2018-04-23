<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über das Projekt</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Hier findest du Hintergrundinformationen und FAQs zu unserem Anliegen, unseren Zielen und unserer Methodik</p>
          </div>
          <div>
            <!-- <strong>halleo gdg</strong> -->
          </div>
        </section>
      </div>
    </header>
    <div class="content">
         <section>
          <h2>Hintergrund</h2>
          <div class="section-wrapper">
            <accordeon :faqs="background"></accordeon>
          </div>
        </section>
         <section>
          <h2>Ziel des Projekts</h2>
          <div class="section-wrapper">
             <accordeon :faqs="ziel"></accordeon>
          </div>
        </section>
        <section>
          <h2>Unsere Methode</h2>
          <div class="section-wrapper">
            <accordeon :faqs="methode"></accordeon>
          </div>
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
          title: 'Was ist Nachhaltigkeit?',
          body: 'Nachhaltigkeit ist ein sehr breiter Begriff. Bei 2030 Watch benutzen wir die Definition von Nachhaltigkeit der Vereinten Nationen. Nach dxieser Definition umfasst Nachhaltigkeit die ökologische, soziale und wirtschaftliche Themen. Nachhaltig ist, was den Erhalt der Umwelt und das friedliche gesellschaftliche Zusammenleben langfristig sichert.',
          open: false
        },
        {
          title: 'Was sind die nachhaltigen Entwicklungsziele?',
          body: 'Die nachhaltigen Entwicklungsziele wurden im September 2015 auf der UN Generalversammlung von den Vereinten Nationen. Die 17 Sustainable Development Goals (SDGs) und ihre 169 Unterziele sind Teil der 2030 Agenda. 193 Länder haben sich dazu verpflichtet diese 2030 Agenda bis zum Jahr 2030 umzusetzen. Die SDGs sind auf der Basis eines globalen partizipativen Prozesses entwickelt worden.',
          open: false
        },
        {
          title: 'Wer soll die 2030 Agenda umsetzen?',
          body: 'Die 2030 Agenda ist eine freiwillige Selbstverpflichtung der Regierungen von 193 Ländern. Beispielsweise haben sich alle EU Länder und alle OECD Länder zu dieser Agenda verpflichtet. Die UN spielt bei der Koordinierung der 2030 Agenda und bei der Umsetzung eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen, allerdings gibt es dazu aber keine formelle Selbstverpflichtung.In Deutschland wird die nationale Nachhaltigkeitsstrategie der zentrale Umsetzungsrahmen der 2030 Agenda sein.',
          open: false
        },
        {
          title: 'Wie ist es zur 2030 Agenda gekommen?',
          body: 'Hintergrund der 2030 Agenda sind zwei parallele Prozesse: Einerseits der Rio Prozess zu ökologischer Nachhaltigkeit und andererseits die Millenniumsziele der Vereinten Nationen zur Armutsbekämpfung. Der Rio Prozess hat beim Umweltgipfel in Rio 1992 seinen Ausgang genommen und hat seit dem zu vielen Verpflichtungen und Maßnahmen zum Schutz der natürlichen Ressourcen geführt. Die Millenniumsziele wurden auf der UN Generalversammlung im Jahr 2000 verabschiedet und umfassen 8 Ziele zur Bekämpfung von Armut und Hunger. Diese Ziele hätten bis 2015 erreicht werden sollen. Die 2030 Agenda ist der Nachfolgeprozess zu den Millenniumszielen, jedoch die zentralen Elemente des Rio Prozesses integriert.',
          open: false
        },
        {
          title: 'Was ist neu bei der 2030 Agenda?',
          body: 'Im Gegensatz zu den Millenniumszielen betrifft die 2030 Agenda alle Ländern, nicht nur die sogenannten Entwicklungsländer. In allen Ländern sind tiefgreifende Veränderungen nötig, um Gerechtigkeit und Wohlstand für alle Menschen und alle Generationen zu sichern. Im Gegensatz zum Rio Prozess ist die 2030 Agenda sehr viel breiter und umfasst nicht nur ökologische Themen, sondern auch soziale, ökonomischen und politischen Themen.',
          open: false
        },
        {
          title: 'Was ist das Ziel von 2030 Watch?',
          body: 'Ziel dieser Webseite ist es, die Indikatoren zur Messung der SDGs transparent und übersichtlich darzustellen und dadurch Rechenschaft einzufordern für die Umsetzung der 2030 Agenda in EU und OECD Ländern.',
          open: false
        }
        ],
        ziel: [{
          title: 'Warum haben wir 2030 Watch ins Leben gerufen?',
          body: 'Die Erfolgskontrolle auf nationaler Ebene ist zentral für eine ambitionierte Umsetzung der Sustainable Development Goals und der 2030 Agenda insgesamt. Eine solche Erfolgskontrolle muss aus unserer Sicht fünf Kriterien genügen: 1. Die Auswahl der Indikatoren muss dem Ambitionsniveau der 2030 Agenda angepasst sein. 2. Die Auswahl der Indikatoren muss an die Realität und an den besonderen Verantwortungen auf nationaler Ebene angepasst sein. 3. Die zu erreichenden Zielwerte für jeden einzelnen Indikator müssen dem Ambitionsniveau der 2030 Agenda angemessen sein. 4. Die Erfolgskontrolle muss übersichtlich und transparent gestaltet sein, damit um für möglichst viele Menschen nachvollziehbar zu sein. 5. Die Erfolgskontrolle muss einen internationalen Vergleich mit anderen Ländern beinhalten, um den Handlungsdruck auf nationaler Ebene zu erhöhen. Die bisher von der UN Statistikkommission und von der Bundesregierung vorgeschlagenen Indikatoren genügen diesen Kriterien nicht. Viele Indikatoren der UN Statistikkommission beziehen sich eher auf Entwicklungsländer oder auf die internationale Ebene. Die Indikatorvorschläge der UN Statistikkommission und der Bundesregierung lassen Politikbereiche aus, die aus unserer Sicht essentiell für die Umsetzung der 2030 Agenda durch die reichen Länder sind (Waffenhandel, Handelsverträge, Transparenz der Finanzmärkte, u.a.) Teilweise fehlen Zielwerte bei den offiziellen Indikatoren, teilweise sind die Zielwerte zu wenig ambitioniert. Die bisherige Berichterstattung der Bundesregierung ist nicht sehr öffentlichkeitstauglich und enthält keinen internationalen Vergleich. Die Open Knowledge Foundation Deutschland hat 2030 Watch geschaffen, um diese Lücke zu schließen.',
          open: false
        },
        {
          title: 'Was ist das Ziel von 2030 Watch?',
          body: 'Das Ziel von 2030 Watch ist, dass  die nationalen Regierungen in den Ländern der OECD und der EU die 2030 Agenda ambitioniert umsetzen und so Wohlstand und Gerechtigkeit für alle Menschen und für zukünftige Generationen sichern. Um zu diesem Ziel einen Beitrag zu leisten, macht 2030 Watch die aktuelle Umsetzung der 2030 Agenda in den reichen Ländern transparent. Bürgerinnen und Bürger, zivilgesellschaftliche Organisationen, Journalisten und Abgeordnete sollen einen leicht verständlichen Überblick darüber haben, wie weit Deutschland und vergleichbare Länder die 2030 Agenda umsetzen. Grundsätzlich verstehen wir 2030 Watch als ein Werkzeug der Öffentlichkeitsarbeit und der politischen Lobbyarbeit. Für diesen Zwecke werden eine Reihe von Vereinfachungen vorgenommen. 2030 Watch ist nicht gedacht für wissenschaftliche Analysen beispielsweise zu den Wechselwirkungen verschiedener Politikbereiche. Das Tool ist auch nicht in der Lage die unterschiedlichen Realitäten in den EU oder OECD Ländern angemessen Rechnung zu tragen.',
          open: false
        },
        {
          title: 'Wen wollen wir mit 2030 Watch erreichen?',
          body: 'Wir wollen mit 2030 Watch vor mehrere Zielgruppen erreichen: Journalisten und Politiker sowie Nichtregierungsorganisationen, Vereine und Bürgerinitiativen, die zu SDG Themen arbeiten. Darüber hinaus hoffen wir auch interessierte Bürgerinnen und Bürger zu erreichen.',
          open: false
        },
        {
          title: 'Stellt 2030 Watch die Umsetzung der 2030 Agenda in Deutschland objektiv dar?',
          body: 'Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar. Viele Ziele und Unterziele der Agenda sind vague formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030 Watch. Auch die Bewertung der Indikatoren ist eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht? Die Inhalte auf 2030 Watch sind daher nicht objektiv richtig oder falsch, so wie ein Bericht über das Müllaufkommen in deutschen Städten richtig sein kann. Allerdings sollen die Bewertungen transparent und gut begründet sein. Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag und als eine Positionierung gedacht.',
          open: false
        }
        ],
        methode: [{
          title: 'Woher kommen die Indikatoren?',
          body: 'PILOTPHASE: Die Indikatoren, die bisher auf 2030 Webseite zu sehen sind, hat die OKF auswählt. Die Auswahl beruht auf unserer Analyse von offiziellen Indikatorvorschlägen, Indikatorvorschlägen nichtstaatlicher Akteure, eigenen Recherchen und auf Gesprächen mit Experten aus Zivilgesellschaft und Forschung. Bei unserer Recherche haben wir unter anderem folgende Indikatorvorschläge berücksichtigt: Inter Agency and Expert Group zu den SDG Indikatoren (IAEG-SDGs), Sustainable Development Solution Network (SDSN),OECD Studie zur Messung der SDGs in OECD Ländern,Bertelsmann Index, Environmental Performance Index, Yale University, Entwurf der Bundesregierung für die neue deutsche Nachhaltigkeitsstrategie und Reaktionen der deutschen Zivilgesellschaft auf diesen Entwurf, MONET Indikatorensystem Schweiz, Indikatoren für nachhaltige Entwicklung Österreich, Einem Bericht von zivilgesellschaftlichen Akteuren zu SDG16 Indikatoren, Indizes von zivilgesellschaftlichen Netzwerken wie der Climate Change Performance Index, Ergebnisse aus mehreren Workshops der OKF mit deutschen NGOs. Die Entscheidung darüber, ob wir einen vorgeschlagenen Indikator in 2030 Watch aufnehmen oder nicht hängt davon ob, ob der Indikator unserer Einschätzung nach die besondere Verantwortung von reichen Ländern abbildet und ob es international vergleichbare und relativ aktuelle Daten für den Indikator gibt. Die Webseite bietet einen Filter an, um transparent zu machen, welche Indikatoren von der UN Statistikkommission oder von nationalen Regierungen vorgeschlagen wurden und welche Indikatoren von nicht-staatlichen Akteuren vorgeschlagen wurden. FERTIGE VERSION VON 2030 WATCH: Die Indikatoren werden von Datenpaten in Absprache mit der OKF vorgeschlagen. Datenpaten sind Organisationen aus Zivilgesellschaft und Forschung, die zu einem SDG Unterziel über eine große Expertise verfügen. So wird beispielsweise die Organisation Erlassjahr Datenpate für 17.4. zum Thema Entschuldung. Die Datenpaten schlagen einen Indikator, seine Operationalisierung und die Bewertungsstufen vor und stellen die Daten bereit. Diese Vorgehensweise beruht auf unserer Annahme, dass die Datenpaten mit der politischen Diskussion zu einem SDG Unterziel sehr gut vertraut sind und einen Indikator vorschlagen, der auch von anderen zivilgesellschaftlichen Akteuren mitgetragen werden kann.Darüber verstehen wir die von uns visualisierten Inhalte auch immer als einen Beitrag zu der Diskussion um die Umsetzung der SDGs bei uns und in anderen Ländern. Daher laden wir andere Akteure ein, die Entscheidungen der Datenpaten zu kommentieren. Bei begründeter Kritik an der Entscheidung von Datenpaten, nimmt die OKF die Diskussion mit den Datenpaten wieder auf um der Kritik Rechnung zu tragen.Schließlich werden wir mittelfristig einen wissenschaftlichen Beirat einrichten, der die Qualität der Inhalte von 2030 Watch überwacht.',
          open: false
        },
        {
          title: 'Woher kommen die Daten?',
          body: 'Die Daten auf 2030 Watch kommen aus unterschiedlichen Quellen. Die meisten Indikatoren auf 2030 Watch basieren auf Daten von der Weltbank, der OECD und von Eurostat. Einige Indikatoren nutzen Daten von UN-Organisationen wie der WHO oder FAO. Für einen Teil der Indikatoren werden Daten aus wissenschaftlichen Instituten oder von zivilgesellschaftlichen Organisationen verwendet. Eine volle Liste aller Indikatoren mit Quellenangaben befindet sich hier.',
          open: false
        },
        {
          title: 'Wie gut ist die Qualität der Daten?',
          body: 'Für alle Datenquellen gilt, dass die Methode zur Erhebung und Berechnung der Daten transparent sein muss und so zur Debatte gestellt wird. 2030 Watch begrüßt Feedback zur Qualität der Daten. Sollten wir begründete Kritik an der Qualität einzelner Datensätze erhalten, werden wir diese Kritik prüfen und den betreffenen Indikator gegebenenfalls entfernen. Bei einem Teil der Indikatoren ist das Disaggregationsniveau zum Beispiel nach Gender, nach sozioökonomischem Hintergrund oder nach Migrationsstatus nicht ausreichend. In diesen Fällen weisen wir auf diese Datenmängel hin.',
          open: false
        },
        {
          title: 'Wie werden die Indikatoren bewertet?',
          body: '2030 Watch bewertet jeden Indikator in 5 mögliche Kategorien von sehr gut bis sehr schlecht. Diese fünf Bewertungsstufen sind durch die Farben Dunkelblau (sehr gut) bis Dunkelrot (sehr schlecht) dargestellt. Die in 2030 Watch berücksichtigten Länder werden nicht im Verhältnis zueinander, also relativ, bewertet, sondern gemessen an einem Zielwert. Dieser Zielwert gibt, welcher Wert für einen Indikator bis 2030 erreicht werden soll. Wenn ein Land diesen Zielwert erreicht, erhält es die Bewertung sehr gut. Zusätzlich zu diesem Zielwert werden vier weitere Grenzwerte für die Kategorien gut, mittelmäßig, schlecht und sehr schlecht festgelegt.',
          open: false
        },
        {
          title: 'Warum beruht die 2030 Watch Bewertung auf Zielwerten?',
          body: 'Bei der Bewertung der Indikatoren gibt es die grundsätzliche Entscheidung zwischen einer relativen Bewertung und einer absoluten Bewertung gemessen an einem Zielwert. Bei einer relativen Beurteilung werden die Ergebnisse aller Länder erfasst und die Länder mit den besten Werten sind automatisch in der Kategorie “sehr gut”. Aus Sicht der OKF ist eine relative Bewertung nicht sinnvoll, da in den Verlautbarungen zur 2030 Agenda immer wieder betont wird, dass “business as usual” keine Option ist. Eine relative Bewertung fördert jedoch ein “business as usual”. Durch die Bewertung der “best performer” als “sehr gut” wird suggeriert, dass die bisherigen Leistungen dieser Länder ausreichend sind. In vielen Fällen, zum Beispiel bei den Klimaemissionen, bei der Müllerzeugung und dem Ressourcenverbrauch ist das aber keineswegs der Fall. Alle Länder müssen sich bei fast allen Indikatoren deutlich verbessern - häufig sogar um ein Vielfaches, damit Armut abgeschafft wird und damit ein Leben in Würde für alle Menschen und für die zukünftigen Generationen innerhalb der planetaren Grenzen möglich ist. Eine relative Bewertung ist aus unserer Sicht auch nicht sinnvoll, da sich die Bewertung eines Indikators für ein Land sich verbessern kann, ohne dass es objektiv eine Verbesserung gegeben hat. Beispielsweise kann sich bei einer relativen Bewertung der Wert für Deutschland für Ressourcenverbrauch verbessern, wenn sich die Werte der anderen Länder verschlechtert haben.',
          open: false
        },
        {
          title: 'Wer legt die Bewertung der Indikatoren fest?',
          body: 'PILOTPHASE: In der Pilotphase wird die Bewertung der Indikatoren durch die OKF festgelegt. Dabei orientieren wir uns wo möglich an bereits bestehenden internationalen Vereinbarungen wie die 0,7% Quote (am BIP) für die öffentliche Entwicklungszusammenarbeit. Solche internationalen Vereinbarungen liegen aber nur in sehr wenigen Fällen vor. Eine weitere Orientierung bieten die Werte der Länder, die bei einem Indikator am besten abschneiden. Da im Rahmen der 2030 Agenda immer wieder gefordert wird “business as usual is no option” sollte der Zielwert aus unserer Sicht in den meisten Fällen besser sein als der Wert des best performers. Jedoch auch diese Herangehensweise ist nicht für alle Indikatoren möglich oder sinnvoll. Wo diese beiden Herangehensweisen nicht sinnvoll oder möglich sind, legen wir Zielwerte auf der Basis von eigenen Recherchen und Gesprächen mit Experten fest. FERTIGE VERSION VON 2030 WATCH: Mittelfristig verfolgt die OKF das Ziel, dass die Bewertung der Indikatoren nur noch durch anerkannte Experten, den Datenpaten, vorgenommen wird. Datenpaten werden aufgefordert, ihre Bewertungsmethode durch Verweise auf wissenschaftliche Publikationen zu untermauern. Die Bewertung durch die Datenpaten wird auf der Webseite transparent gemacht und damit zur Diskussion gestellt.',
          open: false
        },
        {
          title: 'Kann man zeitliche Trends für einzelne Indikatoren verfolgen?',
          body: 'PILOTPHASE: Bisher zeigt 2030 Watch eine Momentaufnahme. Für alle Indikatoren werden lediglich Daten für ein Jahr dargestellt. FERTIGE VERSION VON 2030 WATCH: Mittelfristig soll für jeden Indikator auch die zeitliche Entwicklung visualisiert werden. Darüber hinaus macht es inhaltlich Sinn, Zwischenziele bis 2030 festzulegen. Dazu liegen jedoch noch keine methodischen Überlegungen vor.',
          open: false
        },
        {
          title: 'Stellt 2030 Watch die Umsetzung der 2030 Agenda in Deutschland objektiv dar?',
          body: 'Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar. Viele Ziele und Unterziele der Agenda sind vague formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030 Watch. Auch die Bewertung der Indikatoren ist eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht? Die Inhalte auf 2030 Watch sind daher nicht objektiv richtig oder falsch, so wie ein Bericht über das Müllaufkommen in deutschen Städten richtig sein kann. Allerdings sollen die Bewertungen transparent und gut begründet sein. Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag und als eine Positionierung gedacht.',
          open: false
        },
        {
          title: 'Bietet 2030 Watch offene Daten oder nicht?',
          body: '2030 Watch ist von der Open Knowledge Foundation Deutschland (OKF) ins Leben gerufen worden. Die OKF ist ein Verein, der sich vor allem die Förderung von offenen Daten und offenem Wissen zum Ziel gesetzt hat. Daher möchten wir Nutzern und Nutzerinnen der Webseite die von uns verwendeten Daten in offenen Formaten für den eigenen Gebrauch herunter zu laden. Soweit es die Lizenzen der von uns verwendeten Daten erlauben, geben wir die Daten als offene Daten weiter, beispielsweise im Falle von Weltbank Daten. In einigen Fällen ist dies jedoch nicht möglich. Wenn Daten von Datenpaten zur Verfügung gestellt werden, obliegt es den Datenpaten zu entscheiden, ob die Daten als offene Daten bereitgestellt werden oder nicht. Eine volle Liste aller Indikatoren mit Lizenzangaben befindet sich hier.',
          open: false
        },
        {
          title: 'Sind die Visualisierungen und der Code der OKF von anderen Akteuren nutzbar?',
          body: '2030 Watch ist ein Open Source Projekt und der Software Code für das ganze Projekt ist auf Github frei verfügbar. Alle, die interessiert sind, können die Software frei nutzen und für ihre Zwecke verändern oder weiterentwickeln. Die einzelne Visualisierungen sind auch embeddable, so dass beispielsweise der Ländervergleich oder die Visualisierung für einen Indikator von Interessierten in ihre Webseiten integriert werden kann.',
          open: false
        },
        {
          title: 'Was sind Datenpaten?',
          body: 'Datenpaten sind zivilgesellschaftliche Organisationen oder wissenschaftliche Institutionen, die zu einem SDG Unterziel über große Expertise verfügen und ein Interesse daran haben, dass es für die Erreichung dieses Unterziels eine transparente Erfolgskontrolle gibt. Die Rolle von Datenpaten in 2030 Watch ist es, einen oder mehrere Indikatoren vorzuschlagen und mit der OKF abzustimmen. Sobald ein Indikator entschieden ist, legen die Datenpaten einen Zielwert fest, der für diesen Indikator bis 2030 erreicht werden sollte. Die Datenpaten legen auch die fünf Bewertungsstufen von sehr gut bis sehr schlecht fest und begründen ihre Bewertungsmethode. Darüber hinaus stellen sie die Daten für “ihren” Indikator zur Verfügung, die höchstens einmal im Jahr aktualisiert werden sollen. Auf der Webseite werden die Datenpaten mit ihrem Logo, Kontaktinformationen, Links und Kurzportrait präsentiert. Datenpaten können auch die Visualisierungen für ihre eigenen Zwecke nutzen. Eine Datenpatenschaft ermöglicht es zivilgesellschaftlichen Organisationen und wissenschaftlichen Instituten die Umsetzung “ihres” Unterziels zu fördern, ohne dabei alle Indikatoren auf 2030 Watch gutzuheißen. Damit wird die Übernahme politischer Verantwortung für die Erfolgskontrolle dezentralisiert und - so die Hoffnung der OKF - erleichtert. Datenpaten unterzeichnen mit der OKF für mindestens ein Jahr ein Memorandum of Understanding ab, um die Zusammenarbeit zu dokumentieren.',
          open: false
        },
        {
          title: 'Was ist der wissenschaftliche Beirat?',
          body: 'Der wissenschaftliche Beirat von 2030 Watch ist eine Gruppe von Wissenschaftlern und Wissenschaftlerinnen, die das Projekt 2030 Watch ehrenamtlich beraten. Sie wachen insbesondere über die Qualität der Inhalte, das heißt über die Auswahl der Indikatoren, die Festlegung der Zielwerte und die Einteilung in die fünf Bewertungsstufen.',
          open: false
        }
        ]
      }
    },
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
      Accordeon
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/base";

  section {

     &:nth-child(odd){
      background: $color-light;
    }
  }
</style>



