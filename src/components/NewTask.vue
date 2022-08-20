<template>
  <form @submit.prevent="addTask" class="add-form">
    <div class="form-control">
      <label>Title</label>
      <input type="text" name="text" placeholder="Add a title" v-model="title" />
      <label>Task</label>
      <input type="text" name="text" placeholder="description" v-model="description" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
 
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import TaskItem from "../components/TaskItem.vue"

components: {
  useRouter, useTaskStore, TaskItem, supabase, storeToRefs
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

<style>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
