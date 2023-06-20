<template>
  <div class="task-description__container">
    <div class="task-field__title">Название задачи</div>
    <div class="task-field__description">Описание задачи</div>
    <div class="task-field__create">Дата создания</div>
    <div class="task-field__completed">Статус</div>
    <div class="task-field__buttons">Опции</div>
  </div>
</template>

<script>

export default {
  name: "TaskDescription",
};
</script>

<style>
@import url('./TaskDescription.css');
</style>