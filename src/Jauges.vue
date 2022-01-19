<template>
  <div class="c-jauges">
    <h2 class="c-jauges__title">Si l'ISF n'avait pas été supprimé, vous auriez pu</h2>

    <div class="c-jauges__row">

      <div class="c-jauges__table__opex">
        <div class="c-jauges__table__header">
          <h3 class="c-jauges__table__header__title">Financer pendant 5 ans</h3>
          <div class="c--space"></div>
          <c-cice-jauge-opex :opex_list=opex_list></c-cice-jauge-opex>
        </div>
        <div class="c-jauges__jauge" v-for="(job, index) in opex_list">
            <span class="c-jauges__jauge__title" :title="jobCost(job)">{{ job.plural }}</span>
            <div class="c--space"></div>
            <span class="c-jauges__jauge__jobs">{{ details_opex[index] | bigNumber }} emplois</span>
            <input
              class="c-jauges__jauge__input"
              type="range"
              min="0"
              :max="totalISF"
              :data-max="job.progress.max"
              :value="job.progress.value"
              @input="updateValue_opex($event, index)"
              @change="updateValue_opex($event, index)">
        </div>
        <div> Test : {{ details_opex }}</div>
      </div>

      <div class="c-jauges__table__capex">
        <div class="c-jauges__table__header">
          <h3 class="c-jauges__table__header__title">Construire</h3>
          <div class="c--space"></div>
          <c-cice-jauge-capex :capex_list=capex_list></c-cice-jauge-capex>
        </div>
        <div class="c-jauges__jauge" v-for="(job, index) in capex_list">
            <span class="c-jauges__jauge__title" :title="jobCost(job)">{{ job.plural }}</span>
            <div class="c--space"></div>
            <span class="c-jauges__jauge__jobs">{{ details_capex[index] | bigNumber }} emplois</span>
            <input
              class="c-jauges__jauge__input"
              type="range"
              min="0"
              :max="totalISF"
              :data-max="job.progress.max"
              :value="job.progress.value"
              @input="updateValue_capex($event, index)"
              @change="updateValue_capex($event, index)">
        </div>
      </div>

    </div>

    <h2 class="c-jauges__title">Montant à attribuer : {{ remainingISF | billions }} / {{remainingISF|bigNumber}}</h2>

    <c-job-result :opex_list="opex_list" ref="result"></c-job-result>
  </div>
</template>

<style lang="scss">
@import './theme';
@import './range';

.c-jauges{
  background: $blue;
  box-shadow: 0 5px 10px transparentize(#000, 0.8);
  height: auto;
}

.c-jauges__title {
  color: $white;
  font-size: 26px;
  font-weight: 500;
  margin: 50px 0 50px;
  text-align: center;
}

.c-jauges__table__opex {
  background: $white;
  border: 1px solid darken($blue, 2%);
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
  border-radius: 8px;
  margin: auto auto auto 0;
  max-width: 720px;
  float:left;
  width: 50%;
}

.c-jauges__table__capex {
  background: $white;
  border: 1px solid darken($blue, 2%);
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
  border-radius: 8px;
  margin: auto 1.5% auto auto;
  max-width: 720px;
  float:right;
  width: 50%;
  align-self: stretch;
}

.c-jauges__row:after {
  content: "";
  display:table;
  clear: both;
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

@media (max-width: 500px) {
  .c-jauges__table__header__title {
    padding: 0;
  }

  .c-cice-jauge__layer {
    font-size: 13px;
  }
}
</style>

<script>
import { totalISF, dureeMandat } from './dataISF'

import CICEJauge1 from './CICEJauge-opex.vue'
import CICEJauge2 from './CICEJauge-capex.vue'
import CJobResult from './JobResult.vue'


export default {
  props: ['opex_list','capex_list','remainingISF'],

  components: {
    'c-cice-jauge-opex': CICEJauge1,
    'c-cice-jauge-capex': CICEJauge2,
    CJobResult
  },

  data() {
    return {
      totalISF,
      details_opex: [0, 0, 0, 0, 0],
      details_capex: [0, 0, 0, 0, 0],
    }
  },

  computed: {
    remainingISF() {
      return totalISF - this.opex_list.filter(job => job.active).map(job => job.progress.value).reduce((a, b) => a + b, 0)- this.capex_list.filter(job => job.active).map(job => job.progress.value).reduce((a, b) => a + b, 0)
    },
  },
  methods: {
    update_opex(opex_list) {
      this.opex_list = opex_list

      this.details_opex = this.opex_list.map(job => {
        return Math.floor(job.progress.value / (job.costPerYear*dureeMandat))
      })

      this.refreshProgressbars_opex()
    },

    update_capex(capex_list) {
      this.capex_list = capex_list

      this.details_capex = this.capex_list.map(job => {
        return Math.floor(job.progress.value / (job.costPerMonth * 1.3 * 12))
      })
      
      this.refreshProgressbars_capex()
    },

    refreshProgressbars_opex() {
      this.opex_list.forEach((job, index) => {
        const jobMax = totalISF - this.opex_list.filter((_, j) => j !== index).map(job => job.progress.value).reduce((a, b) => a + b, 0) - this.capex_list.map(job => job.progress.value).reduce((a, b) => a + b, 0)

        job.progress.max = jobMax

        return job
      })
    },

    refreshProgressbars_capex() {
      this.capex_list.forEach((job, index) => {
        const jobMax = totalISF - this.capex_list.filter((_, j) => j !== index).map(job => job.progress.value).reduce((a, b) => a + b, 0) - this.opex_list.map(job => job.progress.value).reduce((a, b) => a + b, 0)

        job.progress.max = jobMax

        return job
      })
    },

    updateValue_opex($event, updatedIndex) {
      let value = parseInt($event.target.value, 10)
      value = Math.min(value, this.opex_list[updatedIndex].progress.max)

      $event.target.value = value

      this.opex_list[updatedIndex].progress.value = value
      this.details_opex[updatedIndex] = Math.floor(value/(this.opex_list[updatedIndex].costPerYear*dureeMandat))

      this.refreshProgressbars_opex()

      this.$emit('updateJobs_opex')
    },

    updateValue_capex($event, updatedIndex) {
      let value = parseInt($event.target.value, 10)
      value = Math.min(value, this.capex_list[updatedIndex].progress.max)

      $event.target.value = value

      this.capex_list[updatedIndex].progress.value = value
      this.details_capex[updatedIndex] = Math.floor(value/(this.capex_list[updatedIndex].cost))

      this.refreshProgressbars_capex()

      this.$emit('updateJobs_capex')
    },

    updateTotalISF() {
      this.remainingISF = totalISF - this.opex_list.filter(job => job.active).map(job => job.progress.value).reduce((a, b) => a + b, 0)- this.capex_list.filter(job => job.active).map(job => job.progress.value).reduce((a, b) => a + b, 0)
    },

    showAllJobs() {
      this.$emit('showAllJobs')
    },

    jobCost(job) {
      const annual = job.costPerMonth * 1.3 * 12;

      return `Coût par mois : ${job.costPerMonth}. Coût annuel (avec charges patronales) : ${annual}`
    }
  }
}
</script>
