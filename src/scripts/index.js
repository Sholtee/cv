/********************************************************************************
*  index.js                                                                      *
*  Author: Denes Solti                                                          *
********************************************************************************/
import Vue from 'vue';
import App from '../components/App.vue';
import capitalize from './filters/capitalize';

Vue.config.productionTip = false;
Vue.filter('capitalize', capitalize);

new Vue({
  render: h => h(App)
}).$mount('#app');
