import Vue from 'vue';
import App from './App.vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// eslint:disable-next-line:max-line-length
// eslint-disable-next-line
import '../node_modules/materialize-css/sass/materialize.scss';
import '../node_modules/materialize-css/dist/js/materialize.min.js';



Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
