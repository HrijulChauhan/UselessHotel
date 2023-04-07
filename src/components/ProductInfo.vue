<template>
  <body class="h-screen w-screen bg-slate-50">
    <Navbar>
      <template #first_nav>
        <p class="px-3 hover:text-black">Home</p>
      </template>

      <template #second_nav>
        <p class="px-3 hover:text-black">About Us</p>
      </template>

      <template #third_nav>
        <p class="px-3 hover:text-black">Contact</p>
      </template>

      <template #fourth_nav>
        <router-link to="/book">
          <p class="px-3 hover:text-black">Browse</p>
        </router-link>
      </template>

      <template #first_hb>
        <a href="#" class="animate-1_5 mt-36 pb-5 text-blue-600">Home</a>
      </template>

      <template #second_hb>
        <a href="#" class="animate-1_25 pb-5 text-black">Contact Us</a>
      </template>

      <template #third_hb>
        <a href="#" class="animate-1 pb-5 text-black">Browse</a>
      </template>
    </Navbar>

    <!-- Heading -->
    <div class="m-auto mt-12 w-4/5 2xl:w-3/4">
      <header class="-ml-[1.5px] text-2xl font-medium leading-5 tracking-tight text-gray-700">{{ hotelInformation[0].name }}</header>
      <div class="font-normal text-blue-600 2xl:ml-0">{{ hotelInformation[0].location }}</div>
    </div>

    <div class="m-auto mt-4 w-4/5 xl:flex 2xl:w-3/4">
      <img :src="ImageSrc" alt="" class="h-96 w-full object-cover shadow-lg xl:w-1/2 2xl:h-[500px]" />

      <!-- Information -->
      <section class="xl:w-1/2 xl:pl-5">
        <div class="mt-2 text-sm xl:mt-0">
          {{ hotelInformation[0].name }} <br />
          <strike>₹{{ hotelInformation[0].roomRate + 432 }}</strike> ₹{{ hotelInformation[0].roomRate }} / night <br />
        </div>

        <div class="pt-3">
          <span class="text-sm font-semibold">Description</span>
          <p class="text-justify text-sm leading-5 tracking-normal">{{ hotelInformation[0].description }}</p>
          <button class="mt-5 bg-black px-8 py-2 text-base text-white" @click="this.$router.replace('/reserve')">Reserve</button>
        </div>
      </section>
    </div>
  </body>
</template>

<style></style>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },

  data() {
    return {
      id: this.$route.params.id,
      url: "http://localhost:8080/api/v1/hotel/" + this.$route.params.id,
      hotelInformation: null,
      ImageSrc: null,
    };
  },

  beforeMount() {
    axios
      .get(this.url)
      .then((response) => {
        this.hotelInformation = response.data;
        this.ImageSrc = this.hotelInformation[0].imageLink;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // mounted() {
  // },
};
</script>
