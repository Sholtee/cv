<!--
   CV-Content.vue
   Author: Denes Solti
-->

<template lang="pug">
.content
    slot(v-if="browserSupported")
    .browser-not-supported(v-else)
        img(src="@/assets/grumpy.png")
</template>

<script>
export default {
  name: 'cv-content',
  computed: {
    browserSupported() {
      return window.navigator.userAgent.indexOf("MSIE ") < 0;
    }
  }
}
</script>

<style lang="sass" scoped>
.browser-not-supported
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    justify-content: center
    align-items: center

    > img
        width: 210px
        height: 228px

    &:after
        content: "Browser wanted!"
        font-size: 3rem
        letter-spacing: 2px
        font-weight: 600
        color: rgba(0, 0, 0, .3)
</style>