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
    $cell-spacing: 2rem
    break-inside: avoid

    > .header, .content
        line-height: 1.2
        height: 2.5rem
        font-weight: unset
        color: $font-color-highlighted

        > td
            padding: $cell-padding

            &:nth-of-type(2)
                padding-left: $cell-spacing

    > .header
        > td
            font-weight: bold
            text-align: left
            border-bottom: $header-bottom-border

            &.title
                width: 30%
                background: $header-bg

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

            @media print
                background-color: unset

    &:last-of-type > tr:last-of-type > td
        padding-bottom: $cell-spacing
</style>
