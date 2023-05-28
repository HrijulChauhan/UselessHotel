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

  <section class="mt-20 flex h-[100vh] w-full bg-[#D7DF58]">
    <div class="mt-[5vh] w-1/2 pl-20">
      <p>This is dababy</p>
    </div>

 
    <div class="w-1/2 bg-green-400">
      <img src="https://imgur.com/JL3LzKh.jpg" alt="" class="w-full h-[90%] mt-[5%] object-cover">

    </div>

  </section>
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

.main-container {
  height: 70vh;
}
</style>

<script setup>
import navbar from "../components/Navbar.vue";

// 1862 width
// 953 height
</script>
