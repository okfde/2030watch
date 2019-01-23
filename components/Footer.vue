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
        
        <li>
          <ul class="social-icons">
            <li><a href="mailto:2030-watch@okfn.de"><i class="icon-mail" /></a></li>
            <li><a href="https://twitter.com/2030watchde" target="_blank"><i class="icon-twitter" /></a></li>
            <li><a href="https://github.com/okfde/2030watch" target="_blank"><i class="icon-github-circled" /></a></li>
          </ul>
        </li>
      </ul>
      <ul>
        <li class="btn btn-default btn-newsletter">
          <a href="http://okfn.us5.list-manage1.com/subscribe?u=929f1e07936386d34833e20d1&id=46ec58c60d" target="_blank">
          Newsletter abonnieren</a>
        </li>
        <div class="tracking-info">
          <p>
            Wir nutzen für unseren Newsletterversand und &#8209;verwaltung Mailchimp.
            Lese <a class="footer-link" target="_blank" href="https://mailchimp.com/legal/privacy/">hier</a>
            die Datenschutzbestimmung von Mailchimp.
          </p>
        </div>
      </ul>
    </div>
    <div class="tracking-info">
      <p>2030Watch nutzt statt den üblichen externen Dienstleistern die datenschutzfreundlichere
      Technologie von <a target="_blank" href="https://matomo.org">Matomo</a>, um statistische
      Auswertungen der Seitennutzung zu erhalten. Wenn Sie dies nicht wollen, klicken Sie bitte
      <a target="_blank" href="https://traffic.okfn.de/index.php?module=CoreAdminHome&action=optOut&language=de">hier</a>
      und entfernen Sie den Haken. Näheres in <a target="_blank" href="https://okfn.de/impressum/#datenschutzerklaerung">unserer Datenschutzerklärung</a>.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '~@/assets/style/variables';

  ul {
    padding: 0;
  }

  ul li, ol li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .social-icons {
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    li {
      display: inline-block;
      margin-right: 2rem;
    }
  }

  .page-footer > * {
    margin-bottom: $spacing/4;
  }

  .tracking-info > p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    line-height: 1.2rem;
  }

  .btn-newsletter {
    margin-bottom: $spacing/4;
  }

  .footer-link {
    text-decoration: underline;
  }
</style>
