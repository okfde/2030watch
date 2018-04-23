<template>
  <div class="team-member">
    <div class="avatar">
        <img :src='imgUrl' alt='2030 Watch Team Avatar'>
    </div>
    <div class="info">
        <div class="name">{{name}}</div>
        <div class="role">{{role}}</div>
        <div class="socials">
            <a :href='emailFormatted'><img src='../assets/icons/email.png' alt='Email Icon'></a>
            <a href="https://twitter.com/okfde" target="_blank"><img src='../assets/icons/twitter.png' alt='Twitter Icon'></a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['team', 'name', 'imgUrl', 'role', 'email', 'twitter'],
    computed: {
      emailFormatted () {
        return `mailto:${this.email}`
      }
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
@import "../assets/style/base";

.team-member {
    display: flex;
    align-items: center;
    width: 50%;
    padding-bottom: $spacing*2;
    padding-left: $spacing*2;

    .avatar {
        margin-right: 20px;
        img {
            border-radius: 100%;
            height: 100px;
            width: 100px;
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
