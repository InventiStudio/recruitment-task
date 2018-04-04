<template lang="pug">
  main
    .container
      .row.justify-content-center
        .col-12.col-md-10
          img(src="~assets/logo.svg", alt="Wallet: InventiStudio recruitment task")
          form
            label.fs-11 E-mail address
            input(
              v-model.trim="email",
              type="email",
              placeholder="john.doe@mail.com",
            )
            label.fs-11 Password
            input(
              v-model.trim="password",
              type="password",
              placeholder="Your pass****",
            )
          button.bg-blue(
            @click="signIn()",
            :disabled="$v.$error",
            type="button",
          )
            span.fs-16.c-white Sign in
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'SignIn',
    data: () => ({
      email: '',
      password: '',
    }),
    methods: {
      async signIn() {
        try {
          if (this.$v.$touch() || this.$v.$error) return null
        } catch (err) {
          throw err
        }
      },
    },
    validations: {
      email: { required, email },
      password: { required },
    },
  }
</script>
