

<template >

  <div class="text-5xl font-semibold tracking-tight pl-28 mt-10">
    Personal Information
  </div>


  <form action="" class="pl-28 mt-10">

    <!-- FULLNAME  -->
    <div class="flex">

      <div class="flex flex-col">
        <label for="">First Name</label>
        <input type="text" class=" bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;" v-model="firstName">
      </div>


      <div class="flex flex-col pl-16">
        <label for="">Last Name</label>
        <input type="text" class="bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;" v-model="lastName">
      </div>

    </div>


    <div class="flex">
      <!-- LOCATION SELECTOR  -->
      <div class="col-span-6 sm:col-span-3 mt-10" style="width:300px; height: 50px;">

        <label for="country" class="block text-sm font-medium text-gray-700 mt-2">Country</label>
        <select id="country" name="country" autocomplete="country-name"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          v-model="selectedLocation">

          <option value="New York">New York</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Istanbul">Istanbul</option>
          <option value="Paris">Paris</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Thailand">Thailand</option>
          <option value=""> {{ selectedLocation }}</option>

        </select>
      </div>

      <!-- Number of rooms  -->

      <div class="flex flex-col pl-16 mt-10">
        <label for="">Enter number of rooms</label>
        <!-- <p>{{ NumberOfRooms }}</p> -->
        <input type="number" class="bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;" v-model="NumberOfRooms">
      </div>
    </div>


    <div class="flex">
      <!-- PACKAGE OPTION  -->
      <div class="col-span-6 sm:col-span-3 mt-10 " style="width:300px; height: 50px;">

        <label for="country" class="block text-sm font-medium text-gray-700 mt-2">Package Option at {{
          amenities
        }}</label>
        <select id="country" name="country" autocomplete="country-name"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" v-model="amenities">

          <option value="none">None</option>
          <option value="breakfast">Breakfast included</option>
          <option value="breakfast + dinner">Breakfast + Dinner</option>
          <option value="breakfast, dinner + unlimited drinks">Breakfast, Dinner + Unlimited Drinks</option>
        </select>


      </div>

      <!-- room type + rate -->
      <div class="col-span-6 sm:col-span-3 mt-10 pl-16">

        <label for="country" class="block text-sm font-medium text-gray-700 mt-2">Room type (per night) {{ roomRate }}</label>
        <select id="country" name="country" autocomplete="country-name"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          style="width:300px" v-model="roomRate">

          <option value="50">Single Bedroom 50$</option>
          <option value="75">Double Bedroom 75$</option>
          <option value="125">Suite 125$</option>
          <option value="250">Penthouse 250$</option>
        </select>


      </div>
    </div>


    <div class="text-sm mt-16">
      <button class="font-medium px-8 py-3 bg-black text-white" @click="postToApi()">Browse</button>
    </div>
    


  </form>
</template>



<script>
import axios from 'axios'


export default {
  data() {
    return {
      firstName:'',
      lastName:'',
      selectedLocation: '',
      NumberOfRooms: 0,
      amenities:'',
      roomRate: 0,
    }
  },


  methods: {
    
    postToApi() {
      axios.post('http://localhost:8080/api/v1/hotel', {

        "name": this.firstName + " " + this.lastName,
        "location": this.selectedLocation,
        "numberOfRooms": this.NumberOfRooms,
        "description": "",
        "amenities": this.amenities,
        "roomRate": this.roomRate
      
        }
      )
    },

    validateNumberOfRooms(e){
      this.NumberOfRooms = parseInt(e.target.value)
      console.log(NumberOfRooms)
    }
  }
}


</script>