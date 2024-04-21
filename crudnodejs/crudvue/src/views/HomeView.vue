<template>
  <div class="home">
    <br>
    <br>
    <img alt="Vue logo" src="../assets/Logo-Elmo.gif">
    <HelloWorld msg="Control escolar"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.home {
  background-color: black;
  width: 100%;
  height: 566px;
  }
</style>
