<template>
  <div class="container">
    <CreateTaskForm />
    <TaskDescription />
    <TasksList />
  </div>
</template>

<script>
import { CreateTaskForm } from '@/features';
import { TasksList, TaskDescription } from '@/widgets'

export default {
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  name: "TasksPage",
  components: {
    CreateTaskForm,
    TaskDescription,
    TasksList,
  },
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  padding-right: 5px;
}
</style>
