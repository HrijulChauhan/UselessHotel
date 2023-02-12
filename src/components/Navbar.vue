<template>
    <header class="animate-1">

        <nav class="flex justify-around mt-10">
            <div class="GBFont text-3xl text-black">GB</div>

            <div class="nav-links text-sm font-normal flex items-center text-gray-400 tracking-tight ">
                <a href="#" class="hover:text-black px-3"> About Us </a>
                <a href="#" class="hover:text-black px-3"> Contact Us </a>
                <a href="#" class="hover:text-black px-3"> Testimonials </a>
                <a href="#" class="hover:text-black px-3"> Locations </a>
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

    <div class="option text-5xl pl-10 pt-10 flex flex-col bg-white font-medium tracking-tight"
        style="position:fixed; top: 0; left: 0;" v-if="showOptions">

        <span @click="showOptions = !showOptions">
            <img src="../assets/close.svg" width="20" height="20" alt="">
        </span>

        <a href="#" class="pb-5 mt-36 animate-1_5 text-blue-600">Home</a>
        <a href="#" class="pb-5 animate-1_25">About</a>
        <a href="#" class="animate-1">Contact</a>

    </div>

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


<style>
.option {
    height: 100%;
    width: 100%;
}

.test {
    margin-top: 100px;
}

.test2 {
    margin-top: 1000px;
}

.hamburger {
    display: none;
}

@media (max-width: 767px) {

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