<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos"
            >Cursos</router-link
          >
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="../assets/img/aprender.png"
          alt="imagem abstrata de uma homem com uma cabeça grande voando nas nuvens, utilizando um chapel de formatura como um balão"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData.js";

export default {
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home");
  },
};
</script>

<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 10px 0 40px 0;
  padding: 15px 20px;
}
</style>
