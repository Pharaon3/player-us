import Vue from 'vue'
import App from './App.vue'

import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.component('vue-friendly-iframe', VueFriendlyIframe);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
