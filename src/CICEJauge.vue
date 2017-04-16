<template>
  <div class="c-cice-jauge">
    <div class="c-cice-jauge__layer">CICE restant: {{ cice | billions }}</div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-jauge {
  color: #fff;
  font-family: 'Montserrat', sans-serif;
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
      return {
        width: `${this.cice / totalCICE * 100}%`,
        left: `${100 - (this.cice / totalCICE * 100)}%`
      }
    }
  },

  methods: {
    update(joblist) {
      this.joblist = joblist
    }
  }
}
</script>
