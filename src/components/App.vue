<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    .table-holder
        table
            thead
                tr
                    td(colspan="2")
                        span {{content.name}}
                        img(src="./../assets/avatar.jpg")
            CV-Heading(v-for="(data, title) in content.headings" :key="title" :title="title" :content="data")
</template>

<script>
import content from  '../assets/content.json';
import heading from './CV-Heading.vue';

export default {
  name: 'CV',
  title: 'CV',
  components: {
    "CV-Heading": heading
  },
  data: function() {
    return {
      content
    }
  }
};
</script>

<style src="../styles/main.sass" lang="sass"></style>

<style lang="sass">
@import "../styles/consts"

#app
    width: 100%
    height: 100%
    font-family: Roboto, sans-serif

    &, & *
        position: relative

    > .table-holder
        width: 100%
        height: 100%
        overflow-y: auto
        box-sizing: border-box

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

        @media (max-width: #{$table-width})
            padding-left: $min-margin
            padding-right: $min-margin
</style>
