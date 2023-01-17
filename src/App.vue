<script setup>
</script>

<template>

  <div class="grandparent-wrapper pb-96">
    <!-- NAVBAR -->
    <div class="navbar flex justify-around px-52">

      <div class="logo text-3xl pt-8 -mr-0 text-white">
        GB
      </div>

      <div class="links text-xs flex pt-8 items-center text-gray-200">
        <a class="mr-6 ml-14 hover:text-white" href="">About Us</a>
        <a class="mr-6 hover:text-white" href="">Contact Us</a>
        <a class="mr-6 hover:text-white" href="">Testimonials</a>
        <a class=" hover:text-white" href="">Locations</a>
      </div>

      <div class="mr-0 pt-8 text-xs">
        <button class="log-in px-7 py-2">Log in</button>
      </div>

    </div>


    <!-- HERO SECTION  -->
    <div class="parent-wrapper">
      <div class="wrapper flex  flex-col ">

        <div class="hero-text text-white text-center text-8xl mt-24 mr-0">
          <!-- <span class="visit text-5xl">Visit</span> --> Grand<br> 
          <span class="text-white vercel"> Budapest </span>
        </div>

        <div class="sub-text text-center text-gray-400 mr-0 mt-5 text-base">
          Experience luxury and elegance at the Grand Budapest Hotel   <br>
          a royal sanctuary for the discerning traveler
        </div>

        <div class="pt-8 text-xs mr-0 text-center">
          <button class="discover px-8 py-3">Discover</button>
        </div>
      </div>

    </div>
  </div>

  <!-- BODY SECTION  -->
  <div class="promo-wrap flex justify-center mt-12">
    <div class="promotion-block text-white text-4xl p-10">
      Find your dream location
      <div class="promo-subtext text-base text-gray-400 pt-2">
        With over 800 locations in 37 countries, you're sure to find what <br>
        you're looking for. Find what you're looking for, and discover <br>
        the heaven that is The Grand Budapest.
      </div>
      <div class="see-flex flex">
        <div class="promo-subtext text-base see-more pt-5">
          See more
        </div>
        <div class="right-arrow pt-5 pl-2 text-base">
          →
        </div>
      </div>
    </div>

    <br>
    <br>
    <div class="mt-96"></div>

  </div>


</template>

<style scoped>
.navbar {
  width: 100%;
  /* height: 2em; */
  /* border: 5px blue solid; */
}

.logo {
  font-family: "GroteskBold";
}

.links {
  font-family: 'Inter';
  font-weight: 500;
  font-size: 13px;
  transition: ease-in-out;
  animation-duration: 0.5s;
}

.parent-wrapper {
  display: grid;
  place-items: center;
}

.wrapper {
  width: 70%;
  /* height: 48em; */
  /* border: 5px red solid; */
}

.main-body {
  width: 60%;
  height: 50em;
  /* background-color: #c300ff; */
}

.vercel {
  /* background: linear-gradient(to right, #c300ff, #493240); */
  /* background-size: 200% auto;
  background-clip: text;
  -text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
</style>
