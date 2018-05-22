<template>
  <footer class="page-footer columns columns-gutter">
    <address>
      Open Knowledge Foundation Deutschland e.V.<br />
      Singerstr. 109<br />
      10179 Berlin<br /><br />

      Vereinsregister Nr: VR 30468 B<br />
      Steuernummer: 27/674/52428<br />
      VAT: DE278022128
    </address>
    <ul>
      <li><nuxt-link to="/impressum">Impressum</nuxt-link></li>
      <li><nuxt-link to="/kontakt">Kontakt</nuxt-link></li>
      <li><a href="&#0109;&#097;&#0105;&#0108;&#0116;&#0111;&#058;&#050;&#048;&#051;&#048;&#045;&#0119;&#097;&#0116;&#099;&#0104;&#064;&#0111;&#0107;&#0102;&#0110;&#046;&#0100;&#0101;">Feedback</a></li>
    </ul>
    <ul>
      <li><a href="http://okfn.us5.list-manage1.com/subscribe?u=929f1e07936386d34833e20d1&id=46ec58c60d">Newsletter abbonieren</a></li>
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
    <div class="tracking-info">
      2030Watch nutzt statt den üblichen externen Dienstleistern die datenschutzfreundlichere
      Technologie von <a target="_blank" href="https://matomo.org">Matomo</a>, um statistische
      Auswertungen der Seitennutzung zu erhalten. Wenn sie dies nicht wollen, klicken Sie bitte
      <a target="_blank" href="https://traffic.okfn.de/index.php?module=CoreAdminHome&action=optOut&language=de">hier</a>
      und entfernen Sie den Haken. Näheres in <a target="_blank" href="https://okfn.de/impressum/#datenschutzerklaerung">unserer Datenschutzerklärung</a>.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .social-icons {
    margin-top: 1rem;

    li {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  footer > .tracking-info {
    flex-basis: 100%;
    margin-left: 0;
    margin-top: 1.5rem;
    font-size: 0.8rem;

    > a {
      text-decoration: underline;
    }
  }

</style>
