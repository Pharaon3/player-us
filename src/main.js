import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"

import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.component('vue-friendly-iframe', VueFriendlyIframe);

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});