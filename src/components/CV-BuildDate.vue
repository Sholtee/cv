<!--
   CV-BuildDate.vue
   Author: Denes Solti
-->

<template lang="pug">
.build-date(data-build-date=new Date()) {{dateFmt}}
</template>

<script>
import moment from 'moment';

export default {
  name: 'cv-build-date',
  props: {
    locale: {
      type: String,
      default: 'en'
    }
  },
  data() {
    return {
      buildDate: false
    }
  },
  mounted() {
    this.buildDate = this.$el.getAttribute('data-build-date');
  },
  computed: {
    //
    // "this.$el" itt meg mount-olas elott nem elerheto
    //

    dateFmt() {
      const {locale, buildDate} = this;

      if (!buildDate) return;

      moment.locale(locale);
      return moment(buildDate).format('ll');
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/consts"

.build-date
    color: rgba(0, 0, 0, .3)
    text-align: right
    margin: $margin-small
</style>