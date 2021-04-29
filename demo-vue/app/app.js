import Vue from 'nativescript-vue'
import App from './components/App'
import YoonitHandshake from '@yoonit/nativescript-handshake/vue'

Vue.config.silent = (TNS_ENV === 'production')

Vue.use(YoonitHandshake)

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
