<template>
  <div>
    <div class="blog-post">
      <div class="post-img">
        <nuxt-link to="">
          <img class="preview-image" src="~/assets/img/method_illustration.png" alt="Blogpost Vorschaubild">
        </nuxt-link>
      </div>
      <div class="post-teaser">
        <span class="caption">25. September 2018</span>
        <div class="blog-post-title">
          <nuxt-link to="/blog/2018/09/25/3-jahre-spaeter">
            <h3>3 Jahre später – Wo bleibt das Versprechen einer Transformation?</h3>
          </nuxt-link>
        </div>
        <div>
          Vor 3 Jahren wurde am 25. September 2015 die Agenda 2030 als ein historisches Dokument unter dem Titel <a target="_blank" href="http://www.un.org/Depts/german/gv-70/band1/ar70001.pdf">Transformation unserer Welt</a> von 193 Mitgliedstaaten verabschiedet. Neben der Anerkennung der planetaren Grenzen und Wechselwirkungen von ökologischer Tragfähigkeit, sozialer Gerechtigkeit und Wirtschaftsmodellen wurde das Prinzip der gemeinsamen aber unterschiedlichen Verantwortlichkeiten verankert. Die Verantwortung der reichen Länder für ihre überdurchschnittlichen Auswirkungen auf soziale und ökologische globale Rahmenbedingungen war damit ein zentrales Versprechen der Agenda 2030. Drei Jahre später fragen wir, wurde dieses Versprechen eingehalten?
          <nuxt-link to="/blog/2018/09/25/3-jahre-spaeter"><span>Mehr lesen …</span></nuxt-link>
        </div>
      </div>
    </div>

    <div class="blog-post">
      <div class="post-teaser">
        <span class="caption">31. August 2018</span>
        <div class="blog-post-title">
          <nuxt-link to="/blog/2018/08/31/wir-muessen-reden">
            <h3>Wir müssen reden – Wie ambitioniert ist unsere Nachhaltigkeitsdebatte wirklich?</h3>
          </nuxt-link>
        </div>
        <div>
          Ab sofort ist unsere Projektseite zur nationalen Umsetzung der globalen Nachhaltigkeitsziele in Deutschland mit allen 17 Zielen und ihren Indikatoren komplett. Auf 2030-watch.de könnt ihr mehr über die Fortschritte der offiziellen Ziele und ihre jeweiligen Indikatoren lernen. Zudem bieten wir zahlreiche ergänzende Indikatoren zur Erweiterung des Nachhaltigkeitsbildes in Deutschland. So könnt ihr einen Perspektivwechsel erleben und der Frage nachgehen: Wie ambitioniert ist die Nachhaltigkeitsdebatte in Deutschland? <nuxt-link to="/blog/2018/08/31/wir-muessen-reden"><span>Mehr lesen …</span></nuxt-link>
        </div>
      </div>
      <div class="post-img">
        <nuxt-link to="">
          <img class="preview-image" src="~/assets/img/lena-bell-68534-unsplash.jpg" alt="Blogpost Vorschaubild">
        </nuxt-link>
      </div>
    </div>

    <div class="blog-post">
      <div class="post-img">
        <nuxt-link to="">
          <img class="preview-image" src="~/assets/img/method_illustration.png" alt="Blogpost Vorschaubild">
        </nuxt-link>
      </div>
      <div class="post-teaser">
        <span class="caption">6. Juni 2018</span>
        <div class="blog-post-title">
          <nuxt-link to="/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen">
            <h3>Gleise auf Nachhaltigkeit umstellen – wie weit ist der Weg eigentlich noch?</h3>
          </nuxt-link>
        </div>
        <div>
          Das Thema Nachhaltigkeit wurde letzte Woche mehrmals in Deutschland unter die Lupe genommen. Ein internationales Experten*innen-Gremium stellte gestern einen <a href="https://www.nachhaltigkeitsrat.de/projekte/peer-review/" target="_blank">Bericht</a> (Peer Review) vor. Die Expert*innen kommen darin zu dem Schluss, dass die Deutsche Nachhaltigkeitspolitik bisher noch nicht genügend greift. Gleichzeitig engagierten sich so viele Menschen wie nie zuvor bei den deutschen Aktionstagen "Taten für morgen" zum Thema Nachhaltigkeit. Klar ist, dass wir auf dem Weg zu einem nachhaltigeren Deutschland sind, jedoch nicht ausreichend viele Gleise umgestellt sind. Es steht also zur Debatte, wie (ehrgeizig) wir diese Transformation angehen.
          <nuxt-link to="/blog/2018/06/06/gleise-auf-nachhaltigkeit-umstellen"><span>Mehr lesen …</span></nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog | 2030Watch',
      meta: [
        { hid: 'description', name: 'description', content: 'Blog' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .blog-post {
    display: flex;

    & > * {
      padding: $spacing 0;
    }

    .post-img {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .post-teaser {
      flex: 1;
    }
  }

  .preview-image {
    max-width: 380px;
  }

  .blog-post-title {
    margin-bottom: 0.7rem;
  }

  @media screen and (max-width: $on-laptop) {
    .blog-post {
      flex-direction: column;
    }

    .post-img {
      order: 2;
    }

    .post-teaser {
      order: 1;
    }

    .preview-image {
      max-width: 300px;
    }

    .blog-post {
      & > * {
        padding: $spacing / 2 0;
      }
    }
  }
</style>
