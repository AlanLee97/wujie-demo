import Vue from 'vue'
import App from './App.vue'
import { setupApp, startApp } from "wujie";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

setupApp({
  name: "subapp-vue2",
  url: "./subapp-vue2/index.html",
  exec: true,
  el: "#sub-apps",
  sync: true
})

startApp({ name: "subapp-vue2" });
