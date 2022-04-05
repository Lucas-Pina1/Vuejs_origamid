<template>
  <div id="app">
    <h1 @click="mostrarRouter">Logo</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Cursos">Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    },
  },
};
</script>

<style>
a {
  padding: 10px;
}

.router-link-exact-active {
  color: #84e;
  font-weight: bold;
}
</style>
