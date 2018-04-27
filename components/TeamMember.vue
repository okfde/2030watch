<template>
  <div class="team-member">
    <div class="avatar">
        <img :src="member.imgUrl" alt='2030 Watch Team Avatar'>
    </div>
    <div class="info">
        <div class="name">{{ member.name }}</div>
        <div class="role">{{ member.role }}</div>
        <div class="socials">
          <a v-if="member.email" :href="'mailto:' + member.email"><img src="../assets/icons/email.png" alt="Email Icon" /></a>
          <a v-if="member.twitter" :href="member.twitter" target="_blank"><img src="../assets/icons/twitter.png" alt="Twitter Icon" /></a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['member']
  }
</script>

<style lang="scss" scoped>
  @import "../assets/style/base";

  .team-member {
    display: flex;
    align-items: center;
    width: 50%;
    padding-bottom: $spacing * 2;
    padding-left: $spacing * 2;

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
        img {
          margin-right: 10px;
        }
      }
    }
  }
</style>
