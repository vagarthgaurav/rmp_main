import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import axios from 'axios';

const ax = axios.create({
	baseURL: 'https://api.formavisioplus.com/v1'
});

Vue.config.productionTip = false;

Vue.prototype.$http = ax;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
