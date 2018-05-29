<template>
  <div class="page-container">
    <header class="inpage-header">
      <div class="wrapper">
        <h1>Coming soon</h1></h1>
        <section class="columns columns-gutter">
          <div>
            <p>Lorem ipsum</p>
          </div>
        </section>
      </div>
    </header>
    <div class="content">
         <section>
          <div class="wrapper">
            <h2>TODO</h2>
             <h4>Hier kannst Du Dich weiter informieren um mehr zum Thema Nachhaltigkeit in Deutschland zu erfahren:</h4>
             <div class="activity">
                <a href="#">I. Die Deutsche Nachhaltigkeitsstrategie</a>
             </div>
             <div class="activity">
              <span>II. Ministerien und Ämter</span>
              <ul>
                <a href="#"><li>UBA</li></a>
                <a href="#"><li>Item</li></a>
                <a href="#"><li>Item</li></a>
              </ul>
             </div>
             <div class="activity">
              <span>III. Zivilgesellschaftliche Organisationen</span>
              <ul>
                <a href="#"><li>VENRO</li></a>
                <a href="#"><li>FUE</li></a>
                <a href="#"><li>Item</li></a>
              </ul>
             </div>
             <div class="activity">
              <span>IV.SDG Events</span>
              <ul>
                <a href="#"><li>17ziele.de</li></a>
                <a href="#"><li>Item</li></a>
                <a href="#"><li>Item</li></a>
              </ul>
             </div>
             <div>
               <a href="#">V. Vereinte Nationen</a>
             </div>
          </div>
        </section>
         <section>
          <div class="wrapper">
            <h2>Werde aktiv!</h2>
            <div>
              <h4>Schreibe deinem Abgeordneten (Beispiel)</h4>
              <div class="activity">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus?</p>
              </div>
              <h4>Halte ein Workshop zu den SDGs</h4>
              <div class="activity">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus?</p>
              </div>
              <h4>Teile unsere Message auf Twitter</h4>
              <div class="activity">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia natus fugiat officiis voluptatum minus vel voluptas itaque qui architecto nemo soluta facilis voluptatibus quas, accusantium obcaecati, rerum hic vero accusamus?</p>
              </div>
              <h2>Hast Du noch mehr Fragen? Dann <a href="#">kontaktiere</a>  uns!</h2>
            </div>
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
        title: 'Werde aktiv | 2030Watch'
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
