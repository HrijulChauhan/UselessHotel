<template>
  
  <body class="relative h-[90vh] bg-black bg-opacity-25">
  
    <video src="/bgvideo.mp4" autoplay loop muted class="absolute top-0 left-0 -z-10 h-[90vh] w-full object-cover"></video>
    <navbar />

    <!-- Main Lockup -->
    <div class="absolute bottom-10 left-0 right-0 text-center md:text-left">
      
      <p class="ITC text-6xl text-left text-white w-[85%] mx-auto md:pl-20 md:w-full md:text-left md:text-7xl lg:text-8xl xl:text-9xl">
        The best way to stay <span class="ITC underline">happy</span> <br />
        for a dream <span class="ITC underline">vacation</span>
      </p>
      
      <p class="IBM  text-sm text-left text-gray-200 mt-7 w-[85%] tracking-wider leading-relaxed mx-auto md:hidden">
        Experience uncomprimising luxury, with none of the stress
      </p>
      
      <button class="IBM mt-7 rounded-full font-medium bg-white py-3 w-[85%] md:w-72 md:ml-20">EXPLORE MORE</button>
    </div>
  
  </body>

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
