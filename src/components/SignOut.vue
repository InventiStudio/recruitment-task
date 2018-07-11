<template lang="pug">
  button(@click="signOut()")
    span.fs-15 Logout
</template>

<script>
  import { mapActions } from 'vuex'
  import { STORAGE_AUTH_TOKEN } from 'src/constants'
  import api from 'src/services/api' 
  import router from 'src/router'
 


  export default {
    name: 'SignOut',
    data: () => ({
    }),
     methods: {
      ...mapActions({
        logout: 'auth/logout',
      }),
      async signOut() {
        // need to add corrent req
          this.logout()
      },
    },
  }
</script>

<style lang="sass" scoped>

</style>
