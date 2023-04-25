<template>
    <body class="h-screen w-screen bg-slate-50">
      
      <div class="relative top-1/2 mx-auto h-1/2 w-1/4 -translate-y-1/2 bg-white shadow-2xl">
        
        <span class="flex justify-center pt-24 text-3xl font-semibold tracking-tight text-gray-900"> Register Account</span>
        
        <div class="flex flex-col items-center justify-center">
          <div class="mt-10">
            <span class="text-sm font-semibold text-gray-600">Email Address </span>
            <input type="text" name="email" id="" v-model="email" placeholder="" class="mt-2 mb-5 block w-96 rounded border-[0.5px] border-gray-400 py-2 pl-3 text-base outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
            <span class="text-sm font-semibold text-gray-600">Password </span>
            <input type="password" name="password" id="" v-model="password" placeholder="" class="mt-2 block w-96 rounded border-[0.5px] border-gray-400 py-2 pl-3 text-base outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
            <div class="pt-7 text-sm font-light">Got an account? <a href="javascript:void(0)"><span class="text-gray-600 font-semibold" @click="RouteToLogin"> Log-In</span></a> instead</div>
          </div>
          <button @click="loginFunctionality" type="" class="mt-2 w-96 rounded bg-indigo-500 py-3 font-semibold text-white">Registers</button>
        </div>
  
      </div>
  
      <popup message="Invalid Credentials" v-if="mistake" @click="mistake = !mistake" />
    </body>
  </template>
  
  <script setup>
  import popup from "../components/NotificationPopup.vue";
  import { supabase } from "../lib/supabaseClient";
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const email = ref("");
  const password = ref("");
  const mistake = ref(false);
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
      router.push("/book");
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
  }
  
  async function logoutUser() {
    const { error } = await supabase.auth.signOut();
    console.log("in logout");
  }
  
  function RouteToLogin(){
    router.push('/login')
  }
  </script>
  
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
  </style>
  