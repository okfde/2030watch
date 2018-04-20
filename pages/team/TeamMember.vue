<template>
  <div class="team-member">
      <div class="avatar">
          <img src="http://via.placeholder.com/100x100" alt="2030 Watch Team Avatar">
      </div>
      <div class="info">
          <div class="name">Max Mustermann</div>
          <div class="role">Projektleiter</div>
          <div class="socials">
              <img src="../../assets/icons/email.png" alt="Email Icon">
              <img src="../../assets/icons/twitter.png" alt="Twitter Icon">
          </div>
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

.team-member {
    display: flex;
    align-items: center;

    .avatar {
        margin-right: 20px;
        img {
            border-radius: 100%;
         }
    }

    .info {
        .name {
            color: $color-accent;
            font-weight: 600;
        }

        .role {
            margin-bottom: 10px;
            line-height: 1.2;
        }
        .socials {
            img{
              margin-right: 10px;
            }
        }
    }
}

</style>
