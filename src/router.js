import Vue from "vue";
import VueRouter from "vue-router";
import TasksPage from "@/views/TasksPage";
import MainPage from "@/views/MainPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
    },
    {
      path: "/tasks-list",
      name: "tasksPage",
      component: TasksPage,
    },
  ],
});
