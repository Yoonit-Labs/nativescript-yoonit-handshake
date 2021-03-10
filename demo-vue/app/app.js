import Vue from 'nativescript-vue'
import App from './components/App'

Vue.config.silent = (TNS_ENV === 'production')

new Vue({
  render: h =>
    h(
      'frame',
      [
        h(App)
      ]
    )
})
  .$start()
