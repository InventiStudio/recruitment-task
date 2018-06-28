<template lang="pug">
  main.sign-in
    .container
      .row.justify-content-center
        .col-12.text-center
          img.sign-in__logo.d-inline-block(src="~assets/logo.svg", alt="Wallet: InventiStudio recruitment task")
        .col-12.col-md-7.col-lg-5.col-xl-4
          button.o-btn.bg-blue.mt-40.w-100(
            @click="signOut()",
            type="button",
          )
            span.fs-16.c-white Logout
</template>

<script>
  import { mapActions } from 'vuex'
  import store from 'src/store'

  export default {
    name: 'Logout',
    data: () => ({
    }),
    created() {
      this.isLogged = store.getters["auth/isLoggedIn"];
    },
    methods: {
      ...mapActions({
        logout: 'auth/logout',
      }),
      async signOut() {
        try {
          await this.logout()
        } catch (err) {
          throw err
        }
      },
    },
  }
</script>

<style lang="sass" scoped>
  .sign-in
    padding-top: 100px

</style>
