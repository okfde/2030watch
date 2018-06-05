<template>
  <div class="blog-post">
    <div class="post-img">
      <nuxt-link to="/">
        <img src="~/assets/img/method_illustration.png" style="max-width:300px" alt="Blogpost Vorschaubild">
      </nuxt-link>
    </div>
    <div class="post-teaser">
      <span class="caption">6. Juni 2018</span>
      <nuxt-link to="/nachhaltigkeit">
        <h3>Gleise auf Nachhaltigkeit umstellen – wie weit ist der Weg eigentlich noch?</h3>
      </nuxt-link>
      <div>
      </div>
      Die letzte Woche nahm Nachhaltigkeit in Deutschland unter die Lupe. Ein internationales Experten Gremium stellte gestern einen <a href="https://www.nachhaltigkeitsrat.de/projekte/peer-review/" target="_blank">Bericht</a> mit der Schlussfolgerung, dass die Deutsche Nachhaltigkeitspolitik noch nicht nachhaltig genug ist, vor. Gleichzeitig engagierten sich so viele Menschen wie nie zuvor bei den deutschen Aktionstagen Nachhaltigkeit.
      <nuxt-link to="/nachhaltigkeit"><span>Mehr lesen …</span></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog | 2030Watch'
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
</style>
