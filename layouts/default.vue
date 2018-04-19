<template>
  <div class="page">
    <header class="page-header columns">
      <hgroup class="logo">
        <nuxt-link to="/"><h1>2030 Watch</h1></nuxt-link>
      </hgroup>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="projekt">Das Projekt</nuxt-link></li>
          <li><nuxt-link to="blog">Blog</nuxt-link></li>
          <li><nuxt-link to="about">Über uns</nuxt-link></li>
          <li><nuxt-link to="aktiv">Werde aktiv</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <nuxt/>
    </div>
    <footer class="columns">
      <address>
        Open Knowledge Foundation Deutschland e.V.<br /><br />
        Singerstr. 109, 10179 Berlin, Deutschland<br /><br />

        Vereinsregister Nr: VR 30468 B<br />
        Steuernummer: 27/674/52428<br />
        VAT: DE278022128
      </address>
      <ul>
        <li><nuxt-link to="/">Impressum</nuxt-link></li>
        <li><nuxt-link to="/">Kram</nuxt-link></li>
      </ul>
      <ul>
        <li>Social Media</li>
        <li>Social Media</li>
      </ul>
    </footer>
  </div>
</template>

<style lang="scss">

</style>
