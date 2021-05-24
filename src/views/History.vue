<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row my-3">
        <button class="btn-green mr-3" @click="futureAction">Incoming</button>
        <button class="btn-green" @click="pastAction">Finished</button>
      </div>
      <div v-show="!isClientFeed">
        <div class="card m-3" v-for="item in feed.futureAction" :key="item.id" v-show="showWhich">
          <div class="card-body">
            <div class="row m-2 ">
              <div class="col ">
                <h5 class="card-title"><img src="@/assets/person.png" class="location m-1" />Name</h5>
                <p class="card-text">{{ item.firstName }} {{item.lastName}}</p>
              </div>
              <div class="col ">
                <h5 class="card-title">Pricing</h5>
                <p class="card-text">{{ item.pricing }} Somoni</p>
              </div>
              <div class="col ">
                <h5 class="card-title">Mobile Number</h5>
                <p class="card-text">{{ item.mobileNumber }}</p>
              </div>
            </div>
            <div class="row m-2">
              <div class="col ">
                <h5 class="card-title"><img src="@/assets/person.png"/>Initial Location</h5>
                <p class="card-text">{{item.destinationFrom}}</p>
              </div>
              <div class="col">
                <h5 class="card-title"><img src="@/assets/location.png" class="location m-1"/>Final location</h5>
                <p class="card-text">{{item.destinationTo}}</p>
              </div>
            </div>
            <div class="row m-2">
              <div class="col ">
                <h5 class="card-title">Departure Date</h5>
                <p class="card-text">{{item.departureDate.slice(0, 10)}}</p>
              </div>
              <div class="col">
                <h5 class="card-title">Posted on</h5>
                <p class="card-text">{{item.createdAt.slice(0, 10)}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card m-3" v-for="item in feed.pastAction" :key="item.id" v-show="!showWhich">
          <div class="card-body">
            <div class="row m-2 ">
              <div class="col ">
                <h5 class="card-title"><img src="@/assets/person.png" class="location m-1" />Name</h5>
                <p class="card-text">{{ item.firstName }} {{item.lastName}}</p>
              </div>
              <div class="col ">
                <h5 class="card-title">Pricing</h5>
                <p class="card-text">{{ item.pricing }} Somoni</p>
              </div>
              <div class="col ">
                <h5 class="card-title">Mobile Number</h5>
                <p class="card-text">{{ item.mobileNumber }}</p>
              </div>
            </div>
            <div class="row m-2">
              <div class="col ">
                <h5 class="card-title"><img src="@/assets/person.png"/>Initial Location</h5>
                <p class="card-text">{{item.destinationFrom}}</p>
              </div>
              <div class="col">
                <h5 class="card-title"><img src="@/assets/location.png" class="location m-1"/>Final location</h5>
                <p class="card-text">{{item.destinationTo}}</p>
              </div>
            </div>
            <div class="row m-2">
              <div class="col ">
                <h5 class="card-title">Departure Date</h5>
                <p class="card-text">{{item.departureDate.slice(0, 10)}}</p>
              </div>
              <div class="col">
                <h5 class="card-title">Posted on</h5>
                <p class="card-text">{{item.createdAt.slice(0, 10)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="isClientFeed">
        <div class="card m-3" v-for="item in feed.futureAction" :key="item.id" v-show="showWhich">
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
        <div class="card m-3" v-for="item in feed.pastAction" :key="item.id" v-show="!showWhich">
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
import axios from 'axios';
import Navigation from '../components/Navigation';

export default defineComponent({
  components: {
    Navigation
  },
  data(){
    return {
      showWhich: true,
      feed: Object,
      isClientFeed: false,
    };
  },
  async created(){
    const token = localStorage.getItem("token");
    const currentPath = this.$router.currentRoute.value.path;
    if (currentPath.indexOf("/clientfeed") != -1) this.isClientFeed = true;
    if (this.isClientFeed){
      await axios.get(`https://fyp-new-backend.herokuapp.com/api/v1/client/history`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.data.data)
    .then(async(data) => {
      console.log(data);
      for (let i = 0; i < data.pastAction.length; i++){
        await axios.post(`https://fyp-new-backend.herokuapp.com/api/v1/user/getUser`, { id: data.pastAction[i].driverId } , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.data.data)
          .then(user => {
            data.pastAction[i].firstName = user.firstName;
            data.pastAction[i].lastName = user.lastName;
            data.pastAction[i].mobileNumber = user.mobileNumber;
          })

      }
      for (let i = 0; i < data.futureAction.length; i++){
        await axios.post(`https://fyp-new-backend.herokuapp.com/api/v1/user/getUser`, { id: data.futureAction[i].driverId } , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.data.data)
          .then(user => {
            data.futureAction[i].firstName = user.firstName;
            data.futureAction[i].lastName = user.lastName;
            data.futureAction[i].mobileNumber = user.mobileNumber;
          })
      }
      this.feed = data;
    })
    } else {
      await axios.get(`https://fyp-new-backend.herokuapp.com/api/v1/driver/history`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.data.data)
    .then(async(data) => {
      console.log(data);
      for (let i = 0; i < data.pastAction.length; i++){
        await axios.post(`https://fyp-new-backend.herokuapp.com/api/v1/user/getUser`, { id: data.pastAction[i].driverId } , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.data.data)
          .then(user => {
            data.pastAction[i].firstName = user.firstName;
            data.pastAction[i].lastName = user.lastName;
            data.pastAction[i].mobileNumber = user.mobileNumber;
          })

      }
      for (let i = 0; i < data.futureAction.length; i++){
        await axios.post(`https://fyp-new-backend.herokuapp.com/api/v1/user/getUser`, { id: data.futureAction[i].driverId } , {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.data.data)
          .then(user => {
            data.futureAction[i].firstName = user.firstName;
            data.futureAction[i].lastName = user.lastName;
            data.futureAction[i].mobileNumber = user.mobileNumber;
          })
      }
      this.feed = data;
    })
    }
  },
  methods: {
    futureAction(){
      this.showWhich = true;
    },
    pastAction(){
      this.showWhich = false;
    }
  }
});
</script>

<style>

</style>