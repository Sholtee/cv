<!--
   CV-Heading.vue
   Author: Denes Solti
-->

<template lang="pug">
//-
  Vue template-nek csak egy gyoker eleme lehet ezert a <table> alatt tobb <tbody> elemunk lesz ami teljesen valid:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
tbody
  tr.group-header
    th {{title | capitalize}}
    th.empty
  tr(v-for="(value, key) in content")
    td.key {{key | capitalize}}
    td.value(v-html="value")
</template>

<script>
  export default {
  name: 'CV-Heading',
  props: {
    title: String,
    content: Object
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

*
    position: relative

tbody > tr
    color: $font-color
    line-height: 1.2
    height: 3.125rem
    font-weight: unset

    &:not(.group-header)
        will-change: background-color
        transition: background-color $default-transition-len

        &:hover
            color: $font-color-highlighted
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
                background: #e6e6e6

    > th, td
        &:first-of-type
            border-right: 1.7rem solid transparent
</style>
