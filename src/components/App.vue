<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    CV-Language(:languages="languages" v-on:language-selected="setContent($event)")
    CV-Table(v-if="content" :content="content")
</template>

<script>
import axios from 'axios';
import contents from  '../assets/content.json';
import table from './CV-Table.vue';
import language from './CV-Language.vue';

export default {
  name: 'CV',
  title: 'CV',
  components: {
    'CV-Table': table,
    'CV-Language': language
  },
  data: function() {
    return {
      contentIndex: false,
      content: false
    }
  },
  methods: {
    async setContent(i) {
      const content = await axios.get(contents[i]);
      this.content = content.data;
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
