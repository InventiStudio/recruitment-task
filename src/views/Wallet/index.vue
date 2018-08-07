<template lang="pug">
  main.sign-in
    .container
      .row.justify-content-between
        .col-2.logo
          img.logo__part(src="~assets/combined_Shape-1.svg", alt="Wallet: InventiStudio recruitment task")
          img.logo__part(src="~assets/combined_Shape.svg", alt="Wallet: InventiStudio recruitment task")
          img.logo__name(src="~assets/name.svg", alt="Wallet: InventiStudio recruitment task")
        SignOut.col-1
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
      SignOut,
    },
  }
</script>
<style lang="sass" scoped>
.container
  padding 0
.logo
  display: flex

  &__part
    width: 20%
  &__name
    margin-left: 29px
    width: 86%

</style>
