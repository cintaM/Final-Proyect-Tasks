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
    <button @click="signOut" class="btn btn-dark" id="buttons">
      <strong class="text-light">Logout</strong>
    </button>
  </nav>
  <NewTask @add-task="addTask" />
  <TaskItem
    @borrar-task="borrarTareas"
    @modificar-task="modificarTareas"
    :tareas="tareas"
  />
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

const addTask = async (title, description) => {
  try {
    await useTaskStore().addTask(title, description);
    redirect.push({ path: "/home" });
    conseguirTareas();
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
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
</script>
<style>
</style>
