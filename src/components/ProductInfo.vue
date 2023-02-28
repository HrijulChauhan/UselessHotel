<template >
    <div>
        <h2>Hi!</h2>
        the route parameter is
        {{ id }}
    </div>
</template>

<script>

export default{
    data(){
        return{
            id: this.$route.params.id,
        }   
    }
}

</script>