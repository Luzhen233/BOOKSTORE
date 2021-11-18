import { createStore } from 'vuex'

import cart from './modules/cart'
import user from './modules/user'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: {
    cart,
    user
  },
  plugins: [createPersistedState()]
})
