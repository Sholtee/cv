<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
td(:class="{placeholder: !content.visible}" v-on:click="content.visible = true" v-html="content.visible ? content.text : content.placeholder")
</template>

<script>
export default {
  name: 'cv-cell',
  props: {
    value: [String, Object]
  },
  data: function() {
    const {value} = this;

    return {
      content: typeof value === 'string'
        ? {text: value, visible: true}
        : {...value, visible: false}
    };
  }
}
</script>

<style lang="sass" scoped>
.placeholder
    cursor: pointer
    color: rgb(0, 0, 238)
    text-decoration: underline
</style>