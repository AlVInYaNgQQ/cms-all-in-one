import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

console.log('Vue register');

new Vue({
  // watch: {
  //   '$i18n.locale' (lang) {
  //     document.documentElement.lang = lang
  //   },
  // },
  // i18n,
  // el: '#app',
  // store,
  router,
  render: h => h(App),
}).$mount('#app')
