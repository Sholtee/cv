<!--
   CV-Table.vue
   Author: Denes Solti
-->

<template lang="pug">
.table-holder
    table
        CV-Header(:content="content")
        CV-Body(v-for="(data, title) in content.headings" :key="title" :title="title" :content="data")
</template>

<script>
import header from './CV-Header.vue';
import body from './CV-Body.vue';

export default {
  name: 'CV-Table',
  components: {
    "CV-Header": header,
    "CV-Body": body
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

    @media (max-width: #{$table-width})
        padding-left: $min-margin
        padding-right: $min-margin
</style>
