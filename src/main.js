import Vue from 'vue'
import App from './App.vue'

// having eslint disable is super important otherwise the app is a bust
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
