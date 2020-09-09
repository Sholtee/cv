<!--
   CV-Body.vue
   Author: Denes Solti
-->

<template lang="pug">
//-
  Vue template-nek csak egy gyoker eleme lehet ezert a <table> alatt tobb <tbody> elemunk lesz ami teljesen valid:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
tbody
  tr.header(v-once)
    td.title {{title | capitalize}}
    td.empty
  //- A fejlec "td"-k ala helyezett szegelyt kette osztana a valaszto
  tr.separator
    td(colspan="2")
  tr.content(v-for="(value, key) in content")
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

tbody
    $cell-spacing: 1.7rem solid transparent

    > .header, .content
        line-height: 1.2
        height: 2.5rem
        font-weight: unset
        color: $font-color-highlighted

        > td
            padding: $cell-padding

            &:nth-of-type(2)
                border-left: $cell-spacing

    > .content
        will-change: background-color
        transition: background-color $default-transition-len

        > .key
            text-align: right
            padding-right: 0

        > .value
            text-align: left
            padding-left: 0

        &:hover
            background-color: $row-bg

    > .header
        > td
            font-weight: bold
            text-align: left

            &.title
                width: 30%
                background: $header-bg

    > .separator
        > td
            height: 0
            padding: 0
            border-bottom: $header-bottom-border

    &:last-of-type > tr:last-of-type > td
        border-bottom: $cell-spacing
</style>
