<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    cv-content
        cv-language(:languages="languages" v-on:language-selected="setContent")
        cv-table(v-if="content" :content="content")
</template>

<script>
import axios from 'axios';
import contents from  '../assets/content.json';

export default {
  name: 'CV',
  title: 'CV',
  components: {
    'cv-content':  () => import('./CV-Content.vue'),
    'cv-table':    () => import('./CV-Table.vue'),
    'cv-language': () => import('./CV-Language.vue')
  },
  data() {
    return {
      contentIndex: false,
      content: false
    }
  },
  methods: {
    async setContent(i) {
      const {data} = await axios.get(contents[i]);
      this.content = data;
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
