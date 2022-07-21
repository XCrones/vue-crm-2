import { createRouter, createWebHistory } from 'vue-router';
import viewsHomeVue from '@/views/vs-home.vue';

const routes = [
  {
    path: '/',
    name: 'views-home',
    component: viewsHomeVue,
  },
  {
    path: '/purchases',
    name: 'views-buy',
    component: () => import(/* webpackChunkName: "views-purchases" */ '@/views/purchases/vs-purchases.vue'),
  },
  {
    path: '/storage',
    name: 'views-storage',
    component: () => import(/* webpackChunkName: "views-storage" */ '@/views/storage/vs-storage.vue'),
  },
  {
    path: '/faq',
    name: 'views-faq',
    component: () => import(/* webpackChunkName: "views-storage" */ '@/views/vs-faq.vue'),
  },
  {
    path: '/sale',
    name: 'views-sale',
    component: () => import(/* webpackChunkName: "views-sale" */ '@/views/sales/vs-sale.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
