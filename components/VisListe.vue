<template>
  <ul class="vis-liste">
    <li class="sdg-item" style="margin:0;">
      <div class="sdg-header sdg-header-label">
        <span class="sdg-header-sdgs sdg-header-sdgs-desktop">Sustainable Development Goals</span>
        <span class="sdg-header-sdgs sdg-header-sdgs-mobile">SDGs</span>
      </div>
      <div class="sdg-header sdg-header-vis sdg-header-vis-mobile columns">
        <section class="sdg-header-sdgs">
          SDG-Ziel für 2030 erreicht zu:
        </section>
      </div>
    </li>
    <li class="sdg-item" style="margin:0;">
      <div class="sdg-header sdg-header-label"></div>
      <div class="sdg-header sdg-header-vis columns" style="font-size:1rem;">
        <section class="sdg-legend">
          <span class="okf">2030Watch</span>
          <span class="dns-lang">Offizielle Nachhaltigkeitsstrategie</span>
          <span class="dns-kurz">Offiziell</span>
        </section>
      </div>
    </li>
    <ToggleElements :sdgs="sdgListe" />
  </ul>
</template>

<script>
  import { mapState } from 'vuex'
  import ToggleElements from '~/components/ToggleElements.vue'
  import _ from 'lodash'

  export default {
    data: function () {
      return {
        'sorting': 'number'
      }
    },
    computed: {
      ...mapState([
        'sdgs'
      ]),
      sdgListe: function () {
        return _.sortBy(this.sdgs, this.sorting)
      }
    },
    components: {
      ToggleElements
    },
    methods: {}
  }
</script>

<style lang="scss">
  // TODO not yet scoped: ToggleElements component references this classes
  @import '~@/assets/style/variables';

  .vis-liste {
    margin: $spacing * 1.5 0;

    &:hover {
      .sdg-item:not(:hover) {
        .sdg-marker {
          fill: $color-mute;
        }
      }
    }
  }

  .sdg-item {
    display: flex;
    margin-bottom: 1.3rem;

    .sdg-header {
      margin-bottom: $spacing / 2;
      font-size: 1.2rem;
    }

    .sdg-header-label, .sdg-header-vis {
      flex: 1;

      .active {
        font-weight: bold;
        color: $color-default;
      }
    }

    .sdg-link {
      color: var(--color);
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;

      .sdg-vis {
        margin: $spacing / 6 0 $spacing;
        height: 50px;
      }

      &.disabled {
        cursor: default;
        color: $color-mute;
      }

      @include media-query($on-desktop) {
        & {
          flex-direction: row;
          height: calc((100vh - 40vh) / 17);
          max-height: 2.5rem;
          min-height: 2.4rem;

          .sdg-vis {
            margin: 0;
          }
        }
      }

      .sdg-label {
        flex: 1;
        display: flex;
        align-items: center;
        transition-duration: 0.1s;

        .sdg-number {
          width: 1rem;
          margin-right: 0.9rem;
          line-height: 1.35rem;
          display: inline-block;
          color: var(--color);
          font-size: 1.2rem;
        }

        .sdg-text {
          line-height: 1.35rem;
          display: inline-block;
          font-weight: bold;
          font-size: 1.2rem;
        }
      }

      .sdg-direction {
        margin-right: 16px;
      }

      .sdg-vis {
        flex: 1;
      }

      &:hover:not(.disabled) {
        .sdg-label {
          opacity: 1 !important;
          color: var(--color);
        }

        .sdg-label-tick {
          opacity: 0 !important;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .dns-lang {
      display:none;
    }
    .dns-kurz {
      color: $color-dns;
    }
  }
  @media (min-width: 961px) {
    .dns-lang {
      color: $color-dns;
    }
    .dns-kurz {
      display: none;
    }
  }

  .sdg-legend {
    text-align: right;
    span {
      margin-left: 10px;
    }
  }

  .sdg-header-sdgs {
    font-weight: bold;
    color: $color-2030;
  }

  .sdg-header-sdgs-mobile {
    display: none;
  }

  @media screen and (max-width: $on-palm) {
    .sdg-header-sdgs-desktop {
      display: none;
    }

    .sdg-header-vis-mobile {
      flex: 3 !important;
      text-align: right;
    }

    .sdg-header-sdgs-mobile {
      display: inline;
    }
  }

</style>
