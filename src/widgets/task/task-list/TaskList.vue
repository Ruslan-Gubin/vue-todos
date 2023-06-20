<template>
  <ul class="task-list__container">
    <li v-for="(tasks, index) in tasks" :key="index">
      <TaskField v-bind:task="tasks" />
    </li>
  </ul>
</template>

<script>
import TaskField from "../task-field/TaskField.vue";
import { mapsVuexService } from "@/shared";

export default {
  computed: {
    ...mapsVuexService.getters('getTasks'),
    tasks() {
      return this.getTasks;
    },
  },
  name: "TasksList",
  components: {
    TaskField,
  },
};
</script>

<style scoped>
.task-list__container {
  overflow: hidden;
  padding: 0px;
}

</style>
