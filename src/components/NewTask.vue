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
  <div @submit.prevent="fetchTask" @delete-task=borrarTareas >
  </div>
   <div v-for="tarea in tareas" :key="tarea.id">
      <h1>{{ tarea.title }}</h1>
      <h2> {{tarea.description}}</h2>
      <i  @click="borrarTareas"  class="fa-solid fa-trash-can"></i>
      </div>
  <!-- <nav id="nav" class="navbar navbar-light bg-light">
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
    <div v-for="task in tasks" :key="task.id">
      <p>{{ task.title }}</p>
      <p>{{ task.description }}</p>
    </div> -->
<!--    
  </div>
   <div v-for="tarea in tareas" :key="tarea.id">
      <h1>{{ tarea.title }}</h1>
      <h2> {{tarea.description}}</h2>
    </div> -->
  <Footer /> 
</template>

<script setup>

import TaskItem from "../components/TaskItem.vue"

// const title = ref("");
const description = ref("");

const errorMsg = ref(Boolean);

const Mensaje = (() =>{
  if (title != title){
    return errorMsg
  }
});

const emit = defineEmits([
  "delete-task", "toggle-reminder", "add-task", "fetch-task"
])
// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
// const constant to save a variable that holds the value of the error message

// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.






// const supabaseA = createClient(
//   "https://aznrntfwlkdquktcwmcs.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6bnJudGZ3bGtkcXVrdGN3bWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4MTUwMTgsImV4cCI6MTk3NjM5MTAxOH0.NmHQGfpmOY5rYiptH8ANkcPVJCtmNwlY-1c3jNr9gKo"
// );

//  const arrayTask = []

//  supabaseA
//   .from("tasks")
//   .select(title.value)
//   .then((response) => {
//     generateArticleList(response);
//   });

//   function generateArticleList(tasksRaw){
//     arrayTask.push(tasksRaw.data); // Todos los datos se introducen en articles[0] porque estamos usando Push()
//     console.log(arrayTask[0].title);

//     console.log(tasksRaw.data);    }
</script>

<style>
</style>
