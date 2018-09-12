<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Blog</h1>
        <section class="columns columns-gutter">
          <div>
            <p>
              Hier erfährst du mehr zu aktuellen Themen rund um 2030Watch und unseren Aktivitäten.<br />
              Du möchtest über ein Thema, welches wir als Indikator haben, bloggen, dann melde dich bei uns.
            </p>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <header class="blog-header">
        <div class="blog-title">
          <div class="title-wrapper">
            <div class="back-btn"><nuxt-link to="/blog">&larr; Übersicht Artikel</nuxt-link></div>
            <div class="caption">31. August 2018</div>
            <h2>Wir müssen reden – Wie ambitioniert ist unsere Nachhaltigkeitsdebatte wirklich?</h2>
          </div>
        </div>
        <div class="blog-image">
          <img class="blogpost-image" src="~/assets/img/lena-bell-68534-unsplash.jpg" alt="Blogpost Bild">
        </div>
      </header>
      <section class="blog-body wrapper">

        <div>
          Ab sofort ist unsere Projektseite zur nationalen Umsetzung der globalen Nachhaltigkeitsziele in Deutschland mit allen 17 Zielen und ihren Indikatoren komplett. Auf <nuxt-link to="/">2030-watch.de</nuxt-link> könnt ihr mehr über die Fortschritte der offiziellen Ziele und ihre jeweiligen Indikatoren lernen. Zudem bieten wir zahlreiche ergänzende Indikatoren zur Erweiterung des Nachhaltigkeitsbildes in Deutschland. So könnt ihr einen Perspektivwechsel erleben und der Frage nachgehen: Wie ambitioniert ist die Nachhaltigkeitsdebatte in Deutschland? Wir tun das, weil viele offizielle Ziele zahnlos erscheinen, andere wiederum zu schwach angesetzt sind und manche relevanten Themen schlichtweg gar nicht vorkommen. Die Nachhaltigkeitsstrategie eines der reichsten Länder der Welt kann und sollte sich ein umfassenderes Bild zur Aufgabe machen – inländisch sowie international.
        </div>

        <br />

        <div>
          <h3>Wer, wenn nicht wir?</h3>
          Wir untersuchen die Nachhaltigkeitsstrategie Deutschlands also aus mehreren Motivationen heraus. Deutschland ist ein hochentwickeltes und konsumstarkes Industrieland mit einem hohen Wohlstandsstatus, der teilweise über Nutzung von Ressourcen Dritter erreicht wird. Allein aus diesem Grund stehen wir in der Verantwortung, Wirkungen unseres (Konsum-)Lebens auf uns und Dritte zu berücksichtigen. Hier zu nennen ist zuallererst der <nuxt-link to="/indicator/okf-ecological-footprint/">ökologische Fußabdruck</nuxt-link>, der bis dato im offiziellen Indikatorkatalog fehlt. Ein weiteres anschauliches Beispiel ist das <nuxt-link to="/indicator/okf-verpackungsmuell/">Verpackungsmüllaufkommen pro Kopf</nuxt-link>. Hier gehören wir zu den Spitzenreitern in Europa. Beide Indikatoren haben wir <nuxt-link to="/sdg/konsum/">SDG 12 Nachhaltiger Konsum und Produktion</nuxt-link> zugeordnet und fordern Wirtschaft, Industrie, Staat und Bürgerinnen zu einem Über- und Umdenken auf. Auch der <nuxt-link to="/indicator/okf-pestizide-landwirtschaft/">Einsatz von Pestiziden in der Landwirtschaft</nuxt-link> in <nuxt-link to="/sdg/ernaehrung/">SDG 2 Kein Hunger</nuxt-link> erzeugt Folgen. Der Einsatz solcher und anderer (oft durch naturverträgliche substituierbarer) Substanzen spielt sozial, ökonomisch und ökologisch über unsere Grenzen hinaus eine weittragende Rolle.
        </div>

        <br />

        <div>
          Auch anders gelagerte politische und wirtschaftliche Strategien und Umsetzungen müssen reformiert werden: So wird über <nuxt-link to="/sdg/infrastruktur/">SDG 9</nuxt-link> das Ziel verfolgt, den Aufbau und Erhalt von widerstandsfähigen Infrastrukturen, die Förderung von breitenwirksamer und nachhaltiger Industrialisierung und Innovationen für eine Nachhaltige Entwicklung zu sichern. Doch bisher findet sich im <a href="https://www.bundesregierung.de/Content/Infomaterial/BPA/Bestellservice/Deutsche_Nachhaltigkeitsstrategie_Neuauflage_2016.pdf?__blob=publicationFile&v=7" target="_blank">Katalog der Deutschen Nachhaltigkeitsstrategie</a> nur ein einzelner offizieller Indikator, der diesen komplexen Kontext beschreibt: <nuxt-link to="/indicator/dns-forschung-und-entwicklung/">Investitionen in Forschung und Entwicklung</nuxt-link>. Deshalb fordern wir, weitere Themen mit einzubeziehen und schlagen gleich vier weitere Indikatoren vor, wie die Anzahl von <nuxt-link to="/indicator/okf-wissenschaftler/">"Wissenschaftler*innen in Forschung und Entwicklung"</nuxt-link> im Vergleich sonstiger Beschäftigter zu berücksichtigen oder den Grad an Bereitstellung offener Daten in Form des <nuxt-link to="/indicator/okf-open-data-index/">"Open Data Index"</nuxt-link>.
        </div>

        <br />

        <div>
          Wir streben mit den Vorschlägen an, die Nachhaltigkeitsdebatte um relevante bisher noch nicht ausreichend berücksichtigte Aspekte zu erweitern, um eine umfassendere Bewertung für eine zukunftsfähige Entwicklung zu fördern.
        </div>

        <br />

        <div>
          Die von uns recherchierten Indikatoren sind aus zahlreichen Expert*innen-Quellen. Dazu haben wir die Datenpatenschaften ins Leben gerufen. Ziel von 2030Watch ist es, für jeden Indikator einen Datenpaten zu haben. Datenpaten sind Fachorganisationen, die einen Indikator "adoptieren", den sie für ein Unterziel für sinnvoll halten. Darüber hinaus unterstützen sie das Projekt in der Datenbereitstellung. Bei Interesse, Datenpate zu werden, wendet euch bitte an <a href="mailto:2030-watch@okfn.de">2030-watch@okfn.de</a>. Bei dieser Gelegenheit möchten wir unseren Datenpat*innen herzlichst für ihre Unterstützung bedanken.
        </div>

      </section>

      <section class="blog-footer wrapper">
        <span class="caption">Post teilen</span>
        <span class="social-icons">
          <a :href="'mailto:?subject=' + encodeURIComponent('Wir müssen reden – Wie ambitioniert ist unsere Nachhaltigkeitsdebatte wirklich?') + '&body=' + encodeURIComponent(link)" title="Blogpost per E-Mail teilen"><i class="icon-mail" /></a>
          <a :href="'https://twitter.com/share?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent('Wir müssen reden – Wie ambitioniert ist unsere Nachhaltigkeitsdebatte wirklich?')" target="_blank" title="Blogpost auf Twitter teilen"><i class="icon-twitter" /></a>
          <a :href="'https://facebook.com/sharer.php?u=' + encodeURIComponent(link)" target="_blank" title="Blogpost auf Facebook teilen"><i class="icon-facebook-official" /></a>
        </span>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Wir müssen reden – Wie ambitioniert ist unsere Nachhaltigkeitsdebatte wirklich? | Blogpost | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Blogpost' }
        ]
      }
    },
    data: function () {
      return {
        link: ''
      }
    },
    mounted: function () {
      // TODO check for better way to use router base
      const base = this.$router.options.base === '/' ? '' : this.$router.options.base
      this.link = window.location.origin + base + this.$route.fullPath
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
      align-items: center;
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
        padding-left: 1.4rem;
      }
    }
  }

  .blogpost-image {
    max-width: 400px;
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
