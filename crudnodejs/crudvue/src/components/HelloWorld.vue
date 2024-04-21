<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Programacion web 12:00-13:00
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  //color: #42b983;
  color: red;
}
.hello{
  background-color: black;
  display: block;
  margin: 0 auto;
  padding: 0px;
}
</style>
