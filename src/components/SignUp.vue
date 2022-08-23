<template>
  <nav id="nav" class="navbar navbar-light bg-light">
      <router-link to="/auth/login">
      <img class="navbar-brand" id="image" src="https://e7.pngegg.com/pngimages/592/707/png-clipart-aphrodite-solar-symbol-greek-mythology-labrys-symbol-miscellaneous-leaf.png" alt="logo"/>
    </router-link>
    <div>
        <h2>Iron-Tasks</h2>
      </div>
      
          <div class="btn btn-dark" id="buttons">
            <router-link to="/auth/login" >
              <strong class="text-light">Sign In</strong>
            </router-link> 
       </div> 
       </nav>
  <div
    href="/"
    class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
    style="
      background-image: url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1944&q=80');
      height: 100vh no-repeat;
    "
  >
    <div>
      <form id="form1" class="form" action="submit" @submit.prevent="signUp">
        <h1>Sign Up</h1>
        <label> Email</label>
        <input
          class="input"
          v-model="email"
          type="email"
          placeholder="youremail@myemail.com"
        />
        <label> Enter your password </label>
        <input
          class="input"
          v-model="password"
          :type="passwordFieldType"
          placeholder="Enter your password"
        />
          <i
            v-if="hidePassword"
            @click="hidePassword = !hidePassword"
            class="fa-solid fa-eye"
          ></i>
          <i
            v-else
            @click="hidePassword = !hidePassword"
            class="fa-solid fa-eye-slash"
          ></i>
        <label> Confirm your password</label>
        <input
          class="input"
          v-model="password2"
          :type="passwordFieldType1"
          placeholder="Enter your password again"
        />
        <i
          v-if="hidePassword1"
          @click="hidePassword1 = !hidePassword1"
          class="fa-solid fa-eye"
        ></i>
        <i
          v-else
          @click="hidePassword1 = !hidePassword1"
          class="fa-solid fa-eye-slash"
        ></i>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

components: {
  Nav, Footer;
}

// Route Variables
// Input Fields
const email = ref("");
const password = ref("");
const password2 = ref("");
// Error Message
const errorMsg = ref("");
// Show hide password variable
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const passwordFieldType1 = computed(() =>
  hidePassword1.value ? "password" : "text"
);
const hidePassword = ref(true);
const hidePassword1 = ref(true);
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

#form1 {
  width: 80vh;
  text-align: center;
  justify-content: center;
  margin-left: 450px;
}
</style>
