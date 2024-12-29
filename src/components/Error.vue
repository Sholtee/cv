<!--
   Error.vue
   Author: Denes Solti
-->

<template lang="pug">
#error
  h1 Oooops, something went wrong
  img(src="@/assets/grumpy.png")
</template>

<script>
export default {
  name: 'error-page'
}
</script>

<style src="../styles/main.sass" lang="sass"></style>

<style lang="sass">
#error
   width: 100%
   height: 100%
   font-family: Roboto, sans-serif

   > h1
       text-align: center

   > img
       left: 50%
       transform: translateX(-50%)
       display: block
       height: auto
       width: 50%
       max-width: 40rem
</style>