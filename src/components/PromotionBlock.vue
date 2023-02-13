<template>

    <div class="flex justify-center animate-1_5">
        <div
            class="items-center mt-24 text-pink-800 promotion-block p-14 rounded-xl sm:text-white">

            <div class="text-xl text-center GBFont 2xl:text-3xl lg:text-left">
                <slot name="title"> Dream location quote </slot>
            </div>
            
            <div class="">
                <article
                    class="pt-2 text-sm font-normal text-center text-pink-900 md:text-base lg:text-left lg:text-lg 2xl:text-xl sm:text-gray-400">
                    <slot name="body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eos dolores
                        nisi dolore voluptate reiciendis, laborum soluta corporis consequuntur pariatur,
                        rerum vero! Nemo ad eius accusamus eaque deleniti quae ipsa!
                    </slot>
                </article>
            </div>

            <ul class="flex justify-center mt-4 2xl:text-left lg:justify-start ">
                <li class="pt-5 text-base font-normal see-more"> See more </li>
                <li class="pt-5 pl-2 text-base right-arrow"> → </li>
            </ul>

        </div>
    </div>

</template>

<script>
</script>

<style scoped>
.promotion-block {
    width: 74%;
    background-image: url(../assets/findLocation.webp);
    background-size: 100%;
    background-position: 0px -400px;
}

/* @media (max-width: 400px) {

    .promotion-block {
        background-image: url(../assets/findLocationResp.png);
        background-size: 100%;
        text-align: center;
    }
} */

@media (max-width: 640px){
    .promotion-block{
        background: url(../assets/PiggyPink.jpg);
        background-position: 0px 0px;
    }
}
</style>