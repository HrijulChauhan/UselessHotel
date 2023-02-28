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

    <!-- ROW 1 -->
    <section class="flex flex-col items-center justify-center mt-5 2xl:flex-row">

        <span class="mx-16 ">

            <router-link to="{name: 'product'}">
                <div class="product-card">
                    <img src="../assets/ProductPhotos/dose-juice-gvqjjYOlQHQ-unsplash.jpg" alt="Product Photo"
                        class="object-cover rounded-lg">
                </div>
            </router-link>

            <p class="mt-2 text-base font-normal text-gray-900"> $120 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> New York, USA</p>
        </span>

        <span class="mx-16 mt-10 2xl:mt-0">
            <div class="product-card ">
                <img src="../assets/ProductPhotos/usama-akram-kP6knT7tjn4-unsplash.jpg" alt=""
                    class="object-cover rounded-lg">
            </div>

            <p class="mt-3 text-base font-normal text-gray-900"> $75 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> Paris, France</p>
        </span>

        <span class="mx-16 mt-10 2xl:mt-0">

            <div class="product-card ">
                <img src="../assets/ProductPhotos/mk-2-XoiBIpYkPJA-unsplash.jpg" alt="" class="object-cover rounded-lg">
            </div>

            <p class="mt-2 text-base font-normal text-gray-900"> $50 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> New Delhi, India</p>
        </span>

    </section>

    <!-- ROW 2 -->
    <section class="flex flex-col items-center justify-center mt-10 2xl:flex-row">

        <span class="mx-16 ">
            <div class="product-card">
                <img src="../assets/ProductPhotos/janno-partna-Hvfeg0fU5vE-unsplash.jpg" alt="Product Photo"
                    class="object-cover rounded-lg">
            </div>
            <p class="mt-2 text-base font-normal text-gray-900"> $12 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> Turkey, Istanbul</p>
        </span>

        <span class="mx-16 mt-10 2xl:mt-0">

            <div class="bg-white product-card ">
                <img src="../assets/ProductPhotos/colin-lloyd-DQcu4QOdj5c-unsplash.jpg" alt=""
                    class="object-cover rounded-lg">
            </div>

            <p class="mt-3 text-base font-normal text-gray-900"> $105 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> South London, UK</p>

        </span>

        <span class="mx-16 mt-10 2xl:mt-0">

            <div class="product-card ">
                <img src="../assets/ProductPhotos/kadarius-seegars-0FHNXqyqgg4-unsplash.jpg" alt=""
                    class="object-cover rounded-lg">
            </div>

            <p class="mt-2 text-base font-normal text-gray-900"> $55 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> Mumbai, India</p>
        </span>

    </section>

    <!-- ROW 3 -->
    <section class="flex flex-col items-center justify-center mt-10 2xl:flex-row">

        <span class="mx-16 ">
            <div class="product-card">
                <img src="../assets/ProductPhotos/dose-juice-gvqjjYOlQHQ-unsplash.jpg" alt="Product Photo"
                    class="object-cover rounded-lg">
            </div>
            <p class="mt-2 text-base font-normal text-gray-900"> $120 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> New York, USA</p>
        </span>

        <span class="mx-16 mt-10 2xl:mt-0">

            <div class="bg-white product-card ">
                <img src="../assets/ProductPhotos/usama-akram-kP6knT7tjn4-unsplash.jpg" alt=""
                    class="object-cover rounded-lg">
            </div>

            <p class="mt-3 text-base font-normal text-gray-900"> $75 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> Paris, France</p>

        </span>

        <span class="mx-16 mt-10 2xl:mt-0">

            <div class="product-card ">
                <img src="../assets/ProductPhotos/mk-2-XoiBIpYkPJA-unsplash.jpg" alt="" class="object-cover rounded-lg">
            </div>

            <p class="mt-2 text-base font-normal text-gray-900"> $50 </p>
            <p class="-mt-1 text-base font-light tracking-tighter text-gray-500"> New Delhi, India</p>
        </span>

    </section>

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
    data(){
        return{
            id:3,
        }
    }
}
</script>
