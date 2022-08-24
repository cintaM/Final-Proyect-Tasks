<template>
 <div v-for="tarea in tareas" :key="tarea.id" id="notes">
  <div  class="card w-300">
   <div class="card-body" >
      <h5 class="card-title">{{ tarea.title }}</h5>
      <i  @click="$emit('borrar-task', tarea.id)" class="fa-solid fa-trash-can"></i>
      <p class="card-text"> {{tarea.description}}</p>
      <button class="btn btn-primary" @click="toggleShowForm">Edit</button>
       <div @click="editToggle(tarea.id)"> 
        <p v-if="!is_complete" class="btn btn-success">Complete</p>
        <p v-else class="btn btn-danger">not completed</p>
     <form v-if="showForm" @submit.prevent="editTarea (tarea.id)">
      <input type="text" placeholder="Modificar titulo" v-model="titleEdit">
      <input type="text" placeholder="Modificar descripción" v-model="descriptionEdit">
      <button type="submit">actualizar</button>
      </form>
    </div>
     </div>
  </div>
   </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import NewTask from "../components/NewTask.vue";
import Home from "../views/Home.vue";
const showForm = ref(false);
const titleEdit = ref("");
const title =ref("");
const description=ref("");
const descriptionEdit = ref("");
const is_complete=ref(false)
const props = defineProps({
  tareas: Array,
  title: String,
  description: String,
  titleEdit: String,
  descriptionEdit: String,
  is_complete:Boolean});

const emit = defineEmits([
  "borrar-task",
  "toggle-form",
  "modificar-task",
  "add-task",
  "edit-toggle"
]);

const editTarea = (id) => {
  emit("modificar-task", id, titleEdit.value, descriptionEdit.value);
};

const toggleShowForm = () => {
  showForm.value = !showForm.value
};

const editToggle = (id) => {
  is_complete.value = !is_complete.value;
  emit("edit-toggle",id, is_complete.value)
};

</script>
<style scoped>


#notes{
  display: inline-flex;
  margin-left: 3rem;
  width: 10rem;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.reminder {
  border-left: 5px solid green;
}

.titulo1{
  display: flex;
  flex-direction: row;
}


</style>

