<template>
  <div class="container">
    <a href="#"><img :src="image" /></a>
    <nav>
      <ul>
        <li><router-link to="/explorar">Explorar</router-link></li>
        <li><router-link to="/ofertas">Ofertas</router-link></li>
        <li><router-link to="/publicar">Publicar</router-link></li>
        <li><router-link to="/">Contacto</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import image from '../assets/logo.png'
export default {
  name: 'Navbar',
  props: {
    msg: String
  },
  data: function () {
        return {
            image: image
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: #7dfcc2;
  display:flex;
  width: 100%;
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
  align-items: center;
}

.container img {
  margin: 1rem;
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
