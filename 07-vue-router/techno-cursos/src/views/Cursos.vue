<template>
  <div>
    <div v-if="loading"></div>
    <PageLoading />
    <div v-if="api">
      <h1>Cursos</h1>
      <p>{{ api }}</p>
    </div>
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
