<template>
  <body class="h-screen w-screen bg-slate-50">
    <div class="m-auto mb-5 w-3/4 pt-10 text-4xl font-semibold tracking-normal">Reserve your booking</div>

    <section class="m-auto flex w-3/4">
      <figure class="hidden md:block">
        <img src="https://imgur.com/6MmwQV1.jpg" alt="" class="h-[600px] w-[800px] bg-red-300 object-cover" />
        <figcaption class="pt-2 text-xs text-gray-400">View of the Rax and Schneeberg mountains -Johann (Giovanni) Varrone</figcaption>
      </figure>
      <form @submit.prevent class="md:pl-10">
        <!-- Enter Name -->
        <span>
          <label for="Name" class="block text-sm font-medium leading-6 text-gray-900">Enter name</label>

          <input type="text" v-model="name" placeholder="John Doe" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-3 text-sm shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        </span>

        <!-- Enter Email -->
        <span>
          <label for="Email" class="mt-6 block text-sm font-medium leading-6 text-gray-900">Enter email</label>

          <input type="email" v-model="email" placeholder="john.doe@gmail.com" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-3 text-sm shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        </span>

        <!-- Enter location -->
        <span>
          <label for="SelectLocation" class="mt-6 block text-sm font-medium leading-6 text-gray-900">Select Location</label>

          <select name="" v-model="location" @click="checkRoomRate" id="" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600">
            <!-- <option value = "select" disabled selected>Select one location</option> -->
            <option value="New York">New York, USA</option>
            <option value="Turkey">Turkey, Istanbul</option>
            <option value="Mumbai">Mumbai, India</option>
            <option value="Paris">Paris, France</option>
          </select>
        </span>

        <!-- Enter number of rooms -->
        <span>
          <label for="Rooms" class="mt-6 block text-sm font-medium leading-6 text-gray-900">Enter number of rooms</label>

          <input type="number" v-model="numberOfRooms" placeholder="1" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-3 text-sm shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        </span>

        <!-- Enter Entry Date -->
        <span>
          <label for="EntryDate" class="mt-6 block text-sm font-medium leading-6 text-gray-900">Check-in Date</label>
          <input type="date" v-model="entryDate" name="" id="" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-400 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        </span>

        <!-- Enter Exit Date -->
        <span>
          <label for="EntryDate" class="mt-6 block text-sm font-medium leading-6 text-gray-900">Check-out Date</label>

          <input type="date" name="" v-model="exitDate" id="" class="mt-1 block w-80 rounded-sm border-0 py-2 pl-2 text-sm text-gray-400 shadow-sm outline-none ring-1 ring-inset ring-slate-200 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600" />
        </span>

        <button class="discover mt-6 w-32 py-2 text-sm" @click="postToApi">Confirm</button>
      </form>
    </section>
  </body>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      entryDate: "",
      exitDate: "",
      location: "",
      numberOfRooms: 0,
      roomRate: 0.0,
      hotelName: "",
    };
  },

  methods: {
    checkRoomRate() {
      if (this.location === "New York") {
        this.roomRate = 120.0;
        this.hotelName = "The Big Apple";
      } else if (this.location === "Turkey") {
        this.roomRate = 154.4;
        this.hotelName = "TURKEYYY";
      } else if (this.location === "Mumbai") {
        this.roomRate = 154.0;
        this.hotelName = "BOMBAY BOLTE";
      } else if (this.location === "Paris") {
        this.roomRate = 154.0;
        this.hotelName = "Croissant";
      } else {
        this.roomRate = 0.0;
        this.hotelName = "";
      }
    },

    postToApi() {
      axios
        .post("http://localhost:8080/api/v1/booking", {
          name: this.name,
          email: this.email,
          entryDate: this.entryDate,
          exitDate: this.exitDate,
          hotelName: this.hotelName,
          numberOfRooms: this.numberOfRooms,
          roomRate: this.roomRate,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/")
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  computed: {
    entryDateType() {
      return typeof this.roomRate;
    },
  },
};
</script>

<style></style>
