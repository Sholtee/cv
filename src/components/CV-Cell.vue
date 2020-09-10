<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
td
    cv-secret(v-if="content.type == 'secret'" :value="content")
    cv-indicator(v-else-if="content.type == 'indicator'" :value="content")
    span(v-else-if="content.type == 'text'" v-html="content.text")
</template>

<script>
export default {
  name: 'cv-cell',
  components: {
    'cv-secret':    () => import('./CV-Secret.vue'),
    'cv-indicator': () => import('./CV-Indicator.vue')
  },
  props: {
    value: {
      type: [String, Object],
      validator: val => val.constructor === String || ['type'].every(prop => prop in val)
    }
  },
  data() {
    const {value} = this;

    return {
      content: value.constructor === String
        ? {text: value, type: "text"}
        : value
    };
  }
}
</script>