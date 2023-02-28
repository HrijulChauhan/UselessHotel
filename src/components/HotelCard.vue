<template>
    <section class="m-auto" style="width: 75%;">
        <div class="flex flex-col items-center justify-center lg:flex-row lg:justify-between">

            <div class="flex-col pt-10">

                <div class="hotel-card">
                    <slot name="first-pic">
                        <img src="../assets/PiggyPink.jpg" alt="" class="object-cover" style="width:100%; height:100%">
                    </slot>
                </div>

                <div class="mt-3 text-base font-normal tracking-wide text-blue-800 ">
                    <slot name="first-location"> New York, USA </slot>
                </div>
                <div class="-mt-0 text-xl font-normal tracking-tight text-gray-800 ">
                    <slot name="first-price"> $160 base per night </slot>
                </div>

                <button class="py-2 mt-4 font-medium text-white bg-black rounded-md px-7">Book</button>

            </div>

            <div class="flex-col pt-10">

                <div class="hotel-card">
                    <slot name="second-pic">
                        <img src="../assets/PiggyPink.jpg" alt="" class="object-cover" style="width:100%; height:100%">
                    </slot>
                </div>

                <div class="mt-3 text-base font-normal tracking-wide text-blue-800 ">
                    <slot name="second-location"> Istanbul, Turkey </slot>
                </div>

                <div class="-mt-0 text-xl font-normal tracking-tight text-gray-800 ">
                    <slot name="second-price"> $50 base per night </slot>
                </div>

                <button class="py-2 mt-4 font-medium text-white bg-black rounded-md px-7">Book</button>

            </div>


            <div class="flex-col pt-10">

                <div class="hotel-card">
                    <slot name="third-pic">
                        <img src="../assets/PiggyPink.jpg" alt="" class="object-cover" style="width:100%; height:100%">
                    </slot>
                </div>

                <div class="mt-3 text-base font-normal tracking-wide text-blue-800 ">
                    <slot name="third-location"> Paris, France </slot>
                </div>
                <div class="-mt-0 text-xl font-normal tracking-tight text-black ">
                    <slot name="third-price"> $215 base per night </slot>
                </div>

                <button class="py-2 mt-4 font-medium text-white bg-black rounded-md px-7">Book</button>

            </div>

        </div>



    </section>
</template>


<script>

</script>

<style scoped>
.hotel-card {
    width: 400px;
    height: 375px;
}

@media (max-width: 1640px) {
    .hotel-card {
        width: 350px;
        height: 300px;
    }
}


@media (max-width: 1450px) {
    .hotel-card {
        width: 300px;
        height: 250px;
    }
}

@media (max-width: 1250px) {
    .hotel-card {
        width: 275px;
        height: 250px;
    }
}

@media (max-width: 1150px) {
    .hotel-card {
        width: 250px;
        height: 225px;
    }
}

@media (max-width: 1024px) {
    .hotel-card {
        width: 400px;
        height: 350px;
    }
}
</style>