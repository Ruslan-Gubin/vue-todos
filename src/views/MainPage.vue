<template>
    <div class="header">
      <MainInfo 
      :appTitle='title' 
      :appDescription="description" 
      :appFeatures="features" 
      :appAdditional="Additiona"
      :featuresTitle="featuresTitle"
      />
    </div>
</template>

<script>
import { MainInfo } from '@/widgets' 
import { appTitle, appDescription, appAdditional, appFeatures } from '@/shared'


export default {  
  name: "MainPage",
  components: {
    MainInfo,
  },
  data() {
    return {
      title: appTitle,
      description: appDescription,
      features: appFeatures.features,
      Additiona: appAdditional,
      featuresTitle: appFeatures.title,
    };
  },
};
</script>

<style scoped>
.header {
  padding: 0 20px;
}
.title {
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
  margin: 20px 0;
}
</style>