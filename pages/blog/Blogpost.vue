<template>
  <div class="blog-post">
    <div class="post-img">
      <nuxt-link to="/"><img src="http://via.placeholder.com/350x300" alt="Blogpost Vorschaubild"></nuxt-link>
    </div>
    <div class="post-preview">
      <span>Datum</span>
      <nuxt-link to="/"><h3>Das ist ein Titel</h3></nuxt-link>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi dolorum quas, impedit minus ullam aperiam nulla sed voluptate eaque expedita, est similique alias debitis nisi vel, libero hic perspiciatis.</div>  

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

.blog-post{
  display: flex;

  & > * {
    padding: $spacing 0;
  }

  .post-img{
    flex: 1;
  }

  .post-preview{
    flex: 1;
  }
}

</style>
