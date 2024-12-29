/********************************************************************************
*  error.js                                                                      *
*  Author: Denes Solti                                                          *
********************************************************************************/
import Vue from 'vue';
import Error from '../components/Error.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(Error)
}).$mount('#error');
