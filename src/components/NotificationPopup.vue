<template>
  <div class="ReverseAnimate-1 fixed right-10 bottom-10 border border-red-600 bg-red-100 px-10 py-3 text-sm text-red-600" >
    <span class="font-bold">Uh Oh!</span> {{ message }}
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg class="h-5 w-4 fill-current text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="mistake = false">
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
      </svg>
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
    message: String,
    mistake: Boolean,
})

const show = ref(true)
// const message = ref("Please Enter valid details");
</script>
