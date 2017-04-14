<template>
  <div id="app">
    <c-header></c-header>
    <c-sub-header></c-sub-header>
    <c-converter-header></c-converter-header>
    <c-job-chooser @addJob="addJob" @removeJob="removeJob"></c-job-chooser>
    <c-job-result :joblist="joblist" ref="result"></c-job-result>
  </div>
</template>

<script>
import joblist from './joblist'

import CHeader from './Header.vue'
import CSubHeader from './SubHeader.vue'
import CConverterHeader from './ConverterHeader.vue'
import CJobChooser from './JobChooser.vue'
import CJobResult from './JobResult.vue'

export default {
  name: 'app',

  components: {
    CHeader,
    CSubHeader,
    CConverterHeader,
    CJobChooser,
    CJobResult
  },

  data() {
    return { joblist: joblist }
  },

  methods: {
    addJob(index) {
      this.joblist[index].active = true
      this.$refs.result.calcJobs()
    },

    removeJob(index) {
      this.joblist[index].active = false
      this.$refs.result.calcJobs()
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

h1, h2 {
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
</style>
