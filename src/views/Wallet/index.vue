<template lang="pug">
  main
    SignOut
    Navbar
    Landing
</template>

<script>
  import Navbar from 'components/Navbar'
  import SignOut from 'components/SignOut'
  import Landing from './Landing'

  export default {
    name: 'Wallet',
    components: {
      Landing,
      Navbar,
      SignOut
    },
  }
</script>
