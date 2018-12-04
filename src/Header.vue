<template>
  <header class="c-header">
    <a href="http://discord-insoumis.fr" class="c-header__logo" target="_blank">Discord Insoumis</a>
    <nav class="c-header__nav">
      <a target="_blank" href="https://lafranceinsoumise.fr/" title="Site de la France Insoumise">lafranceinsoumise.fr</a>
      <a target="_blank" href="https://laec.fr/" title="Programme de Mélenchon pour la France Insoumise">Consultez le programme</a>
      <a target="_blank" href="https://impots.jlm2017.fr/" title="Simulateur d'impôts de la campagne de la France Insoumise">Simulateur d'impôts</a>
    </nav>
  </header>
</template>

<style lang="scss">
@import './theme';

.c-header {
  background: $red;
  border-bottom: 1px solid darken($red, 3%);
  box-shadow: 0 2px 4px transparentize(#000, 0.8);
  height: 54px;
  padding: 8px 20px;

  .c-header__logo {
    background: url('assets/logo.png') center no-repeat;
    background-size: cover;
    display: inline-block;
    height: 36px;
    text-indent: -9999px;
    vertical-align: middle;
    width: 132px;
  }

  .c-header__nav {
    display: inline-block;
    margin-left: 20px;

    > a {
      color: #fff;
      font-family: Montserrat, serif;
      font-size: 14px;
      line-height: 36px;
      margin: 0 6px;
      text-decoration: none;
      text-shadow: 0 1px 2px transparentize(#000, 0.6);
    }
  }

  @media (max-width: 767px) {
    .c-header__nav {
      display: none;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCICEOpened: false
    }
  },

  methods: {
    toggleCICE() {
      this.isCICEOpened = !this.isCICEOpened
    }
  }
}
</script>
