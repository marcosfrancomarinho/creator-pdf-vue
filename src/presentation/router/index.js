import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Create from '../views/Create.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/create', component: Create },
  ],
});
export default router;
