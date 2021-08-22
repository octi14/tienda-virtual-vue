<template>
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
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
</style>
