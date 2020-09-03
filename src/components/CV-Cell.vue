<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
span(:class="{placeholder: !contentVisible}" v-on:click="contentVisible = true" v-html="contentVisible ? (data.text || data) : data.placeholder")
</template>

<script>
export default {
  name: 'CV-Cell',
  props: ['data'],
  data: function() {
    return {
      contentVisible: typeof this.data === 'string'
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