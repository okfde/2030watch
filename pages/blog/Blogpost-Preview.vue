<template>
  <div class="blog-post">
    <div class="post-img">
      <nuxt-link to="/"><img src="http://via.placeholder.com/400x300" alt="Blogpost Vorschaubild"></nuxt-link>
    </div>
    <div class="post-teaser">
      <span class="caption">6. Juni 2018</span>
      <nuxt-link to="/samplepost">
        <h3>Tag der offenen Tür - Die OKF beim BMZ</h3>
      </nuxt-link>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic.</div>
      <nuxt-link to="/samplepost"><span>Mehr lesen …</span></nuxt-link>
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
