<template>
  <!-- Promo header -->
  <header class="IBM items-center bg-indigo-200 py-1 text-center text-sm font-medium tracking-tight text-[#1b254b]">
    NEW LOCATIONS NOW AVAILABLE
  </header>

  <header
    class="grid h-[15vh] grid-cols-3 grid-rows-1 items-center text-base text-white transition-colors delay-150 ease-in-out hover:bg-amber-50 hover:text-black md:mb-0 md:h-14 md:py-0"
  >
    <div class="IBM invisible flex justify-start font-light md:visible">
      <router-link to="/book">
        <div class="IBM pl-20 pr-10">Browse</div>
      </router-link>
      <router-link to="/book">
        <div class="IBM">Premier</div>
      </router-link>
    </div>

    <span class="ITC text-center text-3xl font-medium">Grand Budapest</span>

    <router-link to="/login">
      <div class="IBM invisible pr-20 text-end font-light md:visible">Login</div>
    </router-link>
  </header>
</template>
<script></script>
