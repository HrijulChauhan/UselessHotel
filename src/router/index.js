import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import About from "../views/About.vue";
import Form from "../views/Form.vue";
import BookHotel from "../components/BookHotel.vue";
import ProductInfo from "../views/ProductInfo.vue";
import ReserveBooking from "../views/ReserveBooking.vue"

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
    {
      path: '/reserve',
      component: ReserveBooking,
    }
  ],
});

export default router;
