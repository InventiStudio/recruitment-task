<template lang="pug">
  button(@click="signOut()")
    span.fs-15.sign-out Sign out
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'SignOut',
    data: () => ({
    }),
    methods: {
      ...mapActions({
        logout: 'auth/logout',
      }),
      async signOut() {
        // need to add correct req
        this.logout()
      },
    },
  }
</script>

<style lang="sass" scoped>
@import "~styles/vars/fonts"

.sign-out
  margin-left: 8px
  font-family: $ff-roboto
  font-weight: $fw-black
</style>
