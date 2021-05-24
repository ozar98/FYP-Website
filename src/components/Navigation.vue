<template>
  <nav class="navigation_18 bg-orange pt-30 pb-30 lh-40 text-center">
    <div class="container px-xl-0">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-auto text-lg-left" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">
          <a href="#" class="logo link color-white">Get a ride</a>
        </div>
  			<div class="col-lg-9 text-lg-right" data-aos-duration="600" data-aos="fade-down" data-aos-delay="300" v-show="!isLogged">
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="openModalSignIn">Sign In</a>
          <SignInModal v-show="signInModalOpen" @close="closeModalSignIn">
            <template v-slot:header>
              Signing in
            </template>
            <template v-slot:body>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" v-model="usernameSignIn">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passwordSignIn">
                </div>
                <p v-show="errorSignIn">{{ errorSignInMessage }}</p>
              </form>
            </template>
            <template v-slot:footer>
              <button
                type="button"
                class="btn-green"
                @click="SignIn"
              >
                Sign in
              </button>
            </template>
          </SignInModal>
          <a class="link color-white mx-15" data-toggle="modal" href="#" @click="openModalSignUp">Register</a>
          <SignInModal v-show="signUpModalOpen" @close="closeModalSignUp">
            <template v-slot:header>
              Signing Up
            </template>
            <template v-slot:body>
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" v-model="usernameSignUp">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="emailSignUp">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" v-model="firstNameSignUp">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name" v-model="lastNameSignUp">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="passwordSignUp">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Number</label>
                  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Mobile Number" v-model="mobileNumberSignUp">
                </div>
                <p v-show="errorSignUp">{{ errorSignUpMessage }}</p>
              </form>
            </template>
            <template v-slot:footer>
              <button
                type="button"
                class="btn-green"
                @click="SignUp"
              >
                Sign Up
              </button>
            </template>
          </SignInModal>
        </div>
        <div class="col-lg-9 text-lg-right" data-aos-duration="600" data-aos="fade-down" data-aos-delay="300" v-show="isLogged">
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="createPost" v-show="showCreatePost">Create a Post</a>
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="clientFeed">Client Feed</a>
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="driverFeed">Driver Feed</a>
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="profile">Profile</a>
          <a href="#" class="link color-white mx-15" data-toggle="modal"  @click="Logout" >Logout</a>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  </nav>  
</template>

<script>
import { defineComponent } from "vue";
import SignInModal from '../components/Modal';
import axios from 'axios';

export default defineComponent({
  components: {
    SignInModal
  },
  created(){
    if (localStorage.getItem("token")) this.isLogged = true; else this.isLogged = false;
    
    const currentPath = this.$router.currentRoute.value.path;
    if (currentPath.indexOf("/create") != -1) this.showCreatePost = false;
    if (currentPath.indexOf("/profile") != -1) this.showCreatePost = false;
  },
  data() {
    return {
      isLogged: false,

      signInModalOpen: false,
      usernameSignIn: "",
      passwordSignIn: "",
      errorSignIn: false,
      errorSignInMessage: "",

      signUpModalOpen: false,
      usernameSignUp: "",
      emailSignUp: "",
      mobileNumberSignUp: "",
      passwordSignUp: "",
      firstNameSignUp: "",
      lastNameSignUp: "",
      errorSignUp: false,
      errorSignUpMessage: "",

      showCreatePost: true,
    }
  },
  methods: {
    clientFeed(){
      this.$router.push({ path: "/clientfeed"});
    },
    driverFeed(){
      this.$router.push({ path: "/driverfeed"});
    },
    profile(){
      this.$router.push({ path: "/profile"});
    },
    openModalSignIn(){
      this.signInModalOpen = true;
    },
    closeModalSignIn(){
      this.signInModalOpen = false;
    },
    openModalSignUp(){
      this.signUpModalOpen = true;
    },
    closeModalSignUp(){
      this.signUpModalOpen = false;
    },
    async SignIn(){
      this.usernameSignIn.trim();
      this.passwordSignIn.trim();
      if (!this.usernameSignIn || !this.passwordSignIn){
        this.errorSignIn = true;
        this.errorSignInMessage = "Please fill in the form";
        return;
      }
      this.errorSignIn = false;
      const userInfo = {
        username: this.usernameSignIn,
        password: this.passwordSignIn
      };

      const response = await axios.post("https://fyp-new-backend.herokuapp.com/api/v1/user/login", userInfo);
      const data = await response.data;
      if (data["success"]){
        this.invalidCredentialsSignIn = false;
        const token = data.token;
        localStorage.setItem("token", token);
        this.$router.push({ path: "/profile" });       
      } else {
        this.errorSignIn = true;
        this.errorSignInMessage = data["message"];
      }
    },
    async SignUp(){
      if (!this.usernameSignUp || 
        !this.emailSignUp || 
        !this.firstNameSignUp || 
        !this.lastNameSignUp || 
        !this.passwordSignUp || 
        !this.mobileNumberSignUp){
        this.errorSignUp = true;
        this.errorSignUpMessage = "Please fill in the form";
        return;
      }
      let mobileNumber;
      const mobileNumberLength = this.mobileNumberSignUp.length;
      if (mobileNumberLength == 9){
        mobileNumber = "+992" + this.mobileNumberSignUp;
      } else if (mobileNumberLength == 12) {
        mobileNumber = "+" + this.mobileNumberSignUp;
      } else if (mobileNumberLength < 9 || mobileNumberLength > 13) {
        this.errorSignUp = true;
        this.errorSignUpMessage = "Invalid Mobile Number"
      }

      const userInfo = {
        username: this.usernameSignUp,
        password: this.passwordSignUp, 
        email: this.emailSignUp,
        firstName: this.firstNameSignUp,
        lastName: this.lastNameSignUp,
        mobileNumber: mobileNumber,
      };
      const response = await axios.post("https://fyp-new-backend.herokuapp.com/api/v1/user", userInfo);
      const data = response.data;

      if (data["success"]){
        alert("You are registered");
        this.closeModalSignUp();
        this.openModalSignIn();
      } else {
        this.errorSignUp = true;
        this.errorSignUpMessage = data["message"];
      }
    },
    createPost(){
      const currentPath = this.$router.currentRoute.value.path;
      console.log(currentPath);
      if (currentPath == "/driverfeed") this.$router.push({ path: "/driverfeed/create"});
      else this.$router.push({ path: "/clientfeed/create"});
    },
    Logout(){
      localStorage.removeItem("token");
      this.$router.go();
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