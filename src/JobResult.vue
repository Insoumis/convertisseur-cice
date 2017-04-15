<template>
  <div class="c-job-result">
    <div class="c-job-result__title-wrapper">
      <h2 class="c-job-result__title-wrapper__title">
        <span v-if="jobs === 0">Le CICE a créé <span class="c--red">0</span> emplois</span>
        <span v-if="jobs !== 0">
          Le remplacement du CICE créera
          <span class="c--red" v-html="$options.filters.bigNumber(jobs)"></span>
          emplois
        </span>
      </h2>
      <c-sources></c-sources>
    </div>
    <div class="c-job-result__details" v-if="jobs !== 0">
      <div class="c-job-result__details__names">
        <h3 class="c-job-result__details__names__title">Poste</h3>
        <div v-for="job in details">{{ job.name }}</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3 class="c-job-result__details__jobs__title">Emplois</h3>
        <div v-for="job in details">{{ job.jobs }}</div>
      </div>
    </div>
    <div class="c-job-result__details" v-if="jobs === 0">
      <div class="c-job-result__details__names">
        <h3 class="c-job-result__details__names__title">Entreprise</h3>
        <div v-for="company in cice">{{ company.name }}</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3 class="c-job-result__details__jobs__title">Emplois</h3>
        <div v-for="company in cice">{{ company.jobs }}</div>
      </div>
      <div class="c-job-result__details__separator"></div>
      <div class="c-job-result__details__jobs">
        <h3 class="c-job-result__details__jobs__title">CICE touché</h3>
        <div v-for="company in cice">{{ company.cice / 10e6 }} millions</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-job-result {
  display: flex;
  flex-direction: column;
  min-height: 320px;
  position: relative;
}

.c-job-result__title-wrapper {
  display: flex;
}

.c-job-result__title-wrapper__title {
  flex: 1;
  margin: 10px 0 30px 0;
  padding: 0 10px;
  text-align: center;

  .c--red {
    font-size: 140%;
  }
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

.c-job-result__details__names__title, .c-job-result__details__jobs__title {
  margin-top: 0;
}

@media (max-width: 500px) {
  .c-job-result {
    min-height: 240px;
  }

  .c-job-result__title {
    font-size: 16px;
    margin: 40px 0
  }

  .c-job-result__title .c--red {
    display: block;
  }

  .c-job-result__details {
    font-size: 14px;
  }

  .c-job-result__details__separator {
    margin: 0 14px;
  }

  .c-job-result__details__names__title, .c-job-result__details__jobs__title {
    font-size: 10px;
  }
}
</style>

<script>
import cice from './cice'

import CSources from './Sources.vue'

export default {
  props: ['joblist'],

  components: {
    CSources
  },

  data() {
    return {
      cice,
      details: [],
      jobs: 0
    }
  },

  mounted() {
    this.update()
  },

  methods: {
    update(joblist) {
      this.joblist = this.joblist

      const jobs = this.joblist.filter(job => job.active)

      this.details = jobs.map(job => {
        return {
          name        : job.name,
          costPerMonth: job.costPerMonth,
          jobs        : Math.floor(job.progress.value / (job.costPerMonth * 1.3 * 12))
        }
      })

      this.jobs = this.details
        .map(job => job.jobs)
        .reduce((a, b) => a + b, 0)
    }
  }
}
</script>
