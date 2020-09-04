<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
td(:class="{placeholder: !contentVisible}" v-on:click="contentVisible = true" v-html="contentVisible ? (value.text || value) : value.placeholder")
</template>

<script>
export default {
  name: 'CV-Cell',
  props: ['value'],
  data: function() {
    return {
      contentVisible: typeof this.value === 'string'
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