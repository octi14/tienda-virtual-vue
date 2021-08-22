<template>
  <div class="container">
    <a href="#"><img src="./assets/logo.png" alt="Logo"></a>
    <nav>
      <ul>
        <li><router-link to="/explorar">Explorar</router-link></li>
        <li><router-link to="/ofertas">Ofertas</router-link></li>
        <li><router-link to="/publicar">Publicar</router-link></li>
        <li><router-link to="/">Contacto</router-link></li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 110px;
}
.container {
  background-color: #7dfcc2;
  display:flex;
  width: 100%;
  height: 12%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  top: 0;
  margin: 0;
}
nav {
  display: flex;
  margin-right: 2rem;
  margin-top: 0rem;
  align-items: center;
}
.container img {
  margin: 1rem;
  margin-top: 0rem;
  height: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
nav ul li a:hover {
  color: rgb(94, 110, 68);
}
</style>