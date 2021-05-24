<template>
  <div>
    <Navigation />
    <section class="form_13 bg-light pt-105 pb-100">
		<div class="container px-xl-0">
			<div class="row justify-content-center">
				<div class="col-xl-10">
					<h2 class="mb-55 small text-center" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">New post for driver</h2>
					<form>
						<div class="mb-30 px-65 pt-45 pb-45 radius10 js-form-block" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">							
							<div class="ml-30 color-dark mt-2 text-adaptive">
								Initial location
							</div>
							<div class="ml-30 inner">
								<div class="w-370 block">
									<input 
										type="text" 
										name="iLocation" 
										placeholder="Initial location" 
										class="mt-25 input w-full border-gray focus-action-1 color-heading placeholder-heading"
										v-model="initialLocation" 
									/>	
								</div>
							</div>
							<div class="ml-30 color-dark mt-2 text-adaptive">
								Final location								
							</div>
							<div class="ml-30 inner">
								<div class="w-370 block">
									<input 
										type="text" 
										name="fLocation" 
										placeholder="Final location" 
										class="mt-25 input w-full border-gray focus-action-1 color-heading placeholder-heading" 
										v-model="finalLocation"
									/>	
								</div>
							</div>			
							<div class="ml-30 inner form-group w-600">
								<label for="exampleInputEmail1">Car Pricing</label>
								<div class="row ">
									<div class="col">
										<input 
											type="text" 
											class="mt-25 input w-full border-gray focus-action-1 color-heading placeholder-heading" 
											id="carPricing"  
											placeholder="Car Pricing"
											v-model="pricing" 
										/>
									</div>
									<div class="col">
										<button type="submit" class=" btn-outline-warning mt-4">TJS</button>
									</div>
								</div>
								<div class=" color-dark mt-2 text-adaptive">
									Departure Date
								</div>
								<div class=" inner">
									<div class="w-370 block">
										<div class="row ">
											<div class="col">
												<input type="time" v-model="time" />
												<input type="date" v-model="date" />
											</div>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
								</div>
										<div class="row mx-auto m-3">
											<button href="ClientFeed.html" class=" btn-outline-warning mt-4  mx-auto" @click.prevent="createPost">Create a Post</button>		
										</div>
							</div>
						</div>
					</form>
			</div>
		</div>
	</div>
</section>







<!-- Footer 11 -->

<footer class="footer_11 bg-orange pt-45 pb-45 color-white text-center">
	<div class="container px-xl-0">
		<div class="row align-items-center">
			<div class="mb-20 mb-lg-0 col-lg-3" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">
				<a href="#" class="logo link color-white">Get a ride</a>
			</div>
			
		</div>
		<div data-aos-duration="600" data-aos="fade-down" data-aos-delay="600"> 
			<div class="mt-45 mb-45 hr h-2 bg-white op-3"></div>
		</div>
	</div>
</footer>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "../components/Navigation";
import axios from 'axios';

export default defineComponent({
  components: {
    Navigation
  },
	data(){
		return {
			initialLocation: "",
			finalLocation: "",
			pricing: 0,
			time: null,
			date: null, 
		}
	},
	methods: {
		async createPost(){
			const departureDate = (new Date(`${this.date} ${this.time}`)).getTime();
			const token = localStorage.getItem("token");

			const requestShape = {
				destinationFrom: this.initialLocation,
				destinationTo: this.finalLocation,
				pricing: this.pricing,
				departureDate: departureDate,
			}
			await axios.post("https://fyp-new-backend.herokuapp.com/api/v1/driver/", requestShape, {
				headers: {
          Authorization: `Bearer ${token}`
        }
			})
				.then(res => res.data)
				.then(data => {
					if (data.success){
						alert("Post has been created");
						this.$router.push({ path: "/driverFeed"});
					} else {
						alert(`${data.message}`);
					}
				}).catch(err => console.log(err));
		}
	}
});
</script>

<style>

</style>