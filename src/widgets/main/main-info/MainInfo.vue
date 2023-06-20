<template>
  <div class="main-info">
    <h1 class="main-info__title">{{ appTitle }}</h1>
    <p class="main-info__description">{{ appDescription }}</p>
    <h2 class="info-features__title">{{ featuresTitle }}</h2>
    <ul class="main-info__features">
      <li class="info-features__item" v-for="feature in appFeatures" :key="feature">{{ feature }}</li>
    </ul>
    <p class="main-info__additional">{{ appAdditional }}</p>
  </div>
</template>

<script>

export default {
  name: 'MainInfo',
  props: {
    appTitle: {
      type: String,
      required: true
    },
    appDescription: {
      type: String,
      required: true
    },
    appFeatures: {
      type: Array,
      required: true
    },
    appAdditional: {
      type: String,
      required: true
    },
    featuresTitle: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
.main-info {
  margin-top: 20px;
  color: rgb(59, 57, 57);
}
.main-info__title {
  font-size: 2.5em;
  margin-bottom: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.071);
}
.main-info__description {
  font-size: 1.7em;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.064);
}
.info-features__title {
  font-size: 1.7em;
  margin-bottom: 10px;
}
.main-info__features {
  list-style: none;
  font-size: 1.3em;
  padding-left: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.064);
  margin-bottom: 15px;
}
.info-features__item {
  margin-bottom: 5px;
}
.main-info__additional {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
