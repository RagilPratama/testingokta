import { createRouter, createWebHistory } from 'vue-router';
import { LoginCallback, navigationGuard } from '@okta/okta-vue';
import HomeComponent from '@/components/Home.vue';
import ProfileComponent from '@/components/Profile.vue';
import MessagesComponent from '@/components/Messages.vue';

const routes = [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/login/callback',
    component: LoginCallback,
  },
  {
    path: '/profile',
    component: ProfileComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/messages',
    component: MessagesComponent,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Add the navigation guard
router.beforeEach(navigationGuard);

export default router;
