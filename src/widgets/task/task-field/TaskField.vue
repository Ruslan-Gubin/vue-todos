<template>
  <div class="task-field__container">
    <div class="task-field__title">{{ task.title }}</div>
    <div class="task-field__description">{{ task.description }}</div>
    <div class="task-field__create task-field__item">{{ date }}</div>
    <div class="task-field__completed task-field__item">
      <CheckedTask :id="task.id" :isCompleted="task.completed" />
    </div>
    <div class="task-field__buttons">
      <EditTask :id="task.id" :title="task.title" :description="task.description" />
      <DeleteTask :id="task.id" />
    </div>
  </div>
</template>

<script>
import { formattedDate } from "@/shared";
import  { CheckedTask, EditTask, DeleteTask }  from "@/features";

export default {
  props: {
    task: Object,
  },
  components: {
    DeleteTask,
    EditTask,
    CheckedTask,
  },
  name: "TaskField",
  data() {
    return {
      date: formattedDate.format(this.$props.task.create_at),
    };
  },
  methods: {},
};
</script>

<style>
@import url("./TaskField.css");
</style>
