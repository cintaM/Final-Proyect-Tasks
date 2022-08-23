<template>
  <div>
  <div >
   <div v-for="tarea in tareas" :key="tarea.id">
      <h1>{{ tarea.title }}</h1>
      <i  @click="$emit('borrar-task', tarea.id)" class="fa-solid fa-trash-can"></i>
      <h2> {{tarea.description}}</h2>
      <button @click="toggleShowForm">Edit</button>
      <form v-if="showForm" @submit.prevent="editTarea(tarea.id)">
      <input type="text" placeholder="Modificar titulo" v-model="titleEdit">
      <input type="text" placeholder="Modificar descripción" v-model="descriptionEdit">
      <button type="submit">En el futuro voy a modificar la tarea en Supabase</button>
      </form>
  </div> 
  </div>
    </div>
</template>

<script setup>
import { ref, } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import NewTask from "../components/NewTask.vue";
import Home from "../views/Home.vue";
const showForm = ref(false);
const titleEdit = ref("");
const descriptionEdit = ref("");
const props = defineProps({
  tareas: Array,
  title: String,
  description: String,
  titleEdit: String,
  descriptionEdit: String});

const emit = defineEmits([
  "borrar-task",
  "toggle-form",
  "modificar-task",
  "add-task"
]);

const editTarea = (id) => {
  emit("modificar-task", id, titleEdit.value, descriptionEdit.value);
};

const toggleShowForm = () => {
  showForm.value = !showForm.value
};
</script>
<style scoped>

</style>

