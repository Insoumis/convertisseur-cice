<template>
  <div class="c-jauges">
    <h2 class="c-jauges__title" v-if="joblist.length > 0">Définis tes prioritées !</h2>
    <div class="c-jauges__jauge" v-for="(job, index) in joblist">
      <div v-if="job.active">
        <h3 class="c-jauges__jauge__title">{{ job.plural }} : {{ job.progress.value | billions }} milliards</h3>
        <input
          type="range"
          min="0"
          :max="job.progress.max"
          :value="job.progress.value"
          @input="updateValue($event, index)">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';
@import './range';

.c-jauges {
  margin-bottom: 30px;
}

.c-jauges__title {
  color: $grey;
  margin: 40px 0 0 0;
  text-align: center;
}

.c-jauges__jauge {
  margin: 40px auto 0 auto;
  width: 50%;

  &:first-of-type {
    margin-top: 20px;
  }
}

.c-jauges__jauge__title {
  color: $red;
  font-family: 'Montserrat', sans-serif;
}
</style>

<script>
import { totalCICE } from './joblist'

export default {
  props: ['joblist'],

  methods: {
    update(joblist) {
      this.joblist = joblist

      this.refreshProgressbars()
    },

    refreshProgressbars() {
      this.joblist.forEach((job, index) => {
        const jobMax = totalCICE - this.joblist
          .filter((_, j) => j !== index)
          .map(job => job.progress.value)
          .reduce((a, b) => a + b, 0)

        job.progress.max = jobMax

        return job
      })
    },

    updateValue($event, updatedIndex) {
      this.joblist[updatedIndex].progress.value = parseInt($event.target.value, 10)

      this.refreshProgressbars()

      this.$emit('updateJobs')
    }
  }
}
</script>
