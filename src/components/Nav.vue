<template>

     <nav id="nav" class="navbar navbar-light bg-light">
      <router-link to="/">
      <img class="navbar-brand" id="image" src="https://e7.pngegg.com/pngimages/592/707/png-clipart-aphrodite-solar-symbol-greek-mythology-labrys-symbol-miscellaneous-leaf.png" alt="logo"/>
    </router-link>
    <div>
        <h2>Iron-Tasks</h2>
      </div>
          <div   class="btn btn-dark" id="buttons">
            <router-link to="/auth/sign-up" >
              <strong class="text-light">Sign Up</strong>
            </router-link> 
       </div> 
  </nav>
 
</template>

<script setup>

import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

//constant to save a variable that will hold the use router method
// const route = "/auth/login";
// const route2 = "/auth/sign-up";
const redirect = useRouter();
const router = useRouter();
const userStore = useUserStore();

// constant to save a variable that will get the user from store with a computed function imported from vue
const { user } = storeToRefs(userStore);
// constant that calls user email from the useUSerStore
const email = ref("");
// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const signOut = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    // redirect.push({ path: "/" });
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

.body{
  margin:0
}

#image{
  width: 60px;
  height: 70px;
  border-radius: 80%;
}
</style>
