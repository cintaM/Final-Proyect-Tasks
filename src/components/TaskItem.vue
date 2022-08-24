<template>
  <div>
          <div id="tti">
            <h5 class="card-title">{{ tarea.title }}</h5>
            <i
              @click="$emit('borrar-task', tarea.id)"
              class="fa-solid fa-xmark"
            ></i>
          </div>
          <p id="descrip" class="card-text">{{ tarea.description }}</p>
          <div id="cart-btn">
            <button class="btn btn-primary mb-3 w-4" @click="toggleShowForm">
              Edit
            </button>
          </div>
          <div id="complete" @click="editToggle(tarea.id)">
            <p v-if="!is_complete" class="btn btn-danger">not completed</p>
            <p v-else class="btn btn-success">Complete</p>
          </div>
          <form v-if="showForm" @submit.prevent="editTarea(tarea.id)">
            <input
              id="input1"
              type="text"
              placeholder="New title"
              v-model="titleEdit"
            />
            <input
              id="input2"
              type="text"
              placeholder="New description"
              v-model="descriptionEdit"
            />
            <button class="btn btn-info" type="submit">Update</button>
          </form>
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
const title = ref("");
const description = ref("");
const descriptionEdit = ref("");
const is_complete = ref(false);
const props = defineProps({
  tarea: Object,
  title: String,
  description: String,
  titleEdit: String,
  descriptionEdit: String,
  is_complete: Boolean,
});

const emit = defineEmits([
  "borrar-task",
  "toggle-form",
  "modificar-task",
  "add-task",
  "edit-toggle",
]);

const editTarea = (id) => {
  emit("modificar-task", id, titleEdit.value, descriptionEdit.value);
};

const toggleShowForm = () => {
  showForm.value = !showForm.value;
};

const editToggle = (id) => {
  is_complete.value = !is_complete.value;
  emit("edit-toggle", id, is_complete.value);
};
</script>
<style scoped>
#notes {
  display: inline-flex;
  margin-left: 3rem;
  width: 14rem;
  margin-top: 8rem;
  margin-bottom: 8rem;
}
.task {
  background: #f4f4f4;
  padding: 5px 5px;
  cursor: pointer;
}

#tti {
  display: flex;
  justify-content: center;
}
.titulo1 {
  display: flex;
  flex-direction: row;
}

h5 {
  margin-right: 5rem;
}

i {
  width: 0.5rem;
}

#input1 {
  width: 12.85rem;
  margin-left: 0.2rem;
}
#input2 {
  width: 12.85rem;
  margin-bottom: 1rem;
  margin-left: 0.2rem;
}

#cart-btn {
  display: flex;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#complete {
  margin-left: 0.25rem;
}

#descrip {
  text-align: center;
}
</style>

