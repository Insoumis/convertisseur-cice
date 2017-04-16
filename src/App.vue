<template>
  <div id="app" :class="allJobsClass">
    <c-header></c-header>
    <c-converter-header></c-converter-header>
    <div class="c--two-columns">
      <c-jauges
        :joblist="joblist"
        ref="jauges"
        @updateJobs="triggerUpdate"
        @showAllJobs="showAllJobs"></c-jauges>
      <c-job-result :joblist="joblist" ref="result"></c-job-result>
    </div>
    <c-sources></c-sources>
  </div>
</template>

<script>
import joblist from './joblist'

import CHeader from './Header.vue'
import CCICEJauge from './CICEJauge.vue'
import CConverterHeader from './ConverterHeader.vue'
import CJobChooser from './JobChooser.vue'
import CJobResult from './JobResult.vue'
import CJauges from './Jauges.vue'
import CSources from './Sources.vue'

export default {
  name: 'app',

  components: {
    CHeader,
    'c-cice-jauge': CCICEJauge,
    CConverterHeader,
    CJobChooser,
    CJobResult,
    CJauges,
    CSources
  },

  data() {
    return {
      joblist,
      allJobs: false
    }
  },

  computed: {
    allJobsClass() {
      return { 'c--all-jobs': this.allJobs }
    }
  },

  methods: {
    showAllJobs() {
      this.allJobs = true

      this.joblist.forEach((job) => {
        job.active = true
      })

      this.triggerUpdate()
    },

    triggerUpdate() {
      this.$refs.result.update(this.joblist)
      this.$refs.jauges.update(this.joblist)
    }
  }
}
</script>

<style lang="scss">
@import './theme';

*, *:after, *:before {
  box-sizing: border-box;
}

html {
  height: 100%;
  overflow-y:auto;
}

body {
  display: flex;
  min-height: 100%;
  margin: 0;
}

h1, h2, h5 {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.c--red {
  color: $red;
}

.c--two-columns {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media (max-width: 700px) {
  .c--two-columns {
    flex-direction: column;
  }
}
</style>
