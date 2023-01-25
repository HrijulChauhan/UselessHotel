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
          class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">

          <option>New York</option>
          <option>Canada</option>
          <option>Mexico</option>
          <option>Istanbul</option>
          <option>Paris</option>
          <option>New Delhi</option>
          <option>Thailand</option>

        </select>
      </div>

      <!-- Number of rooms  -->

      <div class="flex flex-col pl-16 mt-10">
        <label for="">Enter number of rooms</label>
        <input type="text" class="bg-gray-200 mt-2 rounded-md p-2" style="width:300px; height: 50px;">
      </div>

    </div>


  </form>
</template>