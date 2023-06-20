<template>
  <header class="layout-header__container">
    <ul class="layout-header__navs">
      <li class="layout-header__link" :class="{ layoutHeaderActive: $route.path === '/' }">
        <router-link class="layout-header__nav" to="/">Главная</router-link>
      </li>
      <li :class="{ layoutHeaderActive: $route.path === '/tasks-list' }">
        <router-link class="layout-header__nav" to="/tasks-list"
          >Список задач</router-link
        >
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader",
};
</script>

<style>
@import url('./LayoutHeader.css');
</style>
