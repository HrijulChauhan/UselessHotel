import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import About from "../components/About.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
        path:'/about',
        component: About,
    }
  ],
});

export default router