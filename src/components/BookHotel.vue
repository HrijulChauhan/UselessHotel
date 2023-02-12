<template>



    <navbar />

    
    <div class="text-center mb-96">
        this shit random af
    </div>
    <div class="text-center mb-96">
        this the 2nd shit
    </div>

    <div class="text-center mb-96">
        this the 2nd shit
    </div>






</template>

<style>
.navbar {
    width: 90%;
    /* height: 2em; */
    /* border: 5px blue solid; */
}

.logo {
    font-family: "GroteskBold";
}

.links {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 13px;
    transition: ease-in-out;
    animation-duration: 0.5s;
}
</style>

<script>

import navbar from './Navbar.vue'

export default {
    
    components: {
        navbar
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
