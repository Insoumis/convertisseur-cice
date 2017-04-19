import Vue from 'vue'
import App from './App.vue'

import 'typeface-montserrat'
import 'typeface-roboto-slab'
import 'normalize.css'

Vue.filter('bigNumber', (jobs) => {
  return parseFloat(jobs.toFixed(2)).toLocaleString()
})

Vue.filter('billions', (number) => {
  const n = (number < 10e8) ? number / 10e5 : number / 10e8
  const w = (number < 10e8) ? 'millions' : 'milliards'

  return `${parseFloat(n.toFixed(2)).toLocaleString()} ${w}`
})

window.app = new Vue({
  el: '#app',
  render: h => h(App)
})
