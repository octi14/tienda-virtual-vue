<template>
  <div class="container">
    <a href="#"><img src="../assets/logo.png" alt="Logo"></a>
    <nav>
      <ul>
        <li><a href="/">Explorar</a></li>
        <li><a href="/ofertas">Ofertas</a></li>
        <li><a href="/publicar">Publicar</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <Link to="/">Main Menu</Link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
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
  padding: 1rem;
  position: fixed;
  margin: 0;
}

nav {
  display: flex;
  align-items: center;
}

.container img {
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
