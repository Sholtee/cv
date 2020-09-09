<!--
   CV-Footer.vue
   Author: Denes Solti
-->

<template lang="pug">
tfoot
    tr.title
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
@import "../styles/hacks"

td
    padding: $cell-padding
    color: $font-color-highlighted
    text-align: left

.title
    +enforce-border-bottom // border-bottom a border-collapse miatt nem latszik

    > td
        font-weight: bold
        text-align: center
        background: $header-bg
</style>