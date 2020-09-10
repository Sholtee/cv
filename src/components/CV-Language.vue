<!--
   CV-Language.vue
   Author: Denes Solti
-->

<template lang="pug">
.language-selector
    .flag-icon(v-for="language in languages" v-on:click="selectLanguage(language)" :class="{[`flag-icon-${language}`]: true, selected: language == selected}")
</template>

<script>
export default {
  name: 'cv-language',
  props: {
    languages: Array
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    selectLanguage(language){
      this.$emit('language-selected', this.selected = language)
    }
  },
  created() {
    this.selectLanguage(this.languages[0]);
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.language-selector
    position: absolute
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