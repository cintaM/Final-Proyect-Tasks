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

    <div class="btn btn-dark" id="buttons">
      <router-link class="btn" to="/auth/sign-up">
        <strong class="text-light">Sign Up</strong>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
</script>

<style scoped>
.body {
  margin: 0;
}

#image {
  width: 60px;
  height: 70px;
  border-radius: 80%;
}

.paragrah {
  width: 25rem;
  font-size: 0.8rem;
  margin-right: 0;
  text-align: end;
}

#buttons{
margin-right: 2rem;
padding: 0;
}

@media only screen and (max-width: 765px){

  h2{
    font-size: 1.5rem;
  }

  #buttons{
    display: none;
    
  }

  
  
}
</style>
