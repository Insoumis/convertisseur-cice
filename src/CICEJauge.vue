<template>
  <div class="c-cice-jauge">
    CICE restant:  {{ cice | billions }} milliards
  </div>
</template>

<style lang="scss">
@import './theme';

.c-cice-jauge {
  align-items: center;
  background-color: $blue;
  color: #fff;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  height: 30px;
  margin: 2px;
  padding: 0 10px;
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
        .reduce((a, b) => a + b, 0);
    }
  },

  methods: {
    update(joblist) {
      this.joblist = joblist
    }
  }
}
</script>
