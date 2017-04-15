<template>
  <div class="c-header">
    <a href="http://discord.insoumis.online/" class="c-header__discord">Discord</a>
    <img src="./assets/logo.png" height="60">
  </div>
</template>

<style lang="scss">
@import './theme';

.c-header {
  align-items: center;
  background-color: $red;
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 40px;
}

.c-header__discord {
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: $white;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  left: 10px;
  padding: 5px 10px;
  position: absolute;
  text-decoration: none;
  text-transform: uppercase;
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
