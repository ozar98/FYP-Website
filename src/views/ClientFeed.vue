<template>
  <div>
    <Navigation/>
    <div class="row mx-auto m-3">

<div class="container">
    <div class="card m-3" v-for="item in clientFeed" :key="item.id">
  		<div class="card-body">
				<div class="row m-2 ">
					<div class="col ">
						<h5 class="card-title"><img src="@/assets/location.png" class="location m-1" />Initial Location</h5>
						<p class="card-text">{{item.destinationFrom}}</p>
					</div>

					<div class="col">
						<h5 class="card-title">Departure Date</h5>
						<p class="card-text">{{item.departureDate}}</p>
					</div>
				</div>
			<div class="row m-2">
				<div class="col ">
					<h5 class="card-title"><img src="@/assets/person.png"/>Final Location</h5>
					<p class="card-text">{{item.destinationTo}}</p>
				</div>
				<div class="col">
					<h5 class="card-title">Posted on</h5>
					<p class="card-text">{{item.createdAt}}</p>
				</div>
			</div>
			<div class="row m-2">
				<div class="col ">
					<h5 class="card-title">Car Model</h5>
					<p class="card-text">{{item.carModel}}</p>
				</div>
				<div class="col">
					<h5 class="card-title">Pricing</h5>
					<p class="card-text">{{item.pricing}} Somoni</p>
				</div>
				<div class="col">
					<h5 class="card-title">Number of Seats</h5>
					<p class="card-text">{{item.numberOfSeats}}</p>
				</div>
			</div>
			<div class="row m-2">
				<div class="col ">
					<h5 class="card-title">Name</h5>
					<p class="card-text">{{item.firstName}} {{item.lastName}}</p>
				</div>
				<div class="col">
					<h5 class="card-title">Mobile Number</h5>
					<p class="card-text">{{item.mobileNumber}}</p>
				</div>
			</div>
  </div>
</div>








</div>


	</div>





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
import Modal from '../components/Modal';
import axios from 'axios';

export default defineComponent({
  components: {
		Modal,
    Navigation
  },
	data(){
    return {
      pagination: 0,
      end: false,
      clientFeed: [],
			showModal: [],
    };
  },
  async created(){
    while(!this.end){
      await this.loadData(this.pagination);
      this.pagination++;
    }
  },
  methods: {
    async loadData(pagination){
      const token = localStorage.getItem("token");
      await axios.get(`https://fyp-new-backend.herokuapp.com/api/v1/client/pagination/${pagination}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.data.data)
      .then(async(data) => {
        if (data.length != 10) this.end = true;
				data.map((oneFeed) => {
					oneFeed.departureDate = oneFeed.departureDate.slice(0,10);
					oneFeed.createdAt = oneFeed.createdAt.slice(0,10);
				});
				for (let i = 0; i < data.length; i++){
					await axios.post(`https://fyp-new-backend.herokuapp.com/api/v1/user/getUser`, { id: data[i].driverId } , {
						headers: {
							Authorization: `Bearer ${token}`
						}
					})
						.then(res => res.data.data)
						.then(user => {
							data[i].firstName = user.firstName;
							data[i].lastName = user.lastName;
							data[i].mobileNumber = user.mobileNumber;
						})

				}
        this.clientFeed = [...this.clientFeed, ...data];
      }).catch(err => {
        console.log(err);
      });

    },
		openDetailInfo(item){
			this.$router.push({
				path: `/clientfeed/detail/${item.id}`,
				params: {id: item.id}
			})
		}
  }
});
</script>

<style>
.btn-green {
    color: white;
    background: rgba(255,163,26);
    border: 1px solid rgba(255,163,26);
    border-radius: 2px;
  }
</style>