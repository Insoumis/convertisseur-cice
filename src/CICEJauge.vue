<template>
  <div class="c-cice-jauge">
    <div
        class="c-cice-jauge__upper"
        :style="percent">CICE restant: {{ cice | billions }}</div>
    <div
      class="c-cice-jauge__layer">CICE restant: {{ cice | billions }}</div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-jauge {
  align-items: center;
  color: #fff;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  height: 30px;
  margin: 2px;
  position: relative;
}

.c-cice-jauge__layer, .c-cice-jauge__upper {
  display: flex;
  align-items: center;
  position: absolute;
  background-color: $white;
  color: $blue;
  height: 30px;
  text-indent: 10px;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
}

.c-cice-jauge__upper {
  background-color: $blue;
  color: $white;
  z-index: 1;
}
</style>

<script>
import { totalCICE } from './joblist'

export default {
  props: ['joblist'],

  data() {
    return {
      totalCICE
    }
  },

  computed: {
    cice() {
      return totalCICE - this.joblist
        .filter(job => job.active)
        .map(job => job.progress.value)
        .reduce((a, b) => a + b, 0)
    },

    percent() {
      return { width: `${this.cice / totalCICE * 100}%` }
    }
  },

  methods: {
    update(joblist) {
      this.joblist = joblist
    }
  }
}
</script>
