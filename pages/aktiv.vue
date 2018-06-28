<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Werde aktiv</h1></h1>
        <section class="columns columns-gutter">
          <div>
            <p>
              Deutschland hat noch großen Handlungsbedarf, um die Ziele der Agenda 2030 ambitioniert umzusetzen.
              Setze dich dafür ein, dass sich etwas ändert!
            </p>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
      <section>
        <div class="wrapper">
          <h2>Coming soon</h2>
        </div>
      </section>
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
    },
    head () {
      return {
        title: 'Werde aktiv | 2030Watch',
        meta: [
          { hid: 'description', name: 'description', content: 'Werde aktiv' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/variables";

  .content {
    section {

       &:nth-child(even){
        background: $color-light;
      }

      .wrapper {

        .activity {
          margin-bottom: $spacing;

          ul {
            padding-left: $spacing;

            li {
              list-style-type: circle;
            }
          }
        }
      }
    }
  }

</style>
