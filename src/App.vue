<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import { ref } from "vue";
import Nav from "../src/components/Nav.vue";
import Home from "../src/views/Home.vue"
import Footer from "./components/Footer.vue";
import SignIn from "./components/SignIn.vue"

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

components:{Nav, Home, Footer, SignIn};
onMounted(async () => {
  const appReady = ref(null);
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      appReady.value = true;
      router.push({ path: "/auth/login" });
    } else {
      // continue to dashboard
      // router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <div>
<router-view></router-view>
  </div>
</template>

<style>
#app{
 font-family: 'Aboreto', cursive;
      
}
</style>
