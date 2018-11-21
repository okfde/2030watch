<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <p>
          Hier erfährst du mehr zu aktuellen Themen rund um 2030Watch und unseren Aktivitäten.<br />
          Du möchtest über ein Thema, welches wir als Indikator haben, bloggen, dann melde dich bei uns.
        </p>
      </div>
    </header>
    <div class="content">
      <header class="blog-header">
        <div class="blog-title">
          <div class="title-wrapper">
            <div class="back-btn"><nuxt-link to="/blog">&larr; Übersicht Artikel</nuxt-link></div>
            <div class="caption">{{ publishingdate }}</div>
            <h2>{{ blogtitle }}</h2>
          </div>
        </div>
        <div class="blog-image">
          <img class="blogpost-image" src="~/assets/img/BUB_Logo_RGB.jpg" alt="Blogpost Bild">
        </div>
      </header>
      <section class="blog-body wrapper">

<!-- You can write markdown inside the following vue-markdown tags. See a live demo of vue-markdown here: http://miaolz123.github.io/vue-markdown/ -->
        <vue-markdown>
Die Konferenz [“Bits&Bäume”](https://bits-und-baeume.org/de) in der TU Berlin ist am letzten Wochenende (17.11. bis 18.11.2018) erfolgreich zu Ende gegangen. 10 Organisationen haben sich vor anderthalb Jahren zusammengeschlossen und als ein gemeinsamer Trägerkreis aus der netz-, umwelt- und entwicklungspolitischen Szene die Konferenz mit viel Liebe zum Detail organisiert. Auch der Trägerverein von 2030Watch, die Open Knowledge Foundation (OKF), gehört dazu und hat tatkräftig mitgemischt. Über 1300 Tickets waren bereits im Vorfeld verkauft worden, mindestens 400 kamen über ReferentInnentickets, HelferInnen und Tageskasse noch hinzu. 
Die Konferenz hatte das Ziel zwei bisher nicht stark miteinander agierende Communities - der sogenannten “HackerInnen” und “Ökos” (Bits&Bäume) - miteinander zu vernetzen und dazu wurde durch ein umfangreiches und abwechslungsreiches [Programm](https://fahrplan.bits-und-baeume.org/) geboten. Dieser Plan ist aufgegangen. Die beiden Communities hatten die Möglichkeit, sich bei zahlreichen Workshops miteinander auszutauschen, an Ständen und mit Wohnzimmer-feeling eingerichteten Arbeitstischen im Forum verschiedene Projekte und Organisationen kennen zu lernen, an einem abwechslungsreichen Abendprogramm teilzuhaben oder sich einfach beim Mittagessen miteinander zu vernetzen. Gleichzeitig haben die über 79 Vorträge und Panels auf den fünf Bühnen die Themenvielfalt, aber auch die zahlreichen Überschneidungen, beider Communities deutlich gezeigt. Gleiche Werte und hohes Engagement sowie Verantwortungsbewusstsein sind nur drei Beispiele für diese Überschneidungen. 
Die Gründe für die notwendige und wünschenswerte Zusammenführung der beiden Communities könnt ihr in dem Video der Eröffnung [“Was Bits und Bäume miteinander verbindet”](https://media.ccc.de/v/bub2018-245-was_bits_baume_verbindet) noch einmal nachvollziehen. Darin stellen die Mitorganisierenden der 10 Trägerkreisesgruppen das phantasievolle und mit viel Liebe zum Detail zusammengestellte zweitägige Programm vor: Es setzte sich aus kuratierten Talks, Panels, Workshop, Forum und Abendprogramm zusammen. Tilmann Santarius (IÖW) und Constanze Kurz (ccc, netzpolitik.org) arbeiten in ihrer thematischen [Einführung (Min 13)](https://media.ccc.de/v/bub2018-245-was_bits_baume_verbindet#t=782) die Essenz heraus, warum die Konferenz so wichtig ist, und es an der Zeit war, beide Gruppen auf Bits&Bäume endlich zusammen zu bringen. In seiner [Keynote (Min 36)](https://media.ccc.de/v/bub2018-245-was_bits_baume_verbindet#t=2195) gibt Lorenz Hilty einen lohnenswerten Einblick in weitere aktuelle Fragestellungen zu einer nachhaltigen Digitalisierung mit Blick auf die Entwicklung der digitalen Welt.  
Auch 2030Watch war mit dabei. Wir möchten euch unseren kurzen eigenen Beitrag ans Herz legen. Unsere Kollegin Saadya Windauer, die als Projektmanagerin seit Jahresbeginn für das Projekt arbeitet, hat das Projekt 2030Watch vorgestellt und dabei einen Überblick über die Agenda 2030 gegeben. Ihr könnt [ihren Beitrag ](https://media.ccc.de/v/bub2018-103-2030watch_wie_nachhaltig_ist_deutschland#t=0) nachschauen, teilen und gerne auch auf [Twitter](https://twitter.com/2030watchde?lang=en) oder per [Mail](2030-watch@okfn.de) kommentieren. Die [Präsentation "Wie nachhaltig ist Deutschland? Fortschritt kann man messen. Und wie?!](https://www.2030-watch.de/document/BitsundBaeume_Windauer_2030Watch_final.pdf) mit weiterführenden Informationen könnt ihr als pdf runterladen. 
Aus den insgesamt 5 Tracks “Alternatives Wirtschaften”, “Daten & Umwelt”, “Die ganz großen Fragen”, “Die materielle Basis”, “Digitaler Kapitalismus”, “Stadt – Land – Smart” und  “Zivilgesellschaft & Communities” könnt ihr euch eure Lieblingsthemen heraussuchen und nachschauen. Dafür hat das Video Operation Center vom Chaos Computer Club (c3voc) für eine  nachhaltige Dokumentation der Konferenz alle Vorträge von den 5 Hauptbühnen (nach Zustimmung der ReferentInnen) auf [media.ccc](https://media.ccc.de/c/bub2018) zum Nachschauen zur Verfügung gestellt.
Die 10 Organisationen aus der Netz-, Umwelt- und Entwicklungspolitik haben mit der Konferenz „Bits und Bäume“ eine eindrucksvolle Diskussion darüber angestoßen, wie die Digitalisierung so gestaltet werden kann, dass sie dem Gemeinwohl und Frieden dient, Datenschutz ernst nimmt und soziale und ökologische Ziele gleichermaßen fördert. Dazu gibt es hier die insgesamt [10 Forderungen](https://bits-und-baeume.org/forderungen/de), die alle Organisationen mitgezeichnet haben und die wir euch wärmsten empfehlen!


        </vue-markdown>

      </section>

      <section class="blog-footer wrapper">
        <span class="caption">Post teilen</span>
        <span class="social-icons">
          <a :href="'mailto:?subject=' + encodeURIComponent(blogtitle) + '&body=' + encodeURIComponent(link)" title="Blogpost per E-Mail teilen"><i class="icon-mail" /></a>
          <a :href="'https://twitter.com/share?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent(blogtitle)" target="_blank" title="Blogpost auf Twitter teilen"><i class="icon-twitter" /></a>
          <a :href="'https://facebook.com/sharer.php?u=' + encodeURIComponent(link)" target="_blank" title="Blogpost auf Facebook teilen"><i class="icon-facebook-official" /></a>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    head () {
      return {
        title: `${this.blogtitle} | Blogpost | 2030Watch`,
        meta: [
          { hid: 'description', name: 'description', content: 'Blogpost' }
        ]
      }
    },
    data: function () {
      return {
        link: '',
        blogtitle: 'Bits&Bäume - eine Konferenz, die Communities zusammen bringt! Ein kleiner Rückblick auf die Bits & Bäume Konferenz',
        publishingdate: '20.November 2018'
      }
    },
    mounted: function () {
      this.link = window.location.href
    },
    components: {
      VueMarkdown
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .blog-header {
    display: flex;
    height: 400px;
    position: relative;

    .blog-title {
      flex: 1;
      background-color: #f9f9f9;

      .title-wrapper {
        width: 50%;
        margin: 15vw 15vw 0;

        .back-btn {
          position: absolute;
          width: 50%;
          top: $spacing * 2;
        }

        h2 {
          color: $color-default;
        }
      }
    }

    .blog-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }

  .blog-footer {
    .social-icons {
      a {
        padding-left: 1.4rem;
      }
    }
  }

  .blogpost-image {
    max-width: 350px;
  }

  h2 {
    font-size: 1.4rem;
  }

  @media screen and (max-width: $on-laptop) {
    .blogpost-image {
      display: none;
    }

    .blog-header {
      height: auto;
      position: inherit;
    }

    .blog-header .blog-image {
      flex: none;
    }

    .blog-header {
      .blog-title {
        background-color: inherit;
        .title-wrapper {
          width: 80%;
          .back-btn {
            position: inherit;
            width: inherit;
          }
        }
      }
    }
  }
</style>
