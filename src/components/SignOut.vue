<template lang="pug">
  button(@click="signOut()")
    span.fs-15 Logout
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

</style>
