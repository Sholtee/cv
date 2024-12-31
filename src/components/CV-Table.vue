<!--
   CV-Table.vue
   Author: Denes Solti
-->

<template lang="pug">
.table-holder
    table
        cv-header(:content="content.header")
        cv-body(v-for="(body, title) in content.body" :key="title" :title="title" :content="body")
        cv-footer(v-if="content.footer" :content="content.footer")
</template>

<script>
export default {
  name: 'cv-table',
  components: {
    'cv-header': () => import('./CV-Header.vue'),
    'cv-body':   () => import('./CV-Body.vue'),
    'cv-footer': () => import('./CV-Footer.vue')
  },
  props: {
    content: {
      type: Object,
      validator: val => ['header', 'body'/*, 'footer'*/].every(prop => prop in val)
    }
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
        border-collapse: separate
        border-spacing: 0 0
        background: white
        overflow: hidden
        width: 100%
        max-width: $table-width
        margin: auto
        text-align: center
        font-size: 1rem
        border: none

    @media (max-width: #{$table-width})
        padding-left: $margin-small
        padding-right: $margin-small
</style>
