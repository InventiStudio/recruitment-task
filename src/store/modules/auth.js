import ls from 'local-storage'
import store from 'src/store'
import router from 'src/router'
import { STORAGE_AUTH_TOKEN } from 'src/constants'
import api from 'src/services/api'

const state = {
  isLoggedIn: !!ls.get(STORAGE_AUTH_TOKEN),
  authToken:ls.get(STORAGE_AUTH_TOKEN),
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  authToken: state => state.authToken,
}

const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true
  },
  LOGOUT(state) {
    state.isLoggedIn = false
  },
}

const actions = {
  async login({ commit }, { email, password, lsToken }) {
    try {
      const { headers: { 'x-auth-token': apiToken } } = lsToken
        ? await api.get(`/sessions/${lsToken}`)
        : await api.post('/sessions', { email, password })
      api.setHeader('x-auth-token', apiToken)
      if (!lsToken) {
        commit('LOGIN')
        router.push({ name: 'Wallet' })
      }
    } catch (err) {
      if (lsToken) ls.remove(STORAGE_AUTH_TOKEN)
      throw err
    }
  },
  async logout({ commit }) {
    try {
      ls.set(STORAGE_AUTH_TOKEN, null)
      ls.remove(STORAGE_AUTH_TOKEN)
      commit('LOGOUT')
      router.push({ name: 'SignIn' })
    } catch (err) {
      throw err
    }
  },
}

export default {
    namespaced: 'auth',
    state,
    getters,
    mutations,
    actions,
}
