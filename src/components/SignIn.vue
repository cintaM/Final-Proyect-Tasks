<template>
<Nav/>
<div class="bg-image  p-5 text-center shadow-1-strong rounded mb-5 text-white"
  style="background-image: url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1944&q=80'); height: 100vh no-repeat"> 
  
    <form id="form2" class="form" @submit.prevent="signIn">
    <h1>Sign In</h1>
    <div>
      <label for="exampleInputEmail1"> Email </label>
        <input   aria-describedby="emailHelp"  id="exampleInputEmail1" v-model="email" class="form-control" type="email" placeholder="youremail@myemail.com"
      />
      </div>
      <div class="form-group">
      <label for="exampleInputPassword1">
        Enter your password</label>
       <div id="button-input"> <input  v-model="password" class="form-control" :type="passwordFieldType" placeholder="Enter your password" id="exampleInputPassword1" 
      />
      <div class="btn btn-dark">
      <i v-if="hidePassword" @click="hidePassword = !hidePassword" class="fa-solid fa-eye"></i>
      <i v-else @click="hidePassword = !hidePassword"  class="fa-solid fa-eye-slash"></i>
      </div></div> </div> 
      <button class="btn btn-primary" type="submit">Login</button>
      <div id="buttons">
        <p class="paragrah">You don't have a account yet?</p>
            <router-link to="/auth/sign-up" >
              Sign Up
            </router-link> 
            </div>
    </form>
    </div>
    <Footer/>
</template>

<script setup>
import { ref, computed, } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs} from "pinia";
import NewTask from "../components/NewTask.vue";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue"
components:{ NewTask, supabase, storeToRefs, Nav, Footer}
// Route Variables


// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");
//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(false);
// Router to push user once SignedIn to the HomeView
const redirect = useRouter();
// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/home" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style>
#form2{
  width:80vh;
  text-align: center;
  justify-content:center;
  margin-left: 450px
}
.contenido{
  display:flex;

}

.paragrah{
 width: 25rem;
 font-size: 0.9rem;
 margin-right: 1rem;
 margin-bottom: 1rem;
 text-align: end;
 color:black
}

#buttons{
  display: flex;
  margin-top:1rem
}

#button-input{
  display: flex;
}
</style>
