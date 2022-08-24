<template>
  <div>
    <button id="btnnew" class="btn btn-light" @click="toggleShowForm1"> + Add New Task</button>
    <form v-if="showForm1" @submit.prevent="añadirTarea" id="form2" class="form">
      <div>
        <input
          id="input1"
          type="text"
          name="text"
          placeholder="Add a title"
          v-model="title"
        />
      </div>
      <div>
        <input
          id="input2"
          type="text"
          name="text"
          placeholder="Add a description"
          v-model="description"
        />
      </div>
      <input class="btn btn-primary" type="submit" value="Save Task" id="btnfinal"/>
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
const showForm1 = ref(false);
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

const toggleShowForm1 = () => {
  showForm1.value = !showForm1.value;
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

#input2{
  width: 20rem;
  margin-left: 38rem;
  margin-right: 4rem;
  height: 4rem;
  margin-top:1rem;
}
#input1{
  width: 20rem;
  margin-left: 38rem;
  margin-top: 3rem;
}

::placeholder{
  text-align: center;
}

#btnfinal{
  margin-top: 1.5rem;
  width: 20rem;
  margin-left: 38rem;
}

#btnnew{
  margin-left: 38rem;
  margin-top: 5rem;
  width: 20rem;
  height: 3rem;
}

@media only screen and (max-width: 765px){

  #btnnew{
  margin-left: 5rem;
  margin-top: 5rem;
  width: 15rem;
  height: 3rem;
}

#input2{
  width: 15rem;
  margin-left: 5rem;
  margin-right: 4rem;
  height: 4rem;
  margin-top: 1rem;
}
#input1{
  width: 15rem;
  margin-left: 5rem;
  margin-top: 2rem;
}

#btnfinal{
  margin-top: 1.5rem;
  width: 15rem;
  margin-left: 5rem;
}
}

</style>
