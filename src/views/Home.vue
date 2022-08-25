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
  <div style="background-image: url('https://st2.depositphotos.com/1031174/5660/i/600/depositphotos_56604559-stock-photo-blackboard.jpg'); height: 100vh no-repeat">
  <NewTask @add-task="addTask" />
  <div id="notes">
  <div v-for="tarea in tareas" :key="tarea.id" >
 <div class="card mr-4 mb-5" style="width: 15rem;" >
  <div class="card-body" id="bodycard">
 <TaskItem 
    @borrar-task="borrarTareas"
    @modificar-task="modificarTareas"
    @edit-toggle="modificarToggle"
    :tarea="tarea"
  />
  </div>
 </div>
 </div>
 </div>
 </div>
  <Footer />
  <router-view />
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { createClient } from "@supabase/supabase-js";
import NewTask from "../components/NewTask.vue";

const redirect = useRouter();
const tareas = ref([]);
const titleEdit = ref("");
const descriptionEdit = ref("");
const errorMsg = ref("");

const addTask = async (title, description, is_complete) => {
  try {
    await useTaskStore().addTask(title, description, is_complete);
    conseguirTareas();
    redirect.push({ path: "/home" });
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 3000);
  }
};



const conseguirTareas = async () => {
  tareas.value = await useTaskStore().fetchTasks(); 
  console.log(tareas.value)

};

conseguirTareas();

const modificarTareas = async (id, title, description) => {
  await useTaskStore().modificarTasks(id, title, description);
  conseguirTareas();


};

const borrarTareas = async (id) => {
  await useTaskStore().borrarTasks(id);
  conseguirTareas();
};

const signOut = async () => {
  await useTaskStore().signOut();
  redirect.push({ path: "/auth/login" });
};


const modificarToggle = async (id, is_complete) => {
  await useTaskStore().modificarToggle(id, is_complete)
  conseguirTareas();
};

</script>
<style scoped>

#notes {
  display: flex;
  margin: 5rem;
  margin-bottom: 15rem;
}

#bodycard{
  background-color: #fcefb4;
}

#image {
  width: 60px;
  height: 70px;
  border-radius: 80%;
}

@media only screen and (max-width: 765px){

#notes {
  display: flex;
  flex-direction: column;
  margin: 5rem;
  margin-bottom: 15rem;
}
#image {
  width: 30px;
  height: 35px;
  border-radius: 80%;
}

h2{
  font-size: 1.5rem;
}

#buttons{
  font-size: 0.6rem;
}
}


</style>
