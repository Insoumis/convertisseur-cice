<template>
  <div class="c-cice-jauge">
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-jauge {
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

.c-cice-jauge__layer {
  background-color: $white;
  color: $blue;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<script>
import { totalISF } from './dataISF'

export default {
  props: ['opex_list'],

  data() {
    return {
      totalISF
    }
  },

  methods: {
    update(list) {
      this.list = list
    }
  }
}
</script>
