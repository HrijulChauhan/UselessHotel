<template>
  <div class="background--custom">
    <canvas id="canvas" />
    <div class="vercel mt-96 text-9xl mix-blend-difference">Grand Budapest</div>
  </div>
  <!-- <div class="bg-red-400">
    <div class="vercel text-center text-9xl tracking-tighter mix-blend-exclusion">grand budapest</div>
  </div> -->
</template>

<script>
import { Gradient } from "./minigl.js";

export default {
  mounted() {
    const gradient = new Gradient();
    gradient.initGradient("#canvas");
  },
};
</script>

<style scoped>
.vercel {
  background-image: linear-gradient(90deg, #ffffff, #000000);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
.background--custom {
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: -1;
  top: 0;
  left: 0;
}

canvas#canvas {
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 45%;
  transform: rotate(90deg) scale(2) translateY(-28%);
  --gradient-color-1: #fe6860;
  --gradient-color-2: #fe8a71;
  --gradient-color-3: #d9bbae;
  --gradient-color-4: #f3c9bf;
  --gradient-speed: 0.000014;
}
</style>
