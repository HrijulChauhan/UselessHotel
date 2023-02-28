<template>
    <navbar>

        <template #first_nav>
            <p class="px-3 hover:text-black">Home</p>
        </template>

        <template #second_nav>
            <p class="px-3 hover:text-black">About Us</p>
        </template>

        <template #third_nav>
            <p class="px-3 hover:text-black">Contact</p>
        </template>

        <template #fourth_nav>
            <p class="px-3 hover:text-black">Browse</p>
        </template>



        <template #first_hb>
            <a href="#" class="pb-5 text-blue-600 mt-36 animate-1_5">Home</a>
        </template>

        <template #second_hb>
            <a href="#" class="pb-5 text-black animate-1_25">Contact Us</a>
        </template>

        <template #third_hb>
            <a href="#" class="pb-5 text-black animate-1">Browse</a>
        </template>

    </navbar>




    <div class="m-auto my-10 text-3xl font-semibold tracking-tighter text-center text-gray-800"> Browse Hotels</div>

    <div class="flex justify-center">
        <div class="px-10" v-for="hotel in hotels">

            <router-link :to="{ name: 'productInformation', params: { id: hotel.id }}">
                <div class="product-card">
                    <img :src="hotel.src" alt="Image">
                </div>
            </router-link>
            <div class="mt-2 text-base font-medium tracking-normal text-gray-900">
                ${{ hotel.price }} 
            </div>
            <div class="-mt-1 text-base font-light tracking-tighter text-gray-500">
                {{ hotel.name }} 
            </div>
        </div>
    </div>
    <bottomFooter />
</template>

<style scoped>
img {
    width: 100%;
    max-height: 100%;
}

.product-card {
    width: 380px;
    height: 380px;
}


@media (min-width: 1024px) {
    .product-card {
        width: 700px;
        height: 580px;
    }
}

@media (min-width: 1536px) {
    .product-card {
        width: 380px;
        height: 400px;
    }
}
</style>

<script>
import navbar from './Navbar.vue'
import bottomFooter from './Footer.vue'

export default {
    components: {
        navbar,
        bottomFooter
    },
    data() {
        return {
            images: [
                "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg",
                "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg",
                "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg"
            ],
            hotels: [
                { name: "bruh", id: 1, price: 1232, src: "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg" },
                { name: "bruh2", id: 2, price: 123, src: "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg" },
                { name: "bruh3", id: 3, price: 13, src: "/images/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg" }
            ]
        }
    }
}
</script>
