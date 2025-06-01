import './presentation/styles/global.css';
import { createApp } from 'vue';
import App from './presentation/App.vue';
import router from './presentation/router/index.js';

createApp(App).use(router).mount('#app');
