import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import auth from './modules/auth'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing'
const modules = {
  auth,
}

export default new Vuex.Store({
  plugins: isDebug
    ? [createLogger()]
    : [],
  strict: isDebug,
  modules,
})
