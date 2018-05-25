<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1 v-if="error.statusCode === 404">
          <img src="../assets/img/404.png"/>
        </h1>
        <h1 v-else>Es ist ein Fehler aufgetreten</h1>
        <section class="columns columns-gutter">
          <div>
            <p>Diese Seite wurde leider nicht gefunden!</p>
          </div>
        </section>
      </div>
    </header>

    <div class="content">
      <div class="wrapper">
        <section>
          <p>
            Klicke <nuxt-link to="/">hier</nuxt-link> und du gelangst wieder auf unsere Startseite.
          </p>
        </section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'Die Seite wurde nicht gefunden | 2030Watch'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
