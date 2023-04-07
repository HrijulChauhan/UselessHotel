<template>
  <header class="m-auto w-[100%] 2xl:w-3/4">
    <nav class="flex justify-between pt-10">
      <div class="GBFont text-3xl text-black">GB</div>

      <div class="nav-links flex items-center text-sm font-normal tracking-tight text-gray-400">
        <slot name="first_nav"> Home </slot>
        <slot name="second_nav"> About Us </slot>
        <slot name="third_nav"> Contact </slot>
        <slot name="fourth_nav"> Browse </slot>
      </div>

      <div class="Log mt-1 text-lg font-semibold text-black">Log in</div>
    </nav>

    <nav class="animate-1">
      <div class="hamburger z-20 ml-[10%] space-y-2" @click="showOptions = !showOptions">
        <span class="block h-0.5 w-8 bg-gray-600"></span>
        <span class="block h-0.5 w-8 bg-gray-600"></span>
        <span class="block h-0.5 w-5 bg-gray-600"></span>
      </div>
    </nav>
  </header>

    <nav class="option flex flex-col bg-white pl-[10%] pt-10 text-5xl font-light tracking-tight" style="position: fixed; top: 0; left: 0" v-if="showOptions">
      <span @click="showOptions = !showOptions">
        <img src="../assets/close.svg" width="20" height="20" alt="" />
      </span>

      <slot name="first_hb"> Home </slot>
      <slot name="second_hb"> About Us </slot>
      <slot name="third_hb"> Contact </slot>
    </nav>

</template>
<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
};
</script>

<style scoped>
.option {
  height: 100%;
  width: 100%;
}

.hamburger {
  display: none;
}

@media (max-width: 1536px) {
  .nav-links,
  .GBFont,
  .Log {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>
