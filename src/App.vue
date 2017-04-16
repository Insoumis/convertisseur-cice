<template>
  <div id="app" :class="allJobsClass">
    <c-header></c-header>
    <c-intro></c-intro>
    <c-jauges
      :joblist="joblist"
      ref="jauges"
      @updateJobs="triggerUpdate"
      @showAllJobs="showAllJobs"></c-jauges>
    <c-cice-result></c-cice-result>
    <c-cice-cost></c-cice-cost>
    <c-aec></c-aec>
    <c-sources></c-sources>
  </div>
</template>

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
  justify-content: center;
}

.c--red {
  color: $red;
}

.c--space {
  flex: 1;
}

@media (max-width: 700px) {
  .c--two-columns {
    flex-direction: column;
  }
}
</style>

<script>
import joblist from './joblist'

import CHeader from './Header.vue'
import CCICEJauge from './CICEJauge.vue'
import CIntro from './Intro.vue'
import CJobChooser from './JobChooser.vue'
import CJauges from './Jauges.vue'
import CCICEResult from './CICEResult.vue'
import CCICECost from './CICECost.vue'
import CAEC from './AEC.vue'
import CSources from './Sources.vue'

export default {
  name: 'app',

  components: {
    CHeader,
    'c-cice-jauge': CCICEJauge,
    CIntro,
    CJobChooser,
    CJauges,
    'c-cice-result': CCICEResult,
    'c-cice-cost': CCICECost,
    'c-aec': CAEC,
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

  mounted() {
    this.triggerUpdate()
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
      this.$refs.jauges.$refs.result.update(this.joblist)
      this.$refs.jauges.update(this.joblist)
    }
  }
}
</script>
