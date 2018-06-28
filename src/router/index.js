import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    // path: '/sign-in',
    path: '/',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "sign-in" */ 'src/views/SignIn'),
  },
  {
    // path: '/wallet',
    path: '/wallet',
    name: 'Wallet',
    component: () => import(/* webpackChunkName: "logged" */ 'src/views/Wallet'),
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
