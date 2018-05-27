<template>
  <footer class="page-footer">
    <div class="columns columns-gutter">
      <address>
        Open Knowledge Foundation Deutschland e.V.<br />
        Singerstr. 109<br />
        10179 Berlin<br /><br />
      </address>
      <ul>
        <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
        <li><a href="&#0109;&#097;&#0105;&#0108;&#0116;&#0111;&#058;&#050;&#048;&#051;&#048;&#045;&#0119;&#097;&#0116;&#099;&#0104;&#064;&#0111;&#0107;&#0102;&#0110;&#046;&#0100;&#0101;">Feedback</a></li>
      </ul>
      <ul>
        <li><a href="http://okfn.us5.list-manage1.com/subscribe?u=929f1e07936386d34833e20d1&id=46ec58c60d">Newsletter abonnieren</a></li>
        <li><a href="https://okfn.de/spenden/">Mit einer Spende unterstützen</a></li>
        <li>
          <ul class="social-icons">
            <li><a href="mailto:2030-watch@okfn.de"><i class="icon-mail" /></a></li>
            <li><a href="https://twitter.com/2030watchde"><i class="icon-twitter" /></a></li>
            <li><a href="https://www.facebook.com/2030-Watch-108979439509739/"><i class="icon-facebook-squared" /></a></li>
            <li><a href="https://github.com/okfde/2030-watch.de"><i class="icon-github-circled" /></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="tracking-info">
      <p>2030Watch nutzt statt den üblichen externen Dienstleistern die datenschutzfreundlichere
      Technologie von <a target="_blank" href="https://matomo.org">Matomo</a>, um statistische
      Auswertungen der Seitennutzung zu erhalten. Wenn sie dies nicht wollen, klicken Sie bitte
      <a target="_blank" href="https://traffic.okfn.de/index.php?module=CoreAdminHome&action=optOut&language=de">hier</a>
      und entfernen Sie den Haken. Näheres in <a target="_blank" href="https://okfn.de/impressum/#datenschutzerklaerung">unserer Datenschutzerklärung</a>.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  .social-icons {
    margin-top: 1rem;

    li {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  .page-footer > * {
    margin-bottom: $spacing/4;
  }

  .tracking-info > p {
    font-size: 0.75rem;
  }
</style>
