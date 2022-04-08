<template>
  <div>
    <div v-if="loading">
      <PageLoading />
    </div>
    <transition>
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>
        <ul class="cursos-lista">
          <li v-for="cursos in api.cursos" :key="cursos.id">
            <h2>
              <router-link
                :to="{ name: 'curso', params: { curso: cursos.id } }"
              >
                {{ cursos.nome }} - {{ cursos.totalAulas }} aulas |
                {{ cursos.horas }} horas
              </router-link>
            </h2>
            <p>{{ cursos.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "../mixins/fetchData";
export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos");
  },
};
</script>

<style>
.cursos-lista li {
  margin-bottom: 40px;
}
</style>
