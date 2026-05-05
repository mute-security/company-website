import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PrivacyPolicy from '../views/PrivacyPolicy.vue';
import TermsOfService from '../views/TermsOfService.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: TermsOfService },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: 'smooth' };
  }
});
