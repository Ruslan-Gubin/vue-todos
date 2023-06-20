<template>
  <img
    class="delete-task__icon"
    @click="handleDeleteTask"
    src="@/assets/iconfinder-trash-4341321_120557.png"
    alt="png edit"
  />
</template>

<script>
import { mapsVuexService } from "@/shared";

export default {
  props: {
    id: String,
  },
  name: "TaskField",
  methods: {
    ...mapsVuexService.actions('deleteTask'),
    handleDeleteTask() {
      this.deleteTask(this.id)
    },
  },
};
</script>

<style scoped>
.delete-task__icon {
  width: 35px;
  height: 35px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
