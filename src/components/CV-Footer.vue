<!--
   CV-Footer.vue
   Author: Denes Solti
-->

<template lang="pug">
tfoot
    tr.header
        td(colspan="2") {{content.title | capitalize}}
    tr
        td(colspan="2" v-html="content.text")
</template>

<script>
export default {
  name: 'cv-footer',
  props: {
    content: {
      type: Object,
      validator: val => ['title', 'text'].every(prop => prop in val)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

td
    padding: $cell-padding
    color: $font-color-highlighted
    text-align: left

.header
    border-bottom: $header-bottom-border

    > td
        font-weight: bold
        text-align: center
        background: $header-bg
        border-top: 3rem solid transparent
</style>