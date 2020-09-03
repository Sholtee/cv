<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
.span-holder
    span(v-if="showText" v-html="data.text || data" v-once)
    span.placeholder(v-else v-on:click="showText = true" v-html="data.placeholder" v-once)
</template>

<script>
export default {
  name: 'CV-Cell',
  props: ['data'],
  data: function() {
    return {
      showText: typeof this.data === 'string'
    }
  }
}
</script>

<style lang="sass" scoped>
.placeholder
    cursor: pointer
    color: rgb(0, 0, 238)
    text-decoration: underline
</style>