<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Erfahre mehr zu aktuellen Themen rund um 2030Watch und unseren Aktivitäten</p>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <header class="blog-header">
        <div class="blog-title">
          <div class="title-wrapper">
            <div class="back-btn"><nuxt-link to="/blog">&larr; Übersicht Artikel</nuxt-link></div>
            <div class="caption">23. Februar 2018</div>
            <h2>Tag der offenen Tür - Die OKF beim BMZ</h2>
          </div>
        </div>
        <div class="blog-image">Bild</div>
      </header>
      <section class="blog-body wrapper">
        <h4>Wir suchen dich!</h4>
        <p>Wie können wir die Nachhaltigkeit in der deutschen Politik messen? Welche Daten kann man für Nachhaltigkeitsmonitoring heranziehen? Und wie kann man das Monitoring von Nachhaltigkeit übersichtlich und interessant visualisieren? Interessieren Dich solche Fragen und hast Du Lust an einem coolen Datenprojekt bei der Open Knowledge Foundation Deutschland zu arbeiten? Dann solltest Du weiter lesen!</p>
        <h4>Was musst du können?</h4>
        <p>Damit es nicht bei leeren Versprechen bleibt, hat die Open Knowledge Foundation Deutschland das datenbasierte Monitoringtool <a href="https://2030-watch.de/monitoring/">2030Watch</a>, entwickelt, um die Erreichung der siebzehn globalen Nachhaltigkeitsziele (Sustainable Development Goals - SDGs) zu messen.</p>
        <ul>
          <li>Organisation und Institution</li>
          <li>Finanzen und Buchhaltung</li>
          <li>Planung und Struktur</li>
          <li>Zeitplanung / Timetable</li>
          <li>Weitere Planung</li>
        </ul>
        <h4>Schreib uns eine Mail!</h4>
        <p>Um 2030Watch erfolgreich weiter zu entwickeln und auch auf lokaler Ebene zu pilotieren suchen wir jetzt zum nächst möglichen Zeitpunkt eine neue Projektleitung und eine studentische Mitarbeit in unserem Büro in Berlin. Neben der Verbesserung des Tools und dem weiteren Aufbau eines Netzwerkes von Nutzern und Datenpaten soll es bis Ende 2018 darum gehen, in vier deutschen Städten zusammen mit Kommunen und Zivilgesellschaft lokale Monitoringtools zu entwicklen. Wir freuen uns auf Eure Bewerbung bis zum 20 Februar! Bitte schickt die elektronische Bewerbung an <a href="mailto:claudia.schwegmann@okfn.de">claudia.schwegmann@okfn.de</a></p>
      </section>
      <section class="blog-footer wrapper">
        <span class="caption">Post teilen</span>
         <span class="social-icons">
          <a :href="'mailto:?subject=' + encodeURIComponent('Tag der offenen Tür - Die OKF beim BMZ') + '&body=' + encodeURIComponent(link)" title="Blogpost per E-Mail teilen"><i class="icon-mail" /></a>
          <a :href="'https://twitter.com/share?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent('Tag der offenen Tür - Die OKF beim BMZ')" target="_blank" title="Blogpost auf Twitter teilen"><i class="icon-twitter" /></a>
          <a :href="'https://facebook.com/sharer.php?u=' + encodeURIComponent(link)" target="_blank" title="Blogpost auf Facebook teilen"><i class="icon-facebook-squared" /></a>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
  import BlogpostPreview from '~/pages/blog/Blogpost-Preview.vue'

  export default {
    components: {
      BlogpostPreview
    },
    head () {
      return {
        title: 'Tag der offenen Tür - Die OKF beim BMZ | Blogpost | 2030Watch'
      }
    },
    data: function () {
      return {
        link: ''
      }
    },
    mounted: function () {
      this.link = window.location.origin + this.$route.fullPath
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
      background-color: #fff;

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
      background-color: $color-light;
      text-align: center;
      padding: $spacing * 6 0;
    }

  }

  .blog-body {
    p, ul {
      margin: 0 0 $spacing 0;
    }

    ul {
      padding-left: $spacing;

      li {
        list-style-type: circle;
      }
    }
  }

  .blog-footer {
    .social-icons {
      a {
        padding: 0 10px;
      }
    }
  }
</style>
