<script setup>
import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";

const userSession = ref("");
const email = ref("Not logged in");
const auth = ref("Not authenticated");
const booking = ref([]);

async function session() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log(error.message);
  } else {
    userSession.value = data;
    email.value = userSession.value.session.user.email;
    auth.value = userSession.value.session.user.role;
  }
}

async function getBooking() {
  console.log(email);
  const { data, error } = await supabase.from("booking").select().eq("email", email.value);
  if (error) {
    console.log(error);
  } else {
    booking.value = data;
    console.log(data);
  }
}

async function fetch() {
  await session();
  await getBooking();
}

fetch();
</script>
<template>
  <body class="h-screen w-screen bg-slate-50">
    <span class="flex justify-center pt-20 text-3xl font-semibold tracking-tight text-gray-900"> Account </span>
    <div class="mt-5 text-center text-base">Username : {{ email }}</div>
    <div class="mt-0 text-center text-base">status : {{ auth }}</div>

    <table class="m-auto mt-10 rounded-lg font-normal">
      <tr class="bg-slate-200">
        <td class="rounded rounded-r-none px-10 py-2">Name</td>
        <td class="px-10">Email</td>
        <td class="px-10">Booking Location</td>
        <td class="rounded rounded-l-none px-10">Number of Rooms</td>
      </tr>
    </table>

    <button @click="" type="" class="button-10 m-auto mt-5">Logout</button>
  </body>
</template>

<script></script>
