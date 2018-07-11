import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'


Vue.use(Router)

const routes = [
  {
    path: '/wallet',
    name: 'Wallet',
    component(resolve) {
      require(['src/views/Wallet'], resolve)
    },
  },
  {
    path: '/',
    name: 'SignIn',
    component(resolve) {
      require(['src/views/SignIn'], resolve)
    },
  },
  
]

const router = new Router({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = store.state.auth
  if (isLoggedIn && to.name === 'SignIn') return next({ name: 'Wallet' })
  return next()
})

export default router
