import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'materialize-css/dist/js/materialize.min';
// import 'material-design-icons-iconfont';

import 'bootstrap/dist/js/bootstrap.js';

createApp(App).use(store).use(router).mount('#app');
