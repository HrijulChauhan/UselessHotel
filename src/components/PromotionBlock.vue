<template>

    <div class="animate-1_5 flex justify-center">
        <div class="GBFont promotion-block mt-24 text-white items-center 2xl:text-4xl md:text-3xl sm:text-xl p-14 2xl:h-72 rounded-xl">

            <slot name="title"> Dream location quote </slot>

            <div class="">
                <article class="font-normal 2xl:text-base md:text-sm sm:text-sm text-gray-400 pt-2 lg:text-left sm:text-center">
                    <slot name="body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eos dolores
                        nisi dolore voluptate reiciendis, laborum soluta corporis consequuntur pariatur,
                        rerum vero! Nemo ad eius accusamus eaque deleniti quae ipsa!
                    </slot>
                </article>
            </div>

            <ul class="flex mt-4">
                <li class="font-normal text-base see-more pt-5"> See more </li>
                <li class="right-arrow pt-5 pl-2 text-base"> → </li>
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

@media (max-width: 400px) {
    
    .promotion-block{
        background-image: url(../assets/findLocationResp.png);
        background-size: 100%;
        text-align: center;
    }
}


</style>