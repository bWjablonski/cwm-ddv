<template>
  <div class="home">
    <HomeView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomeView from '@/components/HomeView.vue'

export default {
  name: 'Home',
  components: {
    HomeView
  }
}
</script>
