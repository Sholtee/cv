/********************************************************************************
*  main.js                                                                      *
*  Author: Denes Solti                                                          *
********************************************************************************/
import Vue from 'vue';
import App from '../components/App.vue';
import titleMixin from './mixins/title';
import capitalize from './filters/capitalize';
import _ from 'underscore';

Vue.config.productionTip = false;

Vue.mixin(titleMixin);

Vue.filter('capitalize', capitalize);
Vue.filter('orderBy', _.sortBy);

new Vue({
  render: h => h(App)
}).$mount('#app');
