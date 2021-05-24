<template>
  <div>
    <Navigation />
    <section class="feature_44 bg-light pt-100 text-center text-md-left">
	<div class="container px-xl-0">
		<div class="row mx-auto">
		<h1 class="text-center m-5 mx-auto">Instructions</h1>



		</div>

				<div class="row m-5">
		
	
		</div>
		
		
		<div class="row mx-auto">

		<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto ">

			<img src="@/assets/login.jpeg" class="img-fluid"/>
			<div class="row mx-auto">
			<p class="text-center mx-auto m-5"> Sign In</p>

			</div>

			</div>

		</div>


	<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto">

			<img src="@/assets/register.jpeg" class="img-fluid" />
			<div class="row mx-auto">
			<p class="text-center mx-auto m-5"> Register</p>
	
				</div>

			</div>

		</div>

		<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto">

			<img src="@/assets/ClientFeed.jpeg" class="img-fluid" />
			<div class="row mx-auto">
				<p class="text-center mx-auto m-5"> Clients posts</p>
	
				</div>

			</div>

		</div>

				<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto ">

			<img src="@/assets/DriverPage.jpeg" class="img-fluid" />
			<div class="row mx-auto">
				<p class="text-center mx-auto m-5"> Drivers posts</p>
	
				</div>

			</div>

		</div>
				<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto ">

			<img src="@/assets/profile.jpeg" class="img-fluid" />
			<div class="row mx-auto">
				<p class="text-center mx-auto m-5"> Create a post</p>
	
				</div>

			</div>

		</div>
				<div class="col m-5 mx-auto">

			<div class="img-instructions m-5 mx-auto">

			<img src="@/assets/detail.jpeg" class="img-fluid" />

			</div>

		</div> 	


		</div>


	</div>
		
		

</section>
<section class="content_31 bg-warning pt-100 pb-70 text-center color-white mt-5">
	<div class="container px-xl-0">
		<div class="row justify-content-center">
			<h2 class="small col-lg-8" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">Please click the foloowing button to register</h2>

		</div>
					<div class="row mx-auto m-5">
				<button href="loging.html" class=" btn-light mx-auto">Sign Up</button>
			
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

export default defineComponent({
  name: "Landing",
  components: {
    Navigation
  }
});
</script>

<style>

</style>