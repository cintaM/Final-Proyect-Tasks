<template>
         <nav id="nav" class="navbar navbar-light bg-light">
    <router-link to="/">
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
    <button @click="signOut" class="btn btn-dark" id="buttons">
      <strong class="text-light">Logout</strong>
    </button>
  </nav>
  <div>
    <form @submit.prevent="addTask" id="form2" class="form">
      <div>
        <label>Title</label>
        <input
          type="text"
          name="text"
          placeholder="Add a title"
          v-model="title"
        />
      </div>
      <div>
        <label>Task</label>
        <input
          type="text"
          name="text"
          placeholder="description"
          v-model="description"
        />
      </div>
      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  </div>
  <div @submit.prevent="fetchTask">
  </div>
   <div v-for="tarea in tareas" :key="tarea.id">
      <h1>{{ tarea.title }}</h1>
      <h2> {{tarea.description}}</h2>
      <i class="fa-solid fa-trash-can"></i>
    </div>
  <Footer />
</template>

<script setup>
// 2. (NewTask, TaskItem, Footer, Nav) components are used here! 
import { ref, computed, reactive } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { createClient } from "@supabase/supabase-js";

const redirect = useRouter();


const tareas = ref([]);

const conseguirTareas = async () => {
  tareas.value = await useTaskStore().fetchTasks();
};

conseguirTareas();

const borrarTareas = async (id) =>{
  tareas.value = await useTaskStore().borrarTasks();
}

borrarTareas()


const modificarTareas = async (id) =>{
  tareas.value = await useTaskStore().modificarTasks();
}

modificarTareas()

// constant to save a variable that define the custom event that will be emitted to the homeView
// constant to save a variable that holds the value of the title input field of the new task
const title = ref("");
// constant to save a variable that holds the value of the description input field of the new task
const description = ref("");
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
// const constant to save a variable that holds the value of the error message
const errorMsg = ref("");
// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
const addTask = async () => {
  try {
    await useTaskStore().addTask(title.value, description.value);
    redirect.push({ path: "/" });
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};



const signOut = async () => {
  await useTaskStore().signOut();
  redirect.push({ path: "/auth/login" });
};
</script>
<style>

</style>

<!-- 
**Hints**



4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component. 
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
