<template>

     <nav id="nav" class="navbar navbar-light bg-light">
      <router-link to="/auth/login">
      <img class="navbar-brand" id="image" src="https://e7.pngegg.com/pngimages/592/707/png-clipart-aphrodite-solar-symbol-greek-mythology-labrys-symbol-miscellaneous-leaf.png" alt="logo"/>
    </router-link>
    <div>
        <h2>Iron-Tasks</h2>
      </div>
      
          <div class="btn btn-dark" id="buttons">
            <router-link to="/auth/sign-up" >
              <strong class="text-light">Sign Up</strong>
            </router-link> 
       </div> 
        <!-- <p class="paragrah">If you don't have a account yet? </p> -->
       </nav>

</template>

<script setup>

import { ref, computed } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";


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

.paragrah{
 width: 25rem;
 font-size: 0.8rem;
 margin-right: 0;
 text-align: end;
}
</style>
