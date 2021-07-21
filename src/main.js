import Vue from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const bus = new Vue()
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
