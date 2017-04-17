<template>
  <div class="c-job-result">
    <div class="c-job-result__title-wrapper">
      <h2 class="c-job-result__title-wrapper__title">
        <span v-if="jobs !== 0">
          Avec vous, le remplacement du CICE créera<br />
          <span class="c-job-result__title-wrapper__title__result" v-html="jobsResult"></span>
        </span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-job-result {
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 30px 0 35px;
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

  .c-job-result__title-wrapper__title__result {
    background: #fff;
    border: 1px solid darken($flashyBlue, 2%);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0,0,0,.12);
    color: $red;
    display: inline-block;
    margin-top: 25px;
    min-width: 230px;
    padding: 18px;
  }
}

@media (max-width: 767px) {
  .c-job-result {
    margin: 20px 0 25px;
  }

  .c-job-result__title-wrapper__title {
    font-size: 20px;
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

      this.details = this.joblist.map(job => {
        return {
          jobs: Math.floor(job.progress.value / (job.costPerMonth * 1.3 * 12))
        }
      })

      this.jobs = this.details
        .map(job => job.jobs)
        .reduce((a, b) => a + b, 0)
    }
  }
}
</script>
