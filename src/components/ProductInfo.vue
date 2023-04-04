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

  <div class="m-auto py-10 2xl:w-3/4">
    <header class="text-3xl font-light tracking-tight text-gray-700  mr-5 2xl:ml-0 ml-10">{{ hotelInformation[0].name }}</header>
    <div class="font-semibold text-blue-600 2xl:ml-0 ml-10">{{ hotelInformation[0].location }}</div>

    <section class="flex flex-col 2xl:flex-row">
      <div class="md:mr-10 2xl:ml-0 ml-10 mt-5">
        <img :src="ImageSrc" alt="" class= "h-48 w-96 sm:w-[575px] sm:h-[300px] md:w-[100%] 2xl:w-[3000px] 2xl:h-[500px] object-cover" />
      </div>

      <div class="2xl:mt-5 mt-3 2xl:-ml-0 ml-10">
        {{ hotelInformation[0].name }} <br />
        <strike>₹{{ hotelInformation[0].roomRate + 432 }}</strike> ₹{{
          hotelInformation[0].roomRate
        }}
        per night <br />

        <!-- SOCIAL PROOF  -->
        <figure class="flex -mt-4">
          <svg class="mr-1"
            width="15"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z"
              fill="black"
            />
          </svg>

          <svg class="mr-1"
            width="15"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z"
              fill="black"
            />
          </svg>
        
          <svg class="mr-1"
            width="15"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z"
              fill="black"
            />
          </svg>
        
          <svg class="mr-1"
            width="15"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z"
              fill="black"
            />
          </svg>
        
          <svg class="mr-1"
            width="15"
            height="61"
            viewBox="0 0 65 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 0L40.0212 23.1479H64.3604L44.6696 37.4541L52.1908 60.6021L32.5 46.2959L12.8092 60.6021L20.3304 37.4541L0.639606 23.1479H24.9788L32.5 0Z"
              fill="black"
            />
          </svg>
        
        </figure>

        <!-- DESCRIPTION  -->
        <article class="text-justify mr-10 2xl:mr-0">
          <b>Details </b>
          <p class="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit 
             Incidunt modi atque asperiores placeat soluta? Itaque est debitis 
            corrupti alias nihil  assumenda voluptatem, non dolor. Recusandae veniam fugiat aliquid maxime iure?
          </p>
        </article>

        <button class="bg-black text-white rounded px-8 py-2 mt-5" @click="this.$router.replace('/reserve')">
          Reserve
        </button>

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
