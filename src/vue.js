// +-+-+-+-+-+-+
// |y|o|o|n|i|t|
// +-+-+-+-+-+-+
//
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
// | Yoonit Handhskae Plugin for NativeScript applications           |
// | Luigui Delyer, Gabriel Rizzo,                                   |
// | Haroldo Teruya & Victor Goulart @ Cyberlabs AI 2020-2021        |
// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

import { YoonitHandshake } from './Yoonit.Handshake'

export default {
  install (Vue) {
    Vue.registerElement(
        'YoonitHandshake',
        () => YoonitHandshake
    )

    Vue.prototype.$yoo = {
      ...Vue.prototype.$yoo,
      handshake: new YoonitHandshake()
    }

    return Vue.prototype.$yoo.handshake
  }
}
