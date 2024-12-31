<!--
   CV-Text.vue
   Author: Denes Solti
-->

<template lang="pug">
.text
    span(v-html="value.text || value")
    .tag-holder(v-if="value.tags" )
        .tag(v-for="tag in value.tags") {{tag}}
</template>

<script>
export default {
  name: 'cv-text',
  props: {
    value: {
      type: Object,
      validator: val => typeof val === 'string' || (typeof val.text === 'string' && (!val.tags || Array.isArray(val.tags)))
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.text
  display: flex
  flex-flow: row

  > .tag-holder
    display: flex
    flex-direction: row
    margin-left: $margin-tiny

    > .tag
      font-size: .7em
      padding: .5em
      line-height: 5px
      margin-top: auto
      margin-bottom: auto
      background-color: $font-color
      color: $row-bg
      border-radius: 5px

      &:not(:last-of-type)
        margin-right: $margin-tiny
</style>
