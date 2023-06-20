<template>
  <div  v-bind:class="{checkedTaskActive: $props.isCompleted }" class="checked-task"  @click="checkedTask"></div>
</template>

<script>
import { mapsVuexService } from "@/shared";

export default {
  props: {
    id: String,
    isCompleted: Boolean,
  },
  data() {
    return {
      classChecked: 'checked-task__checkbox'
    }
  },
  name: "CheckedTask",
  methods: {
    ...mapsVuexService.actions('checkToggleTask'),
    checkedTask() {
      this.checkToggleTask({id: this.id, isCompleted: this.isCompleted})
    },
  },
};
</script>

<style>
@import url('./CheckedTask.css');
</style>