<template>
  <body class="h-screen w-screen bg-white">
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
        <p class="px-3 hover:text-black">Browse</p>
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

    <div class="m-auto mt-12 w-3/4">
      <header class="mr-5 ml-10 text-3xl font-light tracking-tight text-gray-700 2xl:ml-0">{{ hotelInformation[0].name }}</header>
      <div class="ml-10 font-semibold text-blue-600 2xl:ml-0">{{ hotelInformation[0].location }}</div>
    </div>

    <div class="m-auto flex flex-col bg-green-300 2xl:w-3/4 2xl:flex-row">
      <img :src="ImageSrc" alt="" class="h-48 w-96 object-cover sm:h-[300px] sm:w-[575px] md:w-[100%] 2xl:h-[600px] 2xl:w-3/5" />

      <div class="mt-3 ml-10 2xl:mt-5 2xl:-ml-0">
        {{ hotelInformation[0].name }} <br />
        <strike>₹{{ hotelInformation[0].roomRate + 432 }}</strike> ₹{{ hotelInformation[0].roomRate }} per night <br />

        <!-- SOCIAL PROOF  -->
        <figure class="-mt-4 flex">
          <svg class="mr-1" width="15" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z" fill="black" />
          </svg>

          <svg class="mr-1" width="15" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z" fill="black" />
          </svg>

          <svg class="mr-1" width="15" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z" fill="black" />
          </svg>

          <svg class="mr-1" width="15" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z" fill="black" />
          </svg>

          <svg class="mr-1" width="15" height="61" viewBox="0 0 65 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z" fill="black" />
          </svg>
        </figure>

        <!-- DESCRIPTION  -->
        <article class="mr-10 text-justify 2xl:mr-0">
          <b>Details </b>
          <p>{{ hotelInformation[0].description }}</p>
        </article>

        <button class="mt-5 rounded bg-black px-8 py-2 text-white" @click="this.$router.replace('/reserve')">Reserve</button>
      </div>
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
      })
      .catch((error) => {
        console.log(error);
      });
  },

  mounted() {
    this.ImageSrc = this.hotelInformation[0].imageLink;
  },
};
</script>
