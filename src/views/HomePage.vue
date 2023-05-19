<template>
  <video src="/bgvideo.mp4" autoplay loop muted class="absolute top-0 bottom-0 -z-10 h-[85%] w-[100%] overflow-hidden object-cover md:h-[110%]" alt="family-video"></video>

  <navbar />

  <section class="mt-[32rem] sm:mt-[30rem] md:mt-[42rem] lg:mt-[40rem] xl:mt-[36rem]">
    <p class="ITC text-5xl text-white md:pl-20 text-center md:text-left md:text-7xl lg:text-8xl xl:text-9xl">
      The best way to stay <span class="ITC underline">happy</span> <br />
      for a dream <span class="ITC underline">vacation</span>
    </p>
    <button class="IBM mx-auto mt-10 text-center flex rounded-full bg-white px-20 py-4 text-base md:text-left md:ml-20 md:mt-28">Explore More</button>
  </section>
  <div class="mt-96">hi</div>
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
  font-family: "IBM Plex Mono", monospace;
}
</style>

<script setup>
import navbar from "../components/Navbar.vue";
// 1862 width
// 953 height
</script>
