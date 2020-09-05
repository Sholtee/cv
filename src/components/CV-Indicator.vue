<!--
   CV-Indicator.vue
   Author: Denes Solti
-->

<template lang="pug">
.indicator
    .value(:style="{width: `${position}%`}")
</template>

<script>
export default {
  name: 'cv-indicator',
  props: {
    value: {
      type: Object,
      validator: val => ['max', 'current'].every(prop => prop in val)
    }
  },
  computed: {
    position() {
      const {current, max} = this.value;
      return (current / max) * 100;
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.indicator
    width: 100%
    max-width: 15rem
    height: .5rem
    background-color: #e1e1e1

    > .value
        position: absolute
        left: 0
        top: 0
        height: 100%
        background-color: $header-bg
</style>