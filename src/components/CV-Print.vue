<!--
   CV-Print.vue
   Author: Denes Solti
-->

<template lang="pug">
img.print(src="../assets/print.svg" @click="print")
</template>

<script>
import EventBus from '@/scripts/eventbus';

export default {
  name: 'cv-print',
  methods: {
    async print() {
      EventBus.$emit('print', true);
      await this.$nextTick();
      try {
        window.print();
      } finally {
        EventBus.$emit('print', false);
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.print
    position: absolute
    padding: calc(#{$min-margin} / 2)
    z-index: 100
    right: 0
    will-change: background-color
    transition: background-color $default-transition-len
    border-radius: 50%

    @media print
        display: none

    &:hover
        cursor: pointer
        background-color: $row-bg
</style>