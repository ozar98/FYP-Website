<template>
  <div>
    <Navigation />
    <div class="row m-3">
    <div class="container m-3 mx-auto  ">
        <div class="card mx-auto">

            <div class="card-body">
                <div class="row">
                    <div  class="col">
                        <img src="@/assets/person.png">
                        <h5 class="card-title">{{this.user.firstName}} {{this.user.lastName}}</h5>
                        <p class="card-text">{{this.user.email}}</p>
                        <p class="card-text">{{this.user.mobileNumber}}</p>
                    </div>
                    <div class="col m-5">
                        
                    </div>
                </div>

        
                
            </div>
            
          </div>
          <div class="row m-3">
              <h4 class="text-center mx-auto">History</h4>
          </div>

          <div class="row m-3">
              <div class="col mx-auto">
                <div class="card mx-auto" style="width: 18rem;">
                    <div class="card-body">
                        <div class="row mx-auto">
                            <h5 class="card-title mx-auto"><i class="fa fa-car mx-auto fa-2x" aria-hidden="true"></i></h5>
                        </div>
                        <div class="row">
                            <p class="card-text mx-auto"><router-link to="/driverfeed/history">As a driver</router-link></p></div>
                        
                      
                    </div>
                  </div>
              </div>
              <div class="col mx-auto">
                <div class="card mx-auto" style="width: 18rem;">
                    <div class="card-body">
                        <div class="row mx-auto">
                            <h5 class="card-title mx-auto"><i class="fa fa-male mx-auto fa-2x" aria-hidden="true"></i></h5>
                        </div>
                        <div class="row">
                            <p class="card-text mx-auto"><router-link to="/clientfeed/history">As a client</router-link></p></div>
                        
                      
                    </div>
                  </div>
              </div>
          </div>
          <div class="row m-3">
            <div class="col mx-auto">
              <div class="card mx-auto" style="width: 18rem;">
                  <div class="card-body">
                      <div class="row mx-auto">
                          <h5 class="card-title mx-auto"><i class="fa fa-question-circle mx-auto fa-2x" aria-hidden="true"></i></h5>
                      </div>
                      <div class="row">
                        <p class="card-text mx-auto">Help</p></div>
                  </div>
                </div>
            </div>
            <div class="col mx-auto">
              <div class="card mx-auto" style="width: 18rem;">
                  <div class="card-body">
                      <div class="row mx-auto">
                          <h5 class="card-title mx-auto"><i class="fa fa-info-circle mx-auto fa-2x" aria-hidden="true"></i></h5>
                      </div>
                      <div class="row">
                          <p class="card-text mx-auto">About</p></div>
                      
                    
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
import Navigation from '../components/Navigation';
import axios from 'axios';
import Modal from '../components/Modal'

export default defineComponent({
  components:{
    Navigation,
    Modal
  },
  data(){
    return {
      user: {
        email: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        username: "",
        showModal: false,
      }
    }
  },
  methods: {
    openModal(){
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    }
  },
  created(){
    const token = localStorage.getItem("token");
    axios.get("https://fyp-new-backend.herokuapp.com/api/v1/user/myself", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.data.data)
    .then((data) => {
      this.user = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        mobileNumber: data.mobileNumber
      };
    }).catch(err => {
      console.log(err);
    }); 

  }
});
</script>

<style>

</style>