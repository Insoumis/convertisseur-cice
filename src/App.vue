<template>
  <div id="app">
    <c-header></c-header>
    <c-sub-header></c-sub-header>
  </div>
</template>

<script>
import CHeader from './Header.vue'
import CSubHeader from './SubHeader.vue'

export default {
  name: 'app',

  components: {
    CHeader,
    CSubHeader
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

*, *:after, *:before {
  box-sizing: border-box;
}
</style>
