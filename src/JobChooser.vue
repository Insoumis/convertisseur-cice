<template>
  <div class="c-job-chooser">
    <h2 class="c-job-chooser__title">Choisis un ou des métier(s) !</h2>
    <div class="c-job-chooser__list">
      <div
        :class="itemClass(job)"
        @click="activeJob(index)"
        v-for="(job, index) in joblist">
          {{ job.name }} — {{ job.costPerMonth }}€&nbsp;
          <span class="c-job-chooser__list__item__month">mensuels</span>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-job-chooser {
  box-shadow: 0 2px 12px rgba(0, 0, 0, .12);
  border-radius: 4px;
  color: $grey;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin: 0 auto;
  width: 490px;
}

.c-job-chooser__title {
  margin: 15px 0;
  text-align: center;
}

.c-job-chooser__list {
  border: 1px solid lighten($grey, 40%);
  border-radius: 4px;
  flex: 1;
  margin: 0 20px 20px;
  overflow-y: auto;
}

.c-job-chooser__list__item {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: 'Roboto Slab', sans-serif;
  height: 40px;
  padding: 0 10px;

  &:not(:last-child) {
    border-bottom: 1px solid lighten($grey, 40%);
  }

  &:hover {
    text-decoration: underline;
  }

  &.c-job-chooser__list__item--activated {
    color: #fff;
    background-color: $flashyBlue;
  }
}
</style>

<script>
import joblist from './joblist.js'

export default {
  data() {
    return {
      joblist
    }
  },

  methods: {
    itemClass(job) {
      return {
        'c-job-chooser__list__item': true,
        'c-job-chooser__list__item--activated': job.active
      }
    },

    activeJob(index) {
      joblist[index].active = !joblist[index].active

      if (joblist[index].active) {
        this.$emit('addJob', index)
      } else {
        this.$emit('removeJob', index)
      }
    }
  }
}
</script>
