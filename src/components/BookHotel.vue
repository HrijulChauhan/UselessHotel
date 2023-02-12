<template>



    <navbar>

        <template #first_nav>
            <p class="hover:text-black px-3">Home</p>
        </template>

        <template #second_nav>
            <p class="hover:text-black px-3">About Us</p>
        </template>

        <template #third_nav>
            <p class="hover:text-black px-3">Contact</p>
        </template>

        <template #fourth_nav>
            <p class="hover:text-black px-3">Browse</p>
        </template>




        <template #first_hb>
            <a href="#" class="pb-5 mt-36 animate-1_5 text-blue-600">Home</a>
        </template>

        <template #second_hb>
            <a href="#" class="pb-5 animate-1_5 text-black">Contact Us</a>
        </template>

        <template #third_hb>
            <a href="#" class="pb-5 animate-1_5 text-black">Browse</a>
        </template>

    </navbar>

    <promoblock class="mt-0">

        <template #title>
            Find your dream location
        </template>

        <template #body>
            <div>
                With over 800 locations in 37 countries, you're sure to find what you're looking for. <br>
                Find what you're looking for, and discover the heaven that is The Grand Budapest.
            </div>
        </template>

    </promoblock>



</template>

<style>

</style>

<script>

import navbar from './Navbar.vue'
import promoblock from './PromotionBlock.vue'

export default {

    components: {
        navbar,
        promoblock
    },

    data() {
        return {
            hotels: [
                { HotelLocation: "New York", RoomPrice: 280, Rating: 5 },
                { HotelLocation: "Paris, France", RoomPrice: 500, Rating: 4.5 },
                { HotelLocation: "London, UK", RoomPrice: 220, Rating: 3.5 },
                { HotelLocation: "Tokyo, Japan", RoomPrice: 250, Rating: 5 },
                { HotelLocation: "Sydney, Australia", RoomPrice: 230, Rating: 4 },
                { HotelLocation: "Mumbai, India", RoomPrice: 190, Rating: 4.5 },
                { HotelLocation: "Berlin, Germany", RoomPrice: 210, Rating: 3.5 },
                { HotelLocation: "Mexico City, Mexico", RoomPrice: 160, Rating: 4 }
            ]
        };
    },
    methods: {
        sort(order) {
            if (order === "asc") {
                this.hotels.sort((a, b) => a.RoomPrice - b.RoomPrice);
            } else {
                this.hotels.sort((a, b) => b.RoomPrice - a.RoomPrice);
            }
        }
    }
};
</script>
