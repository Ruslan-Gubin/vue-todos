<template>
  <div class="create-tasck__container">
    <h2 class="create-tasck__title">Добавить задачу</h2>
    <form ref="taskForm" class="create-tasck__form" @submit.prevent="createTask">
      <div class="create-tasck__group">
        <label class="create-tasck__label" for="task-name"
          >Название задачи:</label
        >
        <input
          v-model="inputTaskTitle"
          class="create-tasck__input"
          type="text"
          id="task-title"
        />
      </div>
      <div class="create-tasck__group">
        <label class="create-tasck__label" for="task-description"
          >Описание задачи:</label
        >
        <input
          v-model="inputTaskDescription"
          class="create-tasck__input"
          type="text"
          id="task-description"
        />
      </div>
      <button class="create-tasck__submit" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapsVuexService } from "@/shared";


export default {
  name: "CreateTaskForm",
  computed: {
    ...mapsVuexService.getters('getInputTaskTitle', 'getInputTaskDescription', 'getEdidTasksId'),
    inputTaskTitle: {
      get() {
        return this.getInputTaskTitle
      },
      set(value) {
        this.$store.commit('setInputTaskTitle', value)
      }
    },
    inputTaskDescription: {
      get() {
        return this.getInputTaskDescription
      },
      set(value) {
        this.$store.commit('setInputTaskDesctiption', value)
      }
    },
  },
  methods: {
    ...mapsVuexService.actions('addTask', 'updateTask'),
    createTask() {
      const title = this.getInputTaskTitle;
      const description = this.getInputTaskDescription;

      if ( !title || !description) return;

      if (this.getEdidTasksId) {
       return this.editTask({id: this.getEdidTasksId, title, description})
      } 

      const newTask = {
        id: uuidv4(),
        title,
        description,
        create_at: Date.now(),
        completed: false,
      };
      
      this.addTask(newTask)
    },
    editTask({id, title, description}) {
      this.updateTask({ id, title, description })
    },
  },
};
</script>

<style>
@import url("./CreateTaskForm.css");
</style>
