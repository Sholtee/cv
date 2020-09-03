<!--
   App.vue
   Author: Denes Solti
-->

<template lang="pug">
#app
    .language-selector
        .flag-icon(v-for="language in languages" v-on:click="contentIndex = language" :class="{[`flag-icon-${language}`]: true, selected: language == contentIndex}")
    CV-Table(v-if="content" :content="content")
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
    async contentIndex(i) {
      const content = await axios.get(contents[i]);
      this.content = content.data;
    }
  },
  computed: {
    languages() {
      return Object.keys(contents);
    }
  },
  mounted() {
    this.contentIndex = this.languages[0];
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

    > .language-selector
        position: fixed
        display: flex
        padding: calc(#{$min-margin} / 2)
        z-index: 100

        > .flag-icon
            &:not(:first-of-type)
                margin-left: calc(#{$min-margin} / 2)

            &:not(.selected)
                cursor: pointer

            &.selected, &:hover
                &:after
                    content: ""
                    position: absolute
                    width: 100%
                    height: 2px
                    left: 0
                    top: -0.5rem
                    background-color: #85ffbb
</style>
