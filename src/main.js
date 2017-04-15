import Vue from 'vue'
import App from './App.vue'

import 'typeface-montserrat'
import 'typeface-roboto-slab'
import 'normalize.css'

Vue.filter('bigNumber', (jobs) => {
  jobs = jobs.toString()

  const chunks = []
  let i = jobs.length - 1
  while (chunks.length * 3 < jobs.length) {
    chunks.push((jobs[i - 2] || '') + (jobs[i - 1] || '') + jobs[i])
    i = i - 3
  }

  return chunks.reverse().join('&nbsp;')
})

Vue.filter('billions', (number) => {
  return (number / 10e8).toFixed(2)
});

new Vue({
  el: '#app',
  render: h => h(App)
})
