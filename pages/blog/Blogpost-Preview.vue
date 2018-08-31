<template>
  <div class="blog-post">
    <div class="post-img">
      <nuxt-link to="">
        <img class="preview-image" src="~/assets/img/method_illustration.png" alt="Blogpost Vorschaubild">
      </nuxt-link>
    </div>
    <div class="post-teaser">
      <span class="caption">6. Juni 2018</span>
      <nuxt-link to="/blog-post">
        <h3>Gleise auf Nachhaltigkeit umstellen – wie weit ist der Weg eigentlich noch?</h3>
      </nuxt-link>
      <div>
        Das Thema Nachhaltigkeit wurde letzte Woche mehrmals in Deutschland unter die Lupe genommen. Ein internationales Experten*innen-Gremium stellte gestern einen <a href="https://www.nachhaltigkeitsrat.de/projekte/peer-review/" target="_blank">Bericht</a> (Peer Review) vor. Die Expert*innen kommen darin zu dem Schluss, dass die Deutsche Nachhaltigkeitspolitik bisher noch nicht genügend greift. Gleichzeitig engagierten sich so viele Menschen wie nie zuvor bei den deutschen Aktionstagen "Taten für morgen" zum Thema Nachhaltigkeit. Klar ist, dass wir auf dem Weg zu einem nachhaltigeren Deutschland sind, jedoch nicht ausreichend viele Gleise umgestellt sind. Es steht also zur Debatte, wie (ehrgeizig) wir diese Transformation angehen.
        <nuxt-link to="/blog-post"><span>Mehr lesen …</span></nuxt-link>
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
    }

    .post-teaser {
      flex: 1;
    }
  }

  .preview-image {
    max-width: 300px;
    // TODO
    @media (max-width: 900px) {
      max-width: 200px;
    }
    @media (max-width: 600px) {
      display: none
    }
  }
</style>
