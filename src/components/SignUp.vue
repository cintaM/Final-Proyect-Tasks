<template>
  <nav id="nav" class="navbar navbar-light bg-light">
    <router-link to="/auth/login">
      <img
        class="navbar-brand"
        id="image"
        src="https://e7.pngegg.com/pngimages/592/707/png-clipart-aphrodite-solar-symbol-greek-mythology-labrys-symbol-miscellaneous-leaf.png"
        alt="logo"
      />
    </router-link>
    <div>
      <h2>Iron-Tasks</h2>
    </div>

    <div class="btn btn-dark" id="buttons1">
      <router-link to="/auth/login">
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
          class="form-control"
          id="input"
          v-model="email"
          type="email"
          placeholder="youremail@myemail.com"
          required
        />
        <label> Enter your password </label>
        <div id="button-input">
          <input
            id="input1"
            class="form-control"
            v-model="password"
            :type="passwordFieldType"
            placeholder="Enter your password"
            required
          />
          <div class="btn btn-dark" id="button-black">
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
          </div>
        </div>
        <label> Confirm your password</label>
        <div id="button-input">
          <input
            id="input2"
            class="form-control"
            v-model="password2"
            :type="passwordFieldType1"
            placeholder="Enter your password again"
            required
          />
          <div class="btn btn-dark" id="button-black">
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
          </div>
        </div>
        <p id="error">{{ errorMsg }}</p>
        <button class="btn btn-primary" id="btnfin" type="submit">
          Register
        </button>
        <div id="buttons">
          <p class="paragrah">Do you have a account?</p>
          <router-link class="router" to="/auth/login"> Sign In </router-link>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

// Variables usadas
const email = ref("");
const password = ref("");
const password2 = ref("");
const errorMsg = ref("");
const redirect = useRouter();

// Botones password
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);

const passwordFieldType1 = computed(() =>
  hidePassword1.value ? "password" : "text"
);

const hidePassword = ref(true);
const hidePassword1 = ref(true);

const passwordFieldTypeConfirm = computed(() =>
  hidePasswordConfirm.value ? "password" : "text"
);
const hidePasswordConfirm = ref(true);

// Funci??n SignUp

const signUp = async () => {
  if (password.value === password2.value)
    try {
      await useUserStore().signUp(email.value, password.value);
      redirect.push({ path: "/" });
    } catch (error) {
      errorMsg.value = `Error: ${error.message}`;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
  else {
    errorMsg.value = "Passwords do not match";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
#input {
  color: black;
  margin-bottom: 1rem;
  width: 35.5rem;
}
#input1 {
  width: 35rem;
  margin-bottom: 1rem;
}

#input2 {
  width: 35rem;
  margin-bottom: 1rem;
}

.router{
  width: 5rem;
}
#error {
  color: orangered;
  font-size: xx-large;
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

#buttons {
  display: flex;
  margin-top: 1rem;
  margin-right: 8rem;
}
#form1 {
  width: 80vh;
  text-align: center;
  justify-content: center;
  margin-left: 450px;
}

#button-input {
  display: flex;
}

#button-black {
  padding: 0;
  margin-bottom: 1rem;
}

#image {
  width: 60px;
  height: 70px;
  border-radius: 80%;
}

i {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 0.25rem;
  padding: 0;
}

h1 {
  margin-bottom: 1.5rem;
}

.paragrah {
  width: 25rem;
  font-size: 0.9rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: end;
  color: black;
}


@media only screen and (max-width: 765px) {
  #form1 {
    width: 30vh;
    text-align: center;
    justify-content: center;
    margin-left: 10px;
  }

  h1 {
  margin-bottom: 1.5rem;
  margin-left: 2rem;
}
  .paragrah {
    width: 25rem;
    font-size: 0.8rem;
  }

  #buttons {
    margin-right: 2rem;
  }

  #input {
    color: black;
    width: 17rem;
    margin-bottom: 5rem;
  }
  #input1 {
    width: 15rem;
    margin-bottom: 1rem;
  }

  #buttons1 {
    display: none;
  }

  #input {
    color: black;
    margin-bottom: 1rem;
    width: 17rem;
  }

  #btnfin {
    width: 17rem;
  }
}
</style>
