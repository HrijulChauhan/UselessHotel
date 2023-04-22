<script setup>
import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";

const userSession = ref("");
const email = ref("Not logged in");
const auth = ref("Not authenticated");
const booking = ref([]);
const loggedIn = ref(false);

async function session() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log(error.message);
  } else {
    userSession.value = data;
    if (userSession[0]) {
      loggedIn.value = true;
      email.value = userSession.value.session.user.email;
      auth.value = userSession.value.session.user.role;
    }
  }
}

async function getBooking() {
  if (loggedIn) {
    const { data, error } = await supabase.from("booking").select().eq("email", email.value);
    if (error) {
      console.log(error);
    } else {
      booking.value = data;
    }
  }
}

async function fetch() {
  await session();
  await getBooking();
}

fetch();

async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
}
</script>


<template>
  <body class="h-screen w-screen bg-slate-50">

    <span class="flex justify-center pt-20 text-3xl font-semibold tracking-tight text-gray-900"> Account </span>
    <div class="mt-5 text-center text-base">Username : {{ email }}</div>
    <div class="mt-0 text-center text-base">status : {{ auth }}</div>

    <table class="m-auto mt-10 w-1/2 rounded-lg font-normal">
      <tr class="bg-blue-100">
        
        <td class="rounded rounded-r-none text-gray-900 px-10 py-2 font-semibold flex">
          <img src="public\images\icons\name.png" alt="" class="w-5 h-[22px] mx-2"> NAME
        </td>
        
        <td class="px-10 font-semibold text-gray-900">
          <div class="flex"><img src="public\images\icons\mail.png" alt="" class="w-5 h-[22px] mx-2">EMAIL</div>
        </td>

        <td class="px-10 font-semibold text-gray-900">
          <div class="flex"><img src="public\images\icons\pin.png" alt="" class="w-5 h-[22px] mx-2">LOCATION</div>
        </td>

        <td class="px-10 font-semibold text-gray-900">
          <div class="flex"><img src="public\images\icons\home.png" alt="" class="w-5 h-[22px] mx-2">ROOM</div>
        </td>
      </tr>

      <tr class="" v-if="loggedIn">
        <td class="rounded rounded-r-none px-10 py-2" v-if="loggedIn">{{ booking[0].name }}</td>
        <td class="px-10">{{ booking[0].email }}</td>
        <td class="px-10">{{ booking[0].location }}</td>
        <td class="rounded rounded-l-none px-10">{{ booking[0].numberOfRooms }}</td>
      </tr>

      <tr class="" v-if="!loggedIn">
        <td class="rounded rounded-r-none px-10 py-2">-</td>
        <td class="px-10">-</td>
        <td class="px-10">-</td>
        <td class="rounded rounded-l-none px-10">-</td>
      </tr>
    </table>

    <button @click="logoutUser" type="" class="button-10 m-auto mt-5">Logout</button>

</body>
</template>

<style>
.button-10 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
   background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-10:focus {
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}

</style>
