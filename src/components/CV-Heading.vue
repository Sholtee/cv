<!--
   CV-Heading.vue
   Author: Denes Solti
-->

<template lang="pug">
//-
  Vue template-nek csak egy gyoker eleme lehet ezert a <table> alatt tobb <tbody> elemunk lesz ami teljesen valid:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
tbody
  tr.group-header(v-once)
    th {{title | capitalize}}
    th.empty
  tr(v-for="(value, key) in content")
    td.key(v-html="key")
    td.value
      CV-Cell(:data="value")
</template>

<script>
import cell from './CV-Cell.vue';

export default {
  name: 'CV-Heading',
  components: {
    'CV-Cell': cell
  },
  props: {
    title: String,
    content: Object
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

tbody > tr
    line-height: 1.2
    height: 2.5rem
    font-weight: unset
    color: $font-color-highlighted

    &:not(.group-header)
        will-change: background-color
        transition: background-color $default-transition-len

        &:hover
            background-color: $row-bg

        > .key
            text-align: right

        > .value
            text-align: left

    &.group-header
        font-size: 1rem
        border-bottom: 1px solid black

        > th
            font-weight: bold
            padding-left: $min-margin
            text-align: left

            &:not(.empty)
                width: 30%
                background: #b2b2b2

    > th, td
        &:first-of-type
            border-right: 1.7rem solid transparent
</style>
