import Vue from "vue";
import Vuex from "vuex";
import { tasksModule } from "@/entities";

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tasks: tasksModule,
  },
})

