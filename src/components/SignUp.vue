<template>
  <div>
    <h1> Sign Up</h1> 
  <form action="submit">
<h2> Email</h2>
<input type="email" placeholder="youremail@myemail.com"/>
<h2> Enter your password</h2>
<input type="password" placeholder="Enter your password">
<h2> Confirm your password</h2>
<input type="password" placeholder="Enter your password again">
  </form>
  <button type="submit" to="/"> Submit</button>
</div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

// Route Variables
// const route = "/auth/";
const buttonText = "Your count";

// Input Fields
const email = ref("");
const password = ref("");
// Error Message
const errorMsg = ref("");
// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Show hide confrimPassword variable
const passwordFieldTypeConfirm = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePasswordConfirm = ref(true);


// Router to push user once SignedUp to Log In
const redirect = useRouter();
// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
const signUp = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signUp(email.value, password.value);
    // redirects user to the homeView
    // redirect.push({ path: "/new-task" });
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

<style></style>
