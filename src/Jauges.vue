<template>
  <div class="c-jauges" v-if="isShown">
    <h2 class="c-jauges__title">Définis tes prioritées !</h2>
    <div class="c-jauges__jauge" v-for="(job, index) in joblist">
      <div v-if="job.active">
        <h3 class="c-jauges__jauge__title">{{ job.plural }} : {{ job.progress.value | billions }} milliards</h3>
        <input
          type="range"
          min="0"
          :max="totalCICE"
          :data-max="job.progress.max"
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
  margin-bottom: 0;
}

.c-jauges__title {
  color: $grey;
  margin: 40px 0 0 0;
  text-align: center;
}

.c-jauges__jauge {
  margin: 40px auto 0 auto;
  min-width: 450px;
  width: 50%;

  &:first-of-type {
    margin-top: 20px;
  }
}

.c-jauges__jauge__title {
  color: $red;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 500px) {
  .c-jauges__title {
    font-size: 15px;
  }

  .c-jauges__jauge {
    min-width: 0;
    text-align: center;
    width: 100%;
  }

  .c-jauges__jauge__title {
    font-size: 14px;
  }

  input[type=range] {
    margin: 0 auto;
    width: 80%;
  }
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
    isShown() {
      return this.joblist.filter(job => job.active).length > 0
    }
  },

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
      let value = parseInt($event.target.value, 10)
      value = Math.min(value, this.joblist[updatedIndex].progress.max)

      $event.target.value = value

      this.joblist[updatedIndex].progress.value = value

      this.refreshProgressbars()

      this.$emit('updateJobs')
    }
  }
}
</script>
