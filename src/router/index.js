import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import About from "../components/About.vue"
import Form from "../components/Form.vue"

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
    },
    {
      path: '/form',
      component: Form,
    }
  ],
});

export default router