<template lang="pug">
  main.sign-in
    .container
      .row.justify-content-center
        .col-12.text-center
          img.sign-in__logo.d-inline-block(src="~assets/logo.svg", alt="Wallet: InventiStudio recruitment task")
        .col-12.col-md-7.col-lg-5.col-xl-4
          form
            label.fs-11.mb-8 E-mail address
            input.o-input.mb-16(
              v-model.trim="email",
              type="email",
              placeholder="john.doe@mail.com",
            )
            label.fs-11.mb-8 Password
            input.o-input.mb-16(
              v-model.trim="password",
              type="password",
              placeholder="Your pass****",
            )
          button.o-btn.bg-blue.mt-40.w-100(
            @click="signIn()",
            :disabled="$v.$error",
            type="button",
          )
            span.fs-16.c-white Sign in
</template>

<script>
  import { mapActions } from 'vuex'
  import { required, email } from 'vuelidate/lib/validators'
  import store from 'src/store'

  export default {
    name: 'SignIn',
    data: () => ({
      email: '',
      password: '',
    }),
    methods: {
      ...mapActions({
        login: 'auth/login',
      }),
      async signIn() {
        try {
          if (this.$v.$touch() || this.$v.$error) return null
          await this.login({ email: this.email, password: this.password })
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      email: { required, email },
      password: { required },
    },
    created() {
      console.log('store logged',store.getters["auth/isLoggedIn"]);
    },
  }
</script>

<style lang="sass" scoped>
  .sign-in
    padding-top: 100px

  .sign-in__logo
    margin-bottom: 110px
</style>
