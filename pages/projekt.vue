<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Über das Projekt</h1>
        <p>Hier findest du Hintergrundinformationen und FAQs zu unserem Anliegen und unseren Zielen</p>
      </div>
    </header>
    <div class="content">
      <section class="wrapper">
        <h2>Das Projekt</h2>
        <Accordeon :faqs="background" />
      </section>
      <section>
        <div class="wrapper">
          <h2>Ziel des Projektes</h2>
          <Accordeon :faqs="ziel" />
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
          title: 'Was ist die Agenda 2030?',
          id: 'background-agenda-2030',
          body: `<p>
          Die Agenda 2030 wurde im September 2015 auf einem Gipfel der Vereinten Nationen von allen Mitgliedsstaaten verabschiedet. Mit der Agenda 2030 für Nachhaltige Entwicklung hat sich die internationale Staatengemeinschaft dafür ausgesprochen, gemeinsam die globalen Herausforderungen und den wirtschaftlichen Fortschritt im Einklang mit sozialer Gerechtigkeit im Rahmen der ökologischen Grenzen der Erde zu gestalten, zu lösen.
          </p>
          <p>
          Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für Nachhaltige Entwicklung (Sustainable Development Goals, SDGs). 193 Länder haben sich verpflichtet, die Agenda bis zum Jahr 2030 umzusetzen.
          </p>`
        },
        {
          title: 'Was sind die globalen nachhaltigen Entwicklungsziele (SDGs)?',
          id: 'background-sdgs',
          body: `<p>Das Kernstück der Agenda bildet ein ehrgeiziger Katalog mit 17 Zielen für nachhaltige Entwicklung, 169 Unterzielen und 232 Indikatoren. Der SDG-Katalog ist auf Basis eines globalen partizipativen Prozesses entwickelt worden. Die 17 SDGs berücksichtigen erstmals alle drei Dimensionen der Nachhaltigkeit – Soziales, Umwelt, Wirtschaft – gleichermaßen. Ihnen sind fünf Kernbotschaften als handlungsleitende Prinzipien vorangestellt: Mensch, Planet, Wohlstand, Frieden und Partnerschaft. Im Englischen spricht man von den "5 Ps": People, Planet, Prosperity, Peace, Partnership.</p>`
        },
        {
          title: 'Wer soll die 2030 Agenda umsetzen?',
          id: 'background-umsetzung',
          body: `<p>Die 2030 Agenda ist eine freiwillige Selbstverpflichtung der Regierungen aus 193 Ländern. Dazu "übersetzen" alle beteiligten Länder den globalen SDG-Katalog in einen eigenen Fahrplan, um die globalen Nachhaltigkeitsziele umzusetzen. In Deutschland ist die Deutsche Nachhaltigkeitsstrategie (DNS) der zentrale Umsetzungsrahmen der Agenda 2030.</p>
          <p>Die United Nations (UN) spielt bei der Koordinierung der 2030 Agenda und der Weiterentwicklung des SDG-Indikatorenkatalogs eine entscheidende Rolle. Zivilgesellschaftliche Gruppen, Wissenschaftler*innen und Unternehmen sind aufgerufen, sich ebenfalls an der Umsetzung der Agenda zu beteiligen, allerdings gibt es dazu keine formelle Selbstverpflichtung.</p>`
        }
        ],
        ziel: [{
          title: 'Was ist das Ziel von 2030Watch?',
          id: 'ziel-2030Watch',
          body: `<p>Die Vision von 2030Watch ist es, dass Deutschland die globalen Nachhaltigkeitsziele ambitioniert umsetzt.</p>
          <p>Um diese Vision zu verfolgen, zeichnet 2030Watch anhand von Indikatoren ein Bild, wie erfolgreich Deutschland die SDGs umsetzt. Indem 2030Watch offizielle Indikatoren der Deutschen Nachhaltigkeitsstrategie mit Indikatoren aus der Zivilgesellschaft ergänzt, wollen wir</p>
          <p>– eine kritische Sichtweise über den Stand der Umsetzung von Nachhaltigkeit in Deutschland anbieten,</p>
          <p>– Handlungsfelder beleuchten,</p>
          <p>– die Forderung "Leave no one behind" ("Lass niemanden zurück") der Agenda 2030 erfüllen, und</p>
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
          <p>Die Inhalte auf unserer Seite sind somit als Diskussionsbeitrag, Standpunktesammlung und Positionierung gedacht.</p>`
        },
        {
          title: 'Verfälscht 2030Watch damit eine objektive Berichterstattung?',
          id: 'ziel-objektive-berichterstattung',
          body: `<p>Die 2030 Agenda stellt lediglich einen Rahmen für politische Entscheidungen der nächsten 15 Jahre dar (2015-2030). Viele Ziele und Unterziele der Agenda sind vage formuliert und enthalten noch sehr viel Interpretationsspielraum. Je nachdem wie ein Unterziel interpretiert wird, können unterschiedliche Indikatoren gewählt werden. Jede Auswahl von Indikatoren ist daher von Interessen und politischen Prioritäten geleitet. Das gilt für die Indikatorenauswahl der UN Statistikkommission genauso wie für die Indikatorenauswahl der Bundesregierung und von 2030Watch.</p>
          <p>Auch die Festlegung eines Zielwertes je Indikator ist oft eine politische Entscheidung, die nicht objektiv richtig oder objektiv falsch ist. Zum Beispiel gibt es viele mögliche Antworten auf die Frage, welche Arbeitslosenrate Deutschland bis 2030 anstreben soll. Ist eine Arbeitslosenrate von 8% sehr gut oder gut oder sehr schlecht?</p>`
        },
        {
          title: 'Wie wird 2030Watch weiterentwickelt?',
          id: 'ziel-2030Watch-weiterentwicklung',
          body: `<p>Bis Ende des Sommer 2018 wird 2030Watch zu allen 17 SDGs Indikatorenvorschläge veröffentlichen. Außerdem überlegen wir, wie wir andere Features wie z.B. ein Mapping schon verbindlicher Abkommen zu den verschiedenen SDGs hinzufügen können. Im Sommer 2018 werden wir noch viele Anpassungen an unsere Webseite 2030Watch unternehmen und freuen uns über euer Feedback hierzu.</p>`
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
