<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
  cv-content
    cv-language(:languages="languages" v-on:language-selected="setContent")
    cv-table(v-if="content" :content="content")
    cv-build-date(v-if="content" :locale="content.locale")
</template>

<script>
import contents from  '../assets/content.json';

export default {
  name: 'CV',
  components: {
    'cv-content':    () => import('./CV-Content.vue'),
    'cv-table':      () => import('./CV-Table.vue'),
    'cv-language':   () => import('./CV-Language.vue'),
    'cv-build-date': () => import('./CV-BuildDate.vue')
  },
  data() {
    return {
      contentIndex: false,
      content: false
    }
  },
  methods: {
    async setContent(i) {
      this.content = await (await fetch(contents[i])).json();
    }
  },
  computed: {
    languages() {
      return Object.keys(contents);
    }
  }
};
</script>

<style src="../styles/main.sass" lang="sass"></style>

<style lang="sass">
#app
    width: 100%
    height: 100%
    font-family: Roboto, sans-serif
</style>
