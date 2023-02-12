<template>
    <header class="animate-1">

        <nav class="flex justify-around mt-10">
            <div class="GBFont text-3xl text-black">GB</div>

            <div class="nav-links text-sm font-normal flex items-center text-gray-400 tracking-tight ">
                
                <slot name="first_nav"> Home </slot>
                <slot name="second_nav"> About Us </slot>
                <slot name="third_nav"> Contact </slot>
                <slot name="fourth_nav"> Browse </slot>
            
            </div>

            <div class="Log text-lg font-medium text-black"> Log in </div>
        </nav>

        <nav class="animate-1">
            <div class="hamburger space-y-2 ml-10 z-20" @click="showOptions = !showOptions">
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-5 h-0.5 bg-gray-600"></span>
            </div>
        </nav>

    </header>


    <nav class="option text-5xl pl-10 pt-10 flex flex-col bg-white font-light tracking-tight"
        style="position:fixed; top: 0; left: 0;" v-if="showOptions">

        <span @click="showOptions = !showOptions">
            <img src="../assets/close.svg" width="20" height="20" alt="">
        </span>


        <slot name="first_hb"> Home </slot>
        <slot name="second_hb"> About Us </slot>
        <slot name="third_hb"> Contact </slot>

    </nav>

</template>


<script>

export default {

    data() {
        return {
            showOptions: false,
        }
    },

}

</script>


<style scoped>
.option {
    height: 100%;
    width: 100%;
}

.hamburger {
    display: none;
}

@media (max-width: 600px) {

    .nav-links,
    .GBFont,
    .Log {
        display: none;
    }

    .hamburger {
        display: block;
    }
}
</style>