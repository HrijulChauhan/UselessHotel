<template>
	<div class="modal-overlay" @click="closeModal">
		<div class="modal" @click.stop>

			<div class="text-center flex flex-col items-center">
				<h3 class="text-blue-800 font-semibold text-lg">Financial Solutions</h3>
					
				<slot name="form">

				</slot>

			</div>
			<button class="discover px-8 py-3 mt-4" @click = "showLogin = false">Close</button>
		
		</div>
	</div>
</template>
  
  
<style>
.modal-overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	background-color: rgba(68, 68, 68, 0.473);
}

.modal {
	text-align: center;
	background-color: white;
	height: 500px;
	width: 600px;
	margin-top: 10%;
	padding: 60px 0;
	border-radius: 20px;
}

.text {
	width: 400px;
	margin: auto;
}
</style>


<script>
export default {
  data() {
    return {
      showLogin: true
    };
  },
  methods: {
    closeModal(event) {
      if (event.target.classList.contains("modal-overlay")) {
        this.showLogin = false;
      }
    }
  }
};
</script>