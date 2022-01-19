<template>
  <div id="app" :class="allJobsClass">
    <c-header></c-header>
    <c-intro></c-intro>
    <c-jauges
      :opex_list="opex_list"
      :capex_list="capex_list"
      ref="jauges"
      @updateJobs_opex="triggerUpdate_opex"
      @updateJobs_capex="triggerUpdate_capex"
      @showAllJobs="showAllJobs"></c-jauges>
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
  color: $main;
  display: flex;
  font-family: Inter, sans-serif;
  min-height: 100%;
  margin: 0;
}

h1, h2, h3, h5 {
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0 15px;
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
import opex_list from './opex_list'
import capex_list from './capex_list'


import CHeader from './Header.vue'
import CIntro from './Intro.vue'
import CJauges from './Jauges.vue'
import CAEC from './AEC.vue'
import CSources from './Sources.vue'

export default {
  name: 'app',

  components: {
    CHeader,
    CIntro,
    CJauges,
    'c-aec': CAEC,
    CSources
  },

  data() {
    return {
      opex_list,
      capex_list,
      allJobs: false
    }
  },

  computed: {
    allJobsClass() {
      return { 'c--all-jobs': this.allJobs }
    }
  },

  mounted() {
    this.triggerUpdate_capex()
    this.triggerUpdate_opex()
  },

  methods: {
    showAllJobs() {
      this.allJobs = true

      this.opex_list.forEach((job) => {
        job.active = true
      })

      this.capex_list.forEach((job) => {
        job.active = true
      })

      this.triggerUpdate_opex()
      this.triggerUpdate_capex()
    },

    triggerUpdate_opex() {
      //this.$refs.jauges.$refs.result.update(this.opex_list,this.capex_list)
      //this.$refs.jauges.$refs.result.update(this.opex_list,this.capex_list)
      //this.$refs.jauges.update_opex(this.opex_list)
    },

    triggerUpdate_capex() {
      //this.$refs.jauges.$refs.result.update(this.opex_list,this.capex_list)
      //this.$refs.jauges.$refs.result.update(this.opex_list,this.capex_list)
      //this.$refs.jauges.update_capex(this.capex_list)
    }

  }
}
</script>
