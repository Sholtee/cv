<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    table
        CV-Heading(v-for="(data, title) in content.headings" :key="title" :title="title" :content="data")
</template>

<script>
import content from  '../assets/content.json';
import heading from './CV-Heading.vue'

export default {
  name: 'CV',
  title: 'CV',
  components: {
    "CV-Heading": heading
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

    > table
        position: relative
        border-collapse: collapse
        background: white
        overflow: hidden
        width: $table-width
        max-width: 100%
        margin: 0 auto $min-margin
        text-align: center
        font-size: 1rem
        border: none

        @media (max-width: #{$table-width})
            margin-left: $min-margin
            margin-right: $min-margin
</style>
