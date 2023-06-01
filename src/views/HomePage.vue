<template>
  <section class="relative h-[90vh]">
    <video src="/bgvideo.mp4" autoplay loop muted class="absolute top-0 left-0 -z-10 h-[90vh] w-full object-cover"></video>
    <navbar />

    <!-- Main Lockup -->
    <div class="absolute bottom-10 left-0 right-0 text-center md:text-left">
      <p class="ITC mx-auto w-[85%] text-left text-6xl text-amber-50 md:w-full md:pl-20 md:text-left md:text-7xl lg:text-8xl xl:text-9xl">
        The best way to stay <span class="ITC underline">happy</span> <br />
        for a dream <span class="ITC underline">vacation</span>
      </p>

      <p class="IBM mx-auto mt-7 w-[85%] text-left text-sm leading-relaxed tracking-wider text-gray-200 md:hidden">Experience uncomprimising luxury, with none of the stress</p>

      <button class="IBM mt-7 w-[85%] rounded-full bg-amber-50 py-3 font-medium md:ml-20 md:w-72">EXPLORE MORE</button>
    </div>
  </section>

  <!-- Place for all your desires -->
  <section>
    <p class="ITC pt-16 text-center text-4xl md:text-7xl">A place for all your desires</p>
    <p class="IBM group mt-2 text-center tracking-tight text-gray-700 transition duration-200 ease-in-out hover:text-blue-700">
      Browse more
      <span aria-hidden="true" class="inline-block translate-x-0 transition-transform duration-200 ease-in-out group-hover:translate-x-1">→</span>
    </p>

    <div class="bg-amber-50s mx-auto mt-10 grid w-[85vw] grid-cols-1 grid-rows-1 gap-10 text-center lg:w-full lg:grid-cols-4 lg:pl-20 lg:pr-20">
      <div class="h-96 lg:h-full">
        <img src="https://imgur.com/JClCEA3.jpg" alt="" class="outline-3 mb-4 h-[95%] w-full rounded-2xl object-cover outline-dashed outline-black" />
        <p class="IBM lg:text-sm xl:text-base">Central Park, New York</p>
      </div>

      <div class="mt-5 hidden h-96 lg:mt-0 lg:block lg:h-full">
        <img src="https://imgur.com/Th6NDW5.jpg" alt="" class="outline-3 mb-4 h-[95%] w-full rounded-2xl object-cover outline-dashed outline-black" />
        <p class="IBM lg:text-sm xl:text-base">New Delhi, India</p>
      </div>

      <div class="hidden h-96 lg:mt-0 lg:block lg:h-full">
        <img src="https://imgur.com/JiqBFcZ.jpg" alt="" class="outline-3 mb-4 h-[95%] w-full rounded-2xl object-cover outline-dashed outline-black" />
        <p class="IBM lg:text-sm xl:text-base">Grand Bazaar, Turkey</p>
      </div>
      <div class="mt-8 h-96 lg:mt-0 lg:block lg:h-full">
        <img src="https://imgur.com/n0MkUpE.jpg" alt="" class="outline-3 mb-4 h-[95%] w-full rounded-2xl object-cover outline-dashed outline-black" />
        <p class="IBM lg:text-sm xl:text-base">Florence, Italy</p>
      </div>
    </div>
  </section>

  <section class="mt-36 xl:flex h-[100vh] w-full bg-indigo-200 block">

    <div class="xl:w-1/2 w-full xl:pt-10 pt-[5vh] xl:pl-20 pl-10 pr-10">
      <p class="inter font-light text-[#1b254b] text-xs">Premier Collection</p>
      <p class="inter xl:pt-80 pt-3 md:text-4xl text-2xl font-medium leading-tight text-[#1b254b]">
        Creating affordable luxury, at your doorstep. <br>
        Unwavering commmittment to you.
      </p>
      <p class="inter pt-5 hidden xl:block leading-relaxed tracking-wide pr-14 text-[#1b254b]">
        The premier hotels represent the best of our collection. They are typically located in prime locations, offer excellent amenities, and provide superior service. 
        Premier hotels are often the choice of business travelers and discerning leisure guests.
      </p>
      <button class="bg-[#1b254b] text-white text-xs px-5 rounded-full py-2 xl:mt-7 mt-3">Browse More</button>
    </div>

    <div class="xl:w-1/2 w-full xl:p-14 xl:pr-20 pl-10 pr-10 pt-[5vh] h-full">
      <img :src="source" alt="" class="xl:h-full w-full rounded-lg object-cover shadow-2xl shadow-[#1b254b] h-[60%]" />
    </div>
  </section>

<div>
  <footer2 />
</div>
</template>

<style>
:root {
  font-family: "Inter", sans-serif;
}

@supports (font-variation-settings: normal) {
  :root {
    font-family: "Inter var", sans-serif;
  }
}
.transition-colors {
  transition-duration: 500ms;
}
.playfair {
  font-family: "Playfair Display", serif;
}
.ITC {
  font-family: "ITCLightNarrow";
}
.IBM {
  /* font-family: "IBM Plex Mono", monospace; */
  font-family: "Inter", sans-serif;
}

.inter {
  font-family: "Inter", sans-serif;
}

</style>

<script setup>
import { ref } from "vue";
import navbar from "../components/Navbar.vue";
import footer2 from "../components/Footer.vue";

const carouselSources = ["https://imgur.com/lqRkNY1.jpg", "https://imgur.com/9oVxh5D.jpg", "https://imgur.com/xAyVM2T.jpg"];
const count = ref(0);
const source = ref("https://imgur.com/lqRkNY1.jpg");

function ChangeImage() {
  count.value++;
  if (count.value > 2) {
    count.value = 0;
  }

  source.value = carouselSources[count.value];
}


setInterval(() => {
  ChangeImage();
}, 4000);

// 1862 width
// 953 height
</script>
