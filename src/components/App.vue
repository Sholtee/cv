<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    CV-Table(v-if="!!content" :content="content")
</template>

<script>
import contents from  '../assets/content.json';
import table from './CV-Table.vue';
import axios from 'axios';

export default {
  name: 'CV',
  title: 'CV',
  components: {
    "CV-Table": table
  },
  data: function() {
    return {
      contentIndex: false,
      content: false
    }
  },
  watch: {
    contentIndex(i) {
      axios
        .get(this.contents[i])
        .then(content => this.content = content.data);
    }
  },
  computed: {
    contents() {
      return contents.map(content => Object.values(content)[0]);
    },
    languages() {
      return contents.map(content => Object.keys(content)[0]);
    }
  },
  mounted() {
    this.contentIndex = 0;
  }
};
</script>

<style src="../styles/main.sass" lang="sass"></style>

<style lang="sass">
@import "../styles/consts"

#app
    width: 100%
    height: 100%
    font-family: Roboto, sans-serif
</style>
