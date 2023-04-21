<template>
  <body class="h-screen w-screen bg-slate-50">
    <span class="pt-20 flex justify-center text-3xl tracking-tight font-semibold text-gray-900"> Login to your account </span>
    <div class="flex justify-center">
      <div class="mt-16">
        <input type="text" name="email" id="" v-model="email" placeholder="Email address" class="mt-0 block w-96 rounded-md rounded-b-none border-[0.5px] border-gray-400 py-2 pl-3 text-base outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        <input type="password" name="password" id="" v-model="password" placeholder="Password" class="mt-0 block w-96 rounded-md rounded-t-none border-[0.5px] border-t-0 border-gray-400 py-2 pl-3 text-base outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
      </div>
    </div>

    <button @click="loginFunctionality" type="" class="button-10 m-auto mt-5">Login</button>
  
  
    <popup message="Invalid Credentials" v-if="mistake" @click="mistake = !mistake"/>
  </body>


</template>

<script setup>
import popup from "../components/NotificationPopup.vue";
import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const mistake = ref(false)
const userSession = ref(null);
const router = useRouter();

async function loginFunctionality() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    mistake.value = true;
    console.log(error.message);
  } else {
    console.log(data);
    router.push('/book')
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
