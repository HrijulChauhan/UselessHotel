

<template >

  <div class="text-5xl font-semibold tracking-tight pl-28 mt-10">
    Personal Information
  </div>


  <form action="" class="pl-28 mt-10">

    <!-- FULLNAME  -->
    <div class="flex">

      <div class="flex flex-col">
        <label for="">First Name</label>
        <input type="text" class=" bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;">
      </div>


      <div class="flex flex-col pl-16">
        <label for="">Last Name</label>
        <input type="text" class="bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;">
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
        <input type="text" class="bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;">
      </div>

    </div>


    <div class="flex">
      <!-- PACKAGE OPTION  -->
      <div class="col-span-6 sm:col-span-3 mt-10 " style="width:300px; height: 50px;">

        <label for="country" class="block text-sm font-medium text-gray-700 mt-2">Package Option at {{
          selectedLocation
        }}</label>
        <select id="country" name="country" autocomplete="country-name"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

          <option>None</option>
          <option>Breakfast included</option>
          <option>Breakfast + Dinner</option>
          <option>Breakfast, Dinner + Unlimited Drinks</option>
        </select>


      </div>

      <!-- room type + rate -->
      <div class="col-span-6 sm:col-span-3 mt-10 pl-16">

        <label for="country" class="block text-sm font-medium text-gray-700 mt-2">Room type (per night)</label>
        <select id="country" name="country" autocomplete="country-name"
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          style="width:300px" v-if="selectedLocation == 'Mexico'">

          <option>Single Bedroom 50$</option>
          <option>Double Bedroom 75$</option>
          <option>Suite 125$</option>
          <option>Penthouse 250$</option>
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
      selectedLocation: '',
    }
  },
  methods: {
    postToApi() {
      axios.post('http://localhost:8080/api/v1/hotel', {

        "name": "This is a POST from vue",
        "location": "Budapest",
        "description": " BRUH 5-star hotel in the heart of Budapest",
        "numberOfRooms": 2,
        "amenities": "Spa, fitness center, room service, concierge",
        "roomRate": 150.50
      
        }
      )
    }
  }
}

// console.log(selectedLocation)

</script>