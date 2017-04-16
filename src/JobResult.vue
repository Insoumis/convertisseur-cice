<template>
  <div class="c-job-result">
    <div class="c-job-result__title-wrapper">
      <h2 class="c-job-result__title-wrapper__title">
        <span v-if="jobs !== 0">
          Avec vous, le remplacement du CICE créera
          <div class="c--red" v-html="jobsResult"></div>
        </span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-job-result {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;
}

.c-job-result__title-wrapper {
  display: flex;
  margin: 10px 0;
}

.c-job-result__title-wrapper__title {
  flex: 1;
  padding: 0 10px;
  text-align: center;

  .c--red {
    color: darken($red, 15%);
    font-size: 140%;
  }
}

.c-job-result__details {
  color: $darkGrey;
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

  .c-job-result__title-wrapper__title .c--red {
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

export default {
  props: ['joblist'],

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

  computed: {
    jobsResult() {
      return `${this.$options.filters.bigNumber(this.jobs)} emplois`;
    }
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
