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
      router.push({ path: "/" });
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
  image:src="https://images.unsplash.com/photo-1593698054589-8c14bb66d2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
      
}
</style>
