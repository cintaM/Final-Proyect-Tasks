import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    title:"",
    description:"",
    remainder: false,
  
  
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log(this.tasks)
      return this.tasks;
    },

    async borrarTasks(id) {
      const { data: tasks } = await supabase
        .from("tasks")
        .delete()
        .match({id:id})
    },

    async modificarTasks(id, title, description) {
      const { data: tasks } = await supabase
        .from("tasks")
        .update({title: title, description: description})
        .match({id:id})
    },

    async signOut (){
      const { error } = await supabase.auth.signOut()
    },
    // New code
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          description: description,
        },
      ]);
    },

    
  },
});