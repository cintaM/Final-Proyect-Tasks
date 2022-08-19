<template>
  <div>
    <h1>Sign In</h1>
    <form class="form" @submit.prevent="signIn">
      <label>
        Email <input  v-model="email" class="input" type="email" placeholder="youremail@myemail.com"
      /></label>
      <label>
        Enter your password
        <input v-model="password" class="input" type="password" placeholder="Enter your password"
      /></label>
      <button class="button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore, } from "../stores/user";
import { storeToRefs} from "pinia";
import NewTask from "../components/NewTask.vue";
components:{ NewTask, supabase, storeToRefs}
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
const hidePassword = ref(true);
// Router to push user once SignedIn to the HomeView
const redirect = useRouter();
// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/new-task" });
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
.wu-text {
  color: black;
}
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
