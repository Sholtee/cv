<!--
   CV-Body.vue
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
    cv-cell.value(:value="value")
</template>

<script>
export default {
  name: 'cv-body',
  components: {
    'cv-cell': () => import('./CV-Cell.vue')
  },
  props: {
    content: Object,
    title: String
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

tr
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
        border-bottom: $header-bottom-border

        > th
            font-weight: bold
            text-align: left

            &:not(.empty)
                width: 30%
                background: $header-bg

    > th, td
        padding: $cell-padding

        &:first-of-type
            border-right: 1.7rem solid transparent

    > td
        padding-right: 0
</style>
