<template>
  <header class="c-header">
    <a href="http://discord.insoumis.online/" class="logo" target="_blank">Discord Insoumis</a>
    <nav>
      <a target="_blank" href="https://jlm2017.fr/">jlm2017.fr</a>
      <a target="_blank" href="https://laec.fr/">Consultez le programme</a>
      <a target="_blank" href="https://impots.jlm2017.fr/">Simulateur d'impôts</a>
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

  .logo {
    background: url('assets/logo.png') center no-repeat;
    background-size: cover;
    display: inline-block;
    height: 36px;
    text-indent: -9999px;
    vertical-align: middle;
    width: 132px;
  }

  nav {
    display: inline-block;
    margin-left: 20px;

    a {
      color: #fff;
      font-family: Montserrat, serif;
      font-size: 14px;
      line-height: 36px;
      margin: 0 6px;
      text-decoration: none;
      text-shadow: 0 1px 2px transparentize(#000, 0.6);
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
