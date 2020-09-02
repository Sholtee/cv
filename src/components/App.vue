<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
</template>

<script>
import content from  '../assets/content.json';

export default {
  name: 'CV',
  title: 'CV',
  components: {
  },
  data: function() {
    return {
      content
    }
  },
  methods: {
  }
};
</script>

<style src="../styles/main.sass" lang="sass"></style>

<style lang="sass">
@import "../styles/consts"

#app
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    font-family: Roboto, sans-serif
</style>
