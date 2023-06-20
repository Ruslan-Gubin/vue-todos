<template>
    <picture>
      <img class="edit-task__icon" @click="editTask" src="@/assets/1486564394-edit_81508.png" alt="png edit">
    </picture>
</template>

<script>
import { mapsVuexService } from "@/shared";

export default {
  props: {
    id: String,
    title: String,
    description: String,
  },
  name: "EditTask",
  methods: {
    ...mapsVuexService.actions('setEditTaskId'),
    editTask() {
      this.setEditTaskId({
      id: this.$props.id,
      title: this.$props.title,
      description: this.$props.description
      })
    },
  },
};
</script>

<style scoped>
.edit-task__icon {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

</style>
