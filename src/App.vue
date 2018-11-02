<template> 
    <div id="app">
      <HeadComponent></HeadComponent>
      <router-view></router-view>
       <FootComponent></FootComponent>
    </div>
</template>

<script>
import HeadComponent from './components/HeadComponent.vue'
import FootComponent from './components/FootComponent.vue'
export default {
  name: 'app',
  components: {
    HeadComponent,
    FootComponent
  }
}
</script>