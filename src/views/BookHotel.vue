<template>
  <div class="m-auto mt-10 w-4/5">
    <section>
      <!-- using the SPAN tag for some reason doesnt apply the margin top -->
      <router-link to="/">
        <p class="mt-1 mb-6 text-center text-2xl font-medium tracking-tight text-gray-900">Browse Hotels</p>
      </router-link>
      <section class="flex justify-between">
        <div>
          <label for="" class="mb-1 block text-sm font-medium text-gray-900">Filter By</label>
          <select
            name="Filter By"
            id=""
            class="mb-5 rounded-sm bg-slate-200 px-4 py-1 text-sm shadow-sm outline-none ring-1 ring-slate-300"
            v-model="selectedOption"
            @change="FilterByPrice(selectedOption)"
          >
            <option disabled value="" class="text-sm">Select one</option>
            <option value="ascending" class="text-sm text-slate-900">Price (Ascending)</option>
            <option value="descending" class="text-sm text-slate-900">Price (Descending)</option>
          </select>
        </div>

        <img
          src="https://imgur.com/FL1hP1U.png"
          alt="your-image-description"
          class="mt-3 h-10 w-10 rounded-full"
          @click="this, $router.push('/setting')"
        />
      </section>
    </section>

    <div class="justify-between 2xl:flex">
      <div v-for="hotel in hotels.slice(0, 3)" class="">
        <router-link :to="{ name: 'productInformation', params: { id: hotel.id } }">
          <img
            :src="hotel.src"
            alt="Image"
            class="mt-5 h-96 w-full rounded object-cover object-center shadow-2xl duration-500 hover:shadow-green-200 2xl:w-96"
          />
        </router-link>

        <div class="mt-1 text-sm font-medium tracking-normal text-gray-900">${{ hotel.price }}</div>
        <div class="-mt-1 text-sm font-light tracking-tighter text-slate-400">{{ hotel.name }}</div>
      </div>
    </div>
  </div>

  <div class="m-auto mt-10 w-4/5">
    <span class="block justify-between 2xl:flex">
      <div v-for="hotel in hotels.slice(3, 6)">
        <router-link :to="{ name: 'productInformation', params: { id: hotel.id } }">
          <img
            :src="hotel.src"
            alt="Image"
            class="mt-5 h-96 w-full rounded object-cover shadow-2xl duration-500 hover:shadow-green-200 2xl:w-96"
          />
        </router-link>

        <div class="mt-1 text-sm font-medium tracking-normal text-gray-900">${{ hotel.price }}</div>
        <div class="-mt-1 text-sm font-light tracking-tighter text-slate-400">{{ hotel.name }}</div>
      </div>
    </span>
  </div>

  <bottomFooter />
</template>

<script>
import navbar from "../components/Navbar.vue";
import bottomFooter from "../components/Footer.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    navbar,
    bottomFooter,
  },
  data() {
    return {
      selectedOption: "",
      hotels: [
        {
          name: "Paris, France",
          id: 1,
          price: 125,
          src: "https://imgur.com/xJKJhL7.jpg",
        },
        {
          name: "Mumbai, India",
          id: 2,
          price: 165,
          src: "https://imgur.com/MM1hdEK.jpg",
        },
        {
          name: "Turkey, Istanbul",
          id: 3,
          price: 43,
          src: "https://imgur.com/aTl6fwR.jpg",
        },
        {
          name: "Barcelona, Spain",
          id: 4,
          price: 200,
          src: "https://imgur.com/f6MQ9si.jpg",
        },
        {
          name: "Naples, Italy",
          id: 5,
          price: 305,
          src: "https://imgur.com/Zu0TlwC.jpg",
        },
        {
          name: "Sydney, Australia",
          id: 6,
          price: 240,
          src: "https://imgur.com/ZJgb6c5.jpg",
        },
      ],
    };
  },
  methods: {
    FilterByPrice(option) {
      if (option == "descending") {
        this.hotels.sort((a, b) => b.price - a.price);
      } else {
        this.hotels.sort((a, b) => a.price - b.price);
      }
    },

    FilterByPrice2(event) {
      console.log(event);
    },

    greet() {
      console.log("bruh");
    },

    goToSettings() {
      this.$router.push("/setting");
    },
  },
};
</script>

<style></style>
