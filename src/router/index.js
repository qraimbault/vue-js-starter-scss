import Vue from "vue";
import Router from "vue-router";

import Index from "@View/Index.vue";
import { SiteName, TitleSeparator } from "@Config";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Index,
      meta: {
        title: "Accueil"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + TitleSeparator + SiteName;
  next();
});

export default router;
