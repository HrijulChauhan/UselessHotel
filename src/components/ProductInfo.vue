<template>

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
  
  <div class="m-auto w-3/4 bg-red-50 py-10">
    <header class="text-3xl font-normal tracking-tight text-gray-800">
      Luxury Suite in Manhattan: The Plaza Hotel
    </header>
    <div> {{ hotelInformation[0].location }} </div>    

    <section class="flex mt-10">
      <div class="w-[800px] ">
        <img :src="ImageSrc" alt="" />
      </div>

      <div class="ml-5">
        {{ hotelInformation[0].name }} <br />
        <strike>₹{{ hotelInformation[0].roomRate + 432 }}</strike>  ₹{{hotelInformation[0].roomRate }} per night <br>
        🌟🌟🌟🌟🌟
      </div>
    </section>
  </div>
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
