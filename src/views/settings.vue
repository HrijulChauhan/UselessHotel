<script setup>
import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userSession = ref("");
const email = ref("Not logged in");
const auth = ref("Not authenticated");
const booking = ref([]);
const loggedIn = ref(false);
const router = useRouter();

async function session() {
  const { data, error } = await supabase.auth.getSession();
  console.log(data);

  if (error) {
    console.log(error.message);
  } else {
    userSession.value = data;
    console.log(userSession.value.session.user.role);
    if (userSession.value.session.user.role == "authenticated") {
      email.value = userSession.value.session.user.email;
      auth.value = userSession.value.session.user.role;
    }
  }
}

async function getBooking() {
  if (loggedIn) {
    const { data, error } = await supabase.from("booking").select().eq("email", email.value);
    console.log(data);
    if (error) {
      console.log(error);
    } else {
      booking.value = data;
      loggedIn.value = true;
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
  if (error) {
    console.log(error);
  } else{
    router.push('/login')
  }
}

function RouteToLogin() {
  router.push("/login");
}
</script>

<template>
  <body class="h-screen w-screen bg-slate-50">
    <span class="flex justify-center pt-20 text-3xl font-semibold tracking-tight text-gray-900"> Account </span>
    <div class="mt-5 text-center text-base">Username : {{ email }}</div>
    <div class="mt-0 text-center text-base">status : {{ auth }}</div>

    <table class="m-auto mt-10 w-1/2 rounded-lg font-normal">
      <tr class="bg-blue-100">
        <td class="flex justify-center rounded rounded-r-none py-2 font-semibold text-gray-900"><img src="\images\icons\name.png" alt="" class="h-[22px] w-5" /> NAME</td>

        <td class="font-semibold text-gray-900">
          <div class="flex justify-center"><img src="\images\icons\mail.png" alt="" class="h-[22px] w-5" />EMAIL</div>
        </td>

        <td class="font-semibold text-gray-900">
          <div class="flex justify-center"><img src="\images\icons\pin.png" alt="" class="h-[22px] w-5" />LOCATION</div>
        </td>

        <td class="font-semibold text-gray-900">
          <div class="flex justify-center">
            <img src="\images\icons\home.png" alt="" class="h-[22px] w-5" />
            <span> ROOM </span>
          </div>
        </td>
      </tr>

      <tr class="" v-if="loggedIn">
        <td class="rounded rounded-r-none py-2 text-center" v-if="loggedIn">{{ booking[0].name }}</td>
        <td class="text-center">{{ booking[0].email }}</td>
        <td class="text-center">{{ booking[0].location }}</td>
        <td class="rounded rounded-l-none text-center">{{ booking[0].numberOfRooms }}</td>
      </tr>

      <tr class="" v-if="!loggedIn">
        <td class="rounded rounded-r-none px-10 py-2">-</td>
        <td class="px-10">-</td>
        <td class="px-10">-</td>
        <td class="rounded rounded-l-none px-10">-</td>
      </tr>
    </table>

    <div class="m-auto mt-10 flex w-64">
      <button @click="logoutUser" type="" class="button-10Inverse m-auto mt-5">Logout</button>
      <button @click="RouteToLogin" type="" class="button-10 m-auto mt-5">Sign In</button>
    </div>
  </body>
</template>

<style>
.button-10 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 32px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  border: none;

  color: #fff;
  background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
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

.button-10Inverse {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 32px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  border: 0.5px solid #4a86f6;
  box-shadow: inset;

  color: #367af6;
  background: linear-gradient(180deg, #ffffff 0%, #ebebebf7 100%);
  background-origin: border-box;
  box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-10Inverse:focus {
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
</style>
