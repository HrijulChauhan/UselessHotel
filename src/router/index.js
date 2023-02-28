import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import About from "../components/About.vue";
import Form from "../components/Form.vue";
import BookHotel from "../components/BookHotel.vue";
import ProductInfo from "../components/ProductInfo.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/form",
      component: Form,
    },
    {
      path: "/Book",
      component: BookHotel,
    },
    {
      path: '/product/:id',
      name: 'productInformation',
      component: ProductInfo,
    },
  ],
});

export default router;
