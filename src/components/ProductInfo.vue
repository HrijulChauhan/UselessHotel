<template >
    <div>
        <h2>Hi!</h2>
        the route parameter is
        {{ id }}
        {{ hotelInformation[0].roomRate }}
    </div>

    <button @click="sendPostRequest" class="bg-red-400">
        this is the button
    </button>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            id: this.$route.params.id,
            url: 'http://localhost:8080/api/v1/hotel/' + this.$route.params.id, 
            hotelInformation: null,
        }
    },
    methods: {
        sendPostRequest(){
            axios.get(this.url)
            .then(response => {
                console.log(response.data);
                this.hotelInformation = response.data;
            })
            .catch(error => {
                console.log(error)
            });
        
            console.log(this.url)
        },
    }
}



</script>