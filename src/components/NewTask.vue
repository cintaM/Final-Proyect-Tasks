<template>
 <nav id="nav" class="navbar navbar-light bg-light">
      <router-link to="/">
      <img class="navbar-brand" id="image" src="https://e7.pngegg.com/pngimages/592/707/png-clipart-aphrodite-solar-symbol-greek-mythology-labrys-symbol-miscellaneous-leaf.png" alt="logo"/>
    </router-link>
    <div>
        <h2>Iron-Tasks</h2>
      </div>
          <div   class="btn btn-dark" id="buttons">
            <router-link to="/auth/sign-up" >
              <strong class="text-light">Logout</strong>
            </router-link> 
       </div> 
       </nav>
  <form @submit.prevent="addTask" id="form2" class="form">
      <div>
      <label>Title</label>
      <input type="text" name="text" placeholder="Add a title" v-model="title" />
     </div>
     <div>
     <label>Task</label>
      <input type="text" name="text" placeholder="description" v-model="description" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
 <Footer/>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue"

components: {
  useRouter, useTaskStore, TaskItem, supabase, storeToRefs, Footer
}

const title=ref("");
const description=ref("");

const errorMsg = ref("");
const redirect = useRouter();

const tasks=ref([]);
const props = defineProps({task:{
 type: [],
},
title:{
  type:String
},
description:{
  type:String
}})





// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty

// const constant to save a variable that holds the value of the error message

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.

const addTask = async() => {
  try{
    await useTaskStore().addTask(title.value, description.value)
    redirect.push({path:"/new-task"});}
    catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};


    // Toggle Reminder Function
  
    // Add Task Function que recibe un customEvent de el hijo [AddTask.vue component], y debido a que no estamos trabajando con una base de datos, estaremos en esta instancia, empujando la nueva traea al array de tareas existentes!
   
</script>
.add-form
<style>

</style>
