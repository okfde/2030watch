<template>
  <div class="team-member">
    <div class="avatar">
      <img :src="member.imgUrl" :alt="'Foto von ' + member.name" />
    </div>
    <div class="info">
      <div class="name">{{ member.name }}</div>
      <div class="role">{{ member.role }}</div>
      <div class="socials">
        <a v-if="member.email" :href="'mailto:' + member.email">
          <i class="icon-mail" title="E-Mail" />
        </a>
        <a v-if="member.twitter" :href="member.twitter" target="_blank">
          <i class="icon-twitter" title="Twitter" />
        </a>
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
  @import "~@/assets/style/variables";

  .team-member {
    display: flex;
    align-items: center;
    width: 50%;
    padding-bottom: $spacing * 2;

    .avatar {
      margin-right: 20px;

      img {
        border-radius: 100%;
        height: 100px;
        width: 100px;
       }
    }

    .info {
      span {
        display: block
      }

      .name {
        font-weight: bold;
        font-size: 1.25rem;
      }

      .role {
        margin-bottom: 10px;
        line-height: 1.2;
      }

      .socials {
        i {
          margin-right: 8px;
        }
      }
    }
  }

  @media screen and (max-width: $on-palm) {
    .team-member {
      width: 100%;
      padding-bottom: $spacing * 1.5;
    }
  }
</style>
