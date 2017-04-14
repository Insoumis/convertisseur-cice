<template>
  <div class="c-job-result">
    <h2 class="c-job-result__title">
      <span v-if="jobs === 0">Le CICE n'a pas créé d'emplois</span>
      <span v-if="jobs !== 0">
        Le remplacement du CICE créera <span class="c--red">{{ jobs }}</span> emplois
      </span>
    </h2>
    <div class="c-job-result__details">
      <div class="c-job-result__details__names">
        <h3>Poste</h3>
        <div v-for="job in details">{{ job.name }}</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3>Nombre d'emplois créés</h3>
        <div v-for="job in details">{{ job.jobs }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-job-result {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.c-job-result__title {
  margin: 30px 0;
  text-align: center;
}

.c-job-result__details {
  background-color: $flashyBlue;
  color: $white;
  display: flex;
  flex: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  justify-content: center;
  padding: 30px;
}

.c-job-result__details__separator {
  background-color: $white;
  margin: 0 20px;
  width: 1px;
}
</style>

<script>
import { totalCICE } from './joblist'

export default {
  props: ['joblist'],

  data() {
    return {
      details: [],
      jobs: 0
    }
  },

  mounted() {
    this.calcJobs()
  },

  methods: {
    calcJobs() {
      const jobs = this.joblist.filter(job => job.active)

      const perJob = totalCICE / jobs.length

      this.details = jobs.map(job => {
        return {
          name        : job.name,
          costPerMonth: job.costPerMonth,
          jobs        : Math.floor(perJob / (job.costPerMonth * 1.3 * 12))
        }
      })

      this.jobs = this.details
        .map(job => job.jobs)
        .reduce((a, b) => a + b, 0)
    }
  }
}
</script>
