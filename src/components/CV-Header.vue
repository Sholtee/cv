<!--
   CV-Header.vue
   Author: Denes Solti
-->

<template lang="pug">
thead(v-once)
    tr
        td(colspan="2")
            img(:src="content.avatar")
            span(:data-subtitle="content.subtitle") {{content.title}}
</template>

<script>
export default {
  name: 'CV-Header',
  props: {
    content: Object
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

td
    height: 13rem
    padding: 2rem 0 2rem 0

    > img
        width: 14rem
        height: 14rem
        border-radius: 100%

    > span
        font-size: 3rem
        color: $font-color-highlighted

        &:after
            content: attr(data-subtitle)
            font-size: 1rem
            display: block
            margin-top: $min-margin

    @media (max-width: #{$table-width})
        > img
            margin-bottom: 3rem

        > span
            display: block

    @media (min-width: #{$table-width})
        > img
            float: right

        > span
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
</style>