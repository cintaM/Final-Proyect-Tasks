<template>
  <div>
    <form @submit.prevent="añadirTarea" id="form2" class="form">
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
</template>

<script setup>
import TaskItem from "../components/TaskItem.vue";
import { ref, computed, reactive } from "vue";
import PersonalRouter from "./PersonalRouter.vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useTaskStore } from "../stores/task";
import { storeToRefs } from "pinia";
import Home from "../views/Home.vue";

const errorMsg = ref(
  "Hay algún tipo de error, por favor, inténtelo de nuevo más tarde"
);

const error1 = ref(false);
const tareas = ref([]);
const title = ref("");
const description = ref("");
const props = defineProps({
  tareas: String,
  title: String,
  description: String,
});
const emit = defineEmits(["add-task"]);
const añadirTarea = (event) => {
  emit("add-task", title.value, description.value);
};
</script>

<style>
</style>
