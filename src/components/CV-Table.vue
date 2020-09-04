<!--
   CV-Table.vue
   Author: Denes Solti
-->

<template lang="pug">
.table-holder
    table
        thead
            tr
                td(colspan="2")
                    span(:data-subtitle="content.subtitle") {{content.title}}
                    img(:src="content.avatar")
        CV-Heading(v-for="(data, title) in content.headings" :key="title" :title="title" :content="data")
</template>

<script>
import heading from './CV-Heading.vue';

export default {
  name: 'CV-Table',
  components: {
    "CV-Heading": heading
  },
  props: {
    content: Object
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.table-holder
    width: 100%
    height: 100%
    overflow-y: auto
    box-sizing: border-box
    margin-bottom: 2rem

    > table
        border-collapse: collapse
        background: white
        overflow: hidden
        width: 100%
        max-width: $table-width
        margin: auto
        text-align: center
        font-size: 1rem
        border: none

        > thead
            td
                height: 13rem
                padding: 2rem 0 2rem 0

                > img
                    width: 14rem
                    height: 14rem
                    border-radius: 100%
                    float: right

                > span
                    position: absolute
                    font-size: 3rem
                    color: $font-color-highlighted
                    top: 50%
                    left: 50%
                    transform: translate(-50%, -50%)

                    &:after
                        content: attr(data-subtitle)
                        font-size: 1rem
                        display: block
                        margin-top: $min-margin

    @media (max-width: #{$table-width})
        padding-left: $min-margin
        padding-right: $min-margin
</style>
