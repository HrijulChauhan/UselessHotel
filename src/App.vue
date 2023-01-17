<script setup>
</script>

<template>

  <div class="grandparent-wrapper pb-96">
    <!-- NAVBAR -->
    <div class="navbar-wrap flex justify-center">
      <div class="navbar flex justify-between">

        <div class="logo text-3xl pt-8 text-black ml-1">
          GB
        </div>

        <div class="links text-xs flex pt-8  items-center text-gray-400 tracking-tight ">
          <a class="mr-0 px-3  hover:text-black" href="">About Us</a>
          <a class="mr-0 px-3 hover:text-black" href="">Contact Us</a>
          <a class="mr-0 px-3 hover:text-black" href="">Testimonials</a>
          <a class="px-3 hover:text-black" href="">Locations</a>
        </div>

        <div class="mr-0 pt-10 text-sm text-black">
          <!-- <button class="log-in px-7 py-2">Log in</button> -->
          <div class="log-in">Log in</div>
        </div>

      </div>
    </div>

    <!-- HERO SECTION  -->
    <div class="parent-wrapper flex">
      <div class="wrapper flex  flex-col">

        <div class="hero-text text-black text-left text-9xl mt-28">
          <!-- <span class="visit text-5xl">Visit</span> --> Grand<br>
          <span class="text-black vercel"> Budapest </span>
        </div>

        <div class="sub-text text-left text-gray-400 ml-2 mt-5 text-base tracking-tight">
          Experience luxury and elegance at the <span class="text-green-600 font-medium"> Grand Budapest Hotel </span>
          <br>
          a royal sanctuary for the discerning traveler
        </div>

        <div class="pt-8 text-xs  text-left ml-2">
          <button class="discover px-8 py-3">Discover</button>
        </div>
      </div>


      <div class="hero-picture "></div>
    </div>
  
  </div>


  <!-- BODY SECTION  -->
  <div class="promo-wrap flex justify-center -mt-5">
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
  width: 70%;
  /* height: 2em; */
  /* border: 5px blue solid; */
}

.logo {
  font-family: "GroteskBold";
}

.links {
  font-family: 'Inter';
  font-weight: 400;
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
