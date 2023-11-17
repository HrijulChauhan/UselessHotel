<script setup>
import { ref, onMounted, computed, onBeforeMount } from "vue";
import { supabase } from "../lib/supabaseClient";
import { useRouter, useRoute } from "vue-router";

const hotelInformation = ref([]);
const router = useRouter();
const route = useRoute();
var ImageSrc = ref('')

async function getCountries() {
  const { data } = await supabase.from("hotel").select().eq("id", route.params.id);
  hotelInformation.value = data;
  ImageSrc = hotelInformation.value[0].image_link
  console.log(ImageSrc);
}


onBeforeMount(() => {
  getCountries();
});
</script>


<template>
  <body class="h-screen w-screen bg-slate-50" >
    <!-- Heading -->
    <div class="m-auto mt-12 w-4/5 2xl:w-3/4">
      <header class="-ml-[1.5px] text-2xl font-medium leading-5 tracking-tight text-gray-700">{{ hotelInformation[0].name }}</header>
      <div class="font-normal text-blue-600 2xl:ml-0">{{ hotelInformation[0].location }}</div>
    </div>

    <div class="m-auto mt-4 w-4/5 xl:flex 2xl:w-3/4">
      <img :src="ImageSrc" alt="" class="h-96 w-full object-cover shadow-lg xl:w-1/2 2xl:h-[500px] rounded" />

      <!-- Information -->
      <section class="xl:w-1/2 xl:pl-5">
        <div class="mt-2 text-sm xl:mt-0">
          {{ hotelInformation[0].name }} <br />
          <strike>₹{{ hotelInformation[0].roomRate + 432 }}</strike> ₹{{ hotelInformation[0].roomRate }} / night <br />
        </div>

        <div class="pt-3">
          <span class="text-sm font-semibold">Description</span>
          <p class="text-justify text-sm leading-5 tracking-normal">{{ hotelInformation[0].description }}</p>
          <button class="mt-5 bg-black px-8 py-2 text-base text-white" @click="router.push('/reserve')">Reserve</button>
        </div>
        <router-link to="/book">
          <div class="mt-5">Go back</div>
        </router-link>
      </section>
    </div>


  </body>
</template>
