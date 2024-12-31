<!--
   CV-Cell.vue
   Author: Denes Solti
-->

<template lang="pug">
td
    component(:is="component" :value="content")
</template>

<script>
export default {
  name: 'cv-cell',
  components: {
    'cv-secret':    () => import('./CV-Secret.vue'),
    'cv-indicator': () => import('./CV-Indicator.vue'),
    'cv-text':      () => import('./CV-Text.vue')
  },
  props: {
    value: {
      type: [String, Object],
      validator: value => typeof value === 'string' || 'type' in value
    }
  },
  computed: {
    content() {
      const {value} = this;
      return typeof value !== 'string' ? value : {text: value, type: "text"};
    },
    component() {
      switch (this.content.type){
        case 'secret': return 'cv-secret';
        case 'indicator': return 'cv-indicator';
        case 'text': return 'cv-text';
        default: throw 'Unknown content type';
      }
    }
  }
}
</script>