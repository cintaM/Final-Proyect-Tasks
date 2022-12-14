import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import NewTask from "../components/NewTask.vue"


const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "sign-up", component: SignUp },

    ],
  },
  {path:"/", component:SignIn},
  { path: "/home", component: Home,
},
{ path: "/new-task", component:NewTask},
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;