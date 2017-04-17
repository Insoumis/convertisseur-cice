<template>
  <div class="c-jauges">
    <h2 class="c-jauges__title">Réinvestissez les fonds du CICE dans les secteurs publics.</h2>
    <div class="c-jauges__table">
      <div class="c-jauges__table__header">
        <h3 class="c-jauges__table__header__title">Métiers</h3>
        <div class="c--space"></div>
        <c-cice-jauge :joblist=joblist></c-cice-jauge>
      </div>
      <div class="c-jauges__jauge" v-for="(job, index) in joblist">
          <span class="c-jauges__jauge__title" :title="null">{{ job.plural }}</span>
          <div class="c--space"></div>
          <span class="c-jauges__jauge__jobs">{{ details[index] | bigNumber }} emplois</span>
          <input
            class="c-jauges__jauge__input"
            type="range"
            min="0"
            :max="totalCICE"
            :data-max="job.progress.max"
            :value="job.progress.value"
            @input="updateValue($event, index)">
      </div>
    </div>

    <c-job-result :joblist="joblist" ref="result"></c-job-result>
  </div>
</template>

<style lang="scss">
@import './theme';
@import './range';

.c-jauges {
  background: $flashyBlue;
  box-shadow: 0 5px 10px transparentize(#000, 0.8);
}

.c-jauges__title {
  color: $white;
  font-size: 26px;
  font-weight: 500;
  margin: 70px 0 50px;
  text-align: center;
}

.c-jauges__table {
  background: $white;
  border: 1px solid darken($flashyBlue, 2%);
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
  border-radius: 8px;
  margin: 0 auto;
  max-width: 720px;
}

.c-jauges__table__header {
  align-items: center;
  border-bottom: 1px solid transparentize(#000, 0.8);
  display: flex;
  padding: 20px 15px;
}

.c-jauges__table__header__title {
  font-size: 14px;
  margin: 0;
}

.c-jauges__jauge:not(:last-child) {
  border-bottom: 1px solid transparentize(#000, 0.8);
}

.c-jauges__jauge {
  display: flex;
  margin-top: -1px;
  padding: 12px 25px;
}

.c-jauges__jauge__title {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

.c-jauges__jauge__jobs {
  align-items: center;
  display: flex;
  font-size: 13px;
  margin: 0 5px;
  text-align: right;
}

.c-jauges__jauge__input {
  max-width: 300px;
}

@media (max-width: 767px) {
  .c-jauges__title {
    font-size: 20px;
    margin: 40px 0 30px;
  }

  .c-jauges__table {
    margin: 0 15px;
  }

  .c-jauges__jauge {
    display: block;
  }

  .c-jauges__jauge__title {
    float: left;
    line-height: 1.8em;
  }

  .c-jauges__jauge__jobs {
    display: inline;
    float: right;
    font-size: 14px;
    line-height: 1.8em;
  }

  .c-jauges__jauge__input {
    max-width: 100%;
  }
}

@media(max-width: 500px) {
  .c-jauges__table {
    border-radius: 0;
    margin: 0;
  }

  .c-jauges__table__header {
    padding: 20px 5px;
  }
}
</style>

<script>
import { totalCICE } from './joblist'

import CICEJauge from './CICEJauge.vue'
import CJobResult from './JobResult.vue'

export default {
  props: ['joblist'],

  components: {
    'c-cice-jauge': CICEJauge,
    CJobResult
  },

  data() {
    return {
      totalCICE,
      details: [0, 0, 0, 0, 0]
    }
  },

  methods: {
    update(joblist) {
      this.joblist = joblist

      this.details = this.joblist.map(job => {
        return Math.floor(job.progress.value / (job.costPerMonth * 1.3 * 12))
      })

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
    },

    showAllJobs() {
      this.$emit('showAllJobs')
    }
  }
}
</script>
