<!--
   CV-Secret.vue
   Author: Denes Solti
-->

<template lang="pug">
span(:class="{placeholder: !content.visible}" v-on:click="content.visible = true" v-html="content.visible ? content.text : content.placeholder")
</template>

<script>
export default {
  name: 'cv-secret',
  props: {
    value: {
      type: Object,
      validator: val => ['placeholder', 'text'].every(prop => prop in val)
    }
  },
  data: function() {
    return {
      content: {...this.value, visible: false}
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