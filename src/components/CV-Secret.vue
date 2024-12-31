<!--
   CV-Secret.vue
   Author: Denes Solti
-->

<template lang="pug">
.secret
    .content(:class="{placeholder: !content.visible}" v-on:click="content.visible = true" v-html="content.visible ? content.text : content.placeholder")
    .print-content(v-if="printing" v-html="content.text")
</template>

<script>
import EventBus from '@/scripts/eventbus';

export default {
  name: 'cv-secret',
  props: {
    value: {
      type: Object,
      validator: val => ['placeholder', 'text'].every(prop => prop in val)
    }
  },
  data() {
    return {
      content: {...this.value, visible: false},
      printing: false
    };
  },
  created() {
    EventBus.$on('print', printing => this.printing = printing);
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.content
    @media print
        display: none

    &.placeholder
        cursor: pointer
        color: $blue
        text-decoration: underline

.print-content
    @media not print
        display: none
</style>
