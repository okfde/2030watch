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
          <img class="blogpost-image" src="~/assets/img/method_illustration.png" alt="Blogpost Bild">
        </div>
      </header>
      <section class="blog-body wrapper">

        <vue-markdown>
Vor 3 Jahren wurde am 25. September 2015 die Agenda 2030 als ein historisches Dokument unter dem Titel [Transformation unserer Welt](https://www.un.org/Depts/german/gv-70/band1/ar70001.pdf) von 193 Mitgliedstaaten verabschiedet. Neben der Anerkennung der planetaren Grenzen und Wechselwirkungen von ökologischer Tragfähigkeit, sozialer Gerechtigkeit und Wirtschaftsmodellen wurde das Prinzip der gemeinsamen aber unterschiedlichen Verantwortlichkeiten verankert. Die Verantwortung der reichen Länder für ihre überdurchschnittlichen Auswirkungen auf soziale und ökologische globale Rahmenbedingungen war damit ein zentrales Versprechen der Agenda 2030. Drei Jahre später fragen wir, wurde dieses Versprechen eingehalten?

In Deutschland wurde die Agenda 2030 in die [Deutsche Nachhaltigkeitsstrategie](https://www.bundesregierung.de/Content/Infomaterial/BPA/Bestellservice/Deutsche_Nachhaltigkeitsstrategie_Neuauflage_2016.html?nn=437032) übersetzt, die mit 63 Indikatoren die Ziele einer nachhaltigen Transformation bis 2030 darstellt. Bei den Zielen dieser Strategie kommt die Verantwortung, die Deutschland als Industrienation hat, jedoch viel zu kurz. Insgesamt liegt der Schwerpunkt stark auf nationalen Indikatoren. Dabei werden viele der in der Agenda 2030 vereinbarten Unterziele ausgelassen. Beispielsweise gibt es in der Nachhaltigkeitsstrategie der Bundesregierung keine Indikatoren zur internationalen Schuldenpolitik, zu einem globalen Handelssystem oder zu Transparenz und Bürgerbeteiligung. Nur einige wenige Indikatoren messen die internationale Verantwortung Deutschlands. Und oft sind diese Ziele bezogen auf Entwicklungszusammenarbeit. Dies widerspricht dem Ansatzes der Agenda 2030, der die Verantwortung für eine nachhaltige Entwicklung nicht in dem klassischen Nord-Süd Entwicklungsgeflecht sieht.

Die sogenannten "spillover" Auswirkungen der reichen Länder auf Rahmenbedingungen in anderen Ländern ist nicht nur kompliziert, sondern wurden auch lange als nicht so wichtig eingestuft; daher wurden auch für lange Zeit keine Indikatoren hierzu entwickelt bzw. keine Daten erhoben, um Deutschlands Wirkung im Ausland abzubilden. Heute fehlen gute Fortschrittsmaßstäbe, die abbilden, wie gut Deutschland der Agenda 2030 gerecht wird. Das heißt aber nicht, dass wir die Auswirkung Deutschlands im Ausland gar nicht messen können. Auf [2030-watch.de](/) schlagen wir folgende ergänzende Indikatoren vor:
* SDG 2: Messen unseres [Fleischkonsums pro Kopf](../../../../indicator/okf-fleischkonsum). Der Konsum von Fleisch liegt nicht direkt im Einflussbereich der Bundesregierung. Allerdings setzt die deutsche Agrarpolitik die Rahmenbedingungen, die die intensive Fleischproduktion zu Niedrigpreisen ermöglicht und damit einen negativen Umwelteinfluss im In- und Ausland hat.
* SDG 12: Messen unseres [Ökologischen Fussabdrucks](../../../../indicator/okf-ecological-footprint), um darauf hinzuweisen, dass ein riesiger Umschwung für Deutschland nötig ist, um innerhalb der planetaren Grenzen zu leben.
* SDG 16: Messen des [Volumens von deutschen Waffenexporten](../../../../indicator/okf-volumen-waffenexporte). Wir kommen nicht umhin, das Volumen unserer exportierten Waffen als widersprüchlichen Aspekt von  Friedensentwicklung und -erhalt zu berücksichtigen. Daher sollte nicht nur die Anzahl der Projekte zur Beseitigung von Kleinwaffen gemessen werden, sondern auch die vergangene und zukünftige Verbreitung von deutschen Waffen genauestens beachtet werden. Dafür kann die Messung der Volumina von deutschen Waffenexporten dienen.

Das sind nur einige Indikatoren von 2030Watch, um dem transformativen Geist der Agenda 2030 gerecht zu werden. Natürlich ist es oft nicht einfach, angemessene Indikatoren zu finden. Allerdings sollte die Bundesregierung in Zukunft etwas ambitionierter sein. Vor allem im Hinblick auf Umwelt, Klima und Konsum ist die deutsche Gesellschaft kein Vorzeigemodell und das sollte auch in den Indikatoren sichtbar sein.
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
        blogtitle: '3 Jahre später – Wo bleibt das Versprechen einer Transformation?',
        publishingdate: '25. September 2018'
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
