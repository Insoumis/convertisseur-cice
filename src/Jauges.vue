<template>
  <div class="c-jauges">
    <h2 class="c-jauges__title" v-if="joblist.length > 0">Définis tes prioritées !</h2>
    <div class="c-jauges__jauge" v-for="(job, index) in joblist">
      <div v-if="job.active">
        <h3 class="c-jauges__jauge__title">{{ job.plural }}</h3>
        <div class="c-jauges__jauge__slide">
          <div class="c-jauges__jauge__slide__progress">
            <div class="c-jauges__jauge__slide__progress__step"></div>
            <div class="c-jauges__jauge__slide__progress__step"></div>
            <div class="c-jauges__jauge__slide__progress__step"></div>
            <div class="c-jauges__jauge__slide__progress__step"></div>
            <div class="c-jauges__jauge__slide__progress__step"></div>
           </div>
          <div
            class="c-jauges__jauge__slide__thumb"
            @mousedown="mousedown($event, job, index)"
            ref="thumb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './theme';

.c-jauges {
  margin-bottom: 30px;
}

.c-jauges__title {
  color: $grey;
  margin: 40px 0 0 0;
  text-align: center;
}

.c-jauges__jauge {
  margin: 50px auto 0 auto;
  width: 50%;

  &:first-of-type {
    margin-top: 20px;
  }
}

.c-jauges__jauge__title {
  color: $red;
  font-family: 'Montserrat', sans-serif;
}

.c-jauges__jauge__slide {
  border-radius: 7px;
  border: 1px solid lighten($grey, 45%);
  height: 8px;
  position: relative;
  width: 100%;
}

.c-jauges__jauge__slide__thumb {
  height: 16px;
  top: -5px;
  transform: translateX(-8px);
  transition-duration: 0s;
  width: 16px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
  transition: all 0s;
  will-change: transform;
  cursor: pointer;
  z-index: 3;
}

.c-jauges__jauge__slide__progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.c-jauges__jauge__slide__progress__step {
  background-color: lighten($darkGrey, 20%);
  border-radius: 50%;
  height: 6px;
  width: 6px;

  &:first-child, &:last-child {
    visibility: hidden;
  }
}
</style>

<script>
import throttle from 'lodash.throttle'

const moveThrottled = throttle((self, event) => {
  if (!self.dragging) {
    return
  }

  const stepPx = self.dragging.parentNode.offsetWidth / 4

  let left = event.pageX - self.dragging.parentNode.offsetLeft

  left = Math.max(0, left)
  left = Math.min(self.dragging.parentNode.offsetWidth, left)

  const coef = Math.round(left / stepPx)

  self.draggingJob.coef = coef

  self.$emit('setJobCoef', self.draggingIndex, coef + 1)

  self.dragging.style.left = `${coef * stepPx}px`
}, 100)

export default {
  props: ['joblist'],

  data() {
    return {
      dragging: null,
      draggingJob: null,
      draggingIndex: 0
    }
  },

  methods: {
    mousedown(ev, job, index) {
      ev.preventDefault()
      this.dragging      = ev.target
      this.draggingJob   = job
      this.draggingIndex = index
    },

    mouseup() {
      this.dragging      = null
      this.draggingJob   = null
      this.draggingIndex = null
    },

    mousemove(event) {
      return moveThrottled(this, event)
    }
  }
}
</script>
