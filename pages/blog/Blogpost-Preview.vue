<template>
  <div class="blog-post">
    <div class="post-img">
      <nuxt-link to="/"><img src="http://via.placeholder.com/400x300" alt="Blogpost Vorschaubild"></nuxt-link>
    </div>
    <div class="post-teaser">
      <span class="post-date">5. Mai 2018</span>
      <nuxt-link to="/"><h3>Das ist ein Beispieltitel</h3></nuxt-link>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic.</div> 
      <nuxt-link to="/"><span>Mehr lesen …</span></nuxt-link> 
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
    },
    methods: {
    },
    directives: {
    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/base";

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

    .post-date {
      text-transform: uppercase;
      font-size: 0.9rem;
      color: $color-mute;
    }
  }
}
</style>
