import Vue from 'vue';
import Router from 'vue-router';

import { SiteName, TitleSeparator, RouterMode } from '@Config';

import Index from '@View/Index.vue';

Vue.use(Router);

const router = new Router({
  mode: RouterMode,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
      meta: {
        title: 'Accueil',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + TitleSeparator + SiteName;
  next();
});

export default router;
