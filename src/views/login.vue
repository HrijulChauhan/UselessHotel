<template>
  <body class="h-screen w-screen bg-slate-50">
    <span class="mt-10 flex justify-center text-lg font-medium text-gray-900"> Login to your account </span>
    <div class="flex justify-center">
      <div class="mt-2">
        <input type="text" name="email" id="" v-model="email" placeholder="Email address" class="mt-0 block w-96 rounded-md rounded-b-none border-[0.5px] border-gray-500 py-2 pl-3 text-xs outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        <input type="text" name="password" id="" v-model="password" placeholder="Password" class="mt-0 block w-96 rounded-md rounded-t-none border-[0.5px] border-t-0 border-gray-500 py-2 pl-3 text-xs outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
      </div>
    </div>

    <button @click="loginFunctionality" type="" class="m-auto mt-5 flex justify-center rounded-md bg-indigo-600 px-10 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
    <button @click="session" type="" class="m-auto mt-5 flex justify-center rounded-md bg-indigo-600 px-10 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get session</button>
    <button @click="logoutUser" type="" class="m-auto mt-5 flex justify-center rounded-md bg-indigo-600 px-10 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  </body>
</template>

<script setup>
import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const userSession = ref(null);

async function loginFunctionality() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
}

async function session() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    console.log(error.message);
  } else {
    userSession.value = data;
    console.log(userSession.value.session.user.email);
    console.log(userSession.value.session.user.role);
  }
};

async function logoutUser(){
    const {error} = await supabase.auth.signOut();
    console.log("in logout")
}

</script>
