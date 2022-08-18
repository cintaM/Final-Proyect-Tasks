<template>
  <router-link :to="route">{{ buttonText }}</router-link>
  <router-link :to="route1"></router-link>
   <router-link :to="route2"></router-link>
</template>

<script setup>
defineProps({
  route: String,
  buttonText: String,
  route1:String,
  route2:String,
});
</script>

<style></style>
