<template>
  <div id="app">
    <nav>
      <img src="./assets/LogoTec.jpg" alt="logotec" class="logo">
      <router-link to="/" class="texto">Home</router-link>
      <router-link to="/alumnos" class="texto">Alumnos</router-link>
      <router-link to="/maestros" class="texto">Maestros</router-link>
      <router-link to="/materias" class="texto">Materias</router-link>
      <router-link to="/grupos" class="texto">Grupos</router-link>
      <router-link to="/cargas" class="texto">Toma de cargas</router-link>
      <router-link to="/about" class="texto">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      //color: #42b983;
      color : rgb(71, 172, 255)
    }
    :hover {
      color: rgb(71, 172, 255)
    }
  }
}
.logo{
  margin: 0;
  padding: 0;
  width: 15%;
  height: 10%;
  left: 0;
}
.texto{
  font-size: 20px;
  margin-top: 15px;
}
</style>
