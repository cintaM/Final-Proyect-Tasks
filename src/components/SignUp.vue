<template>
  <div>
    <h1>Sign Up</h1>
    <form class="form" action="submit" @submit.prevent="signUp">
      <label>
        Email
        <input class="input"
          v-model="email"
          type="email"
          placeholder="youremail@myemail.com"
        /></label
      >
      <label>
        Enter your password
        <input class="input"
          v-model="password"
          type="password"
          placeholder="Enter your password"
      /></label>
      <label>
        Confirm your password
        <input class="input"
          v-model="password"
          type="password"
          placeholder="Enter your password again"
      /></label>
      <button class="button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore} from "../stores/user";
import { storeToRefs} from "pinia";

// Route Variables
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
  hidePasswordConfirm.value ? "password" : "text"
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
   redirect.push({ path: "/" });
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

.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
