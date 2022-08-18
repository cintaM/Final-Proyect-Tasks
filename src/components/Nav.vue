<template>
     <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Iron-Tasks</strong>
      </a> 
      </div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
             <PersonalRouter :route="route1" />
            <a class="button is-dark">
              <strong>Sign In</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
 
</template>

<script setup>
import { useRouter } from "vue-router";

const route1 = "/auth/login";
//constant to save a variable that will hold the use router method

// constant to save a variable that will get the user from store with a computed function imported from vue

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
