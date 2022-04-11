<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{ aula.nome }} | {{ aula.duracao }}</p>
        <button @click="completarAula(aula)">Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15,
        },
        {
          nome: "Javascript",
          duracao: 15,
        },
        {
          nome: "UX design",
          duracao: 15,
        },
      ],
    };
  },
  methods: {
    completarAula(aula) {
      this.COMPLETAR_AULA(aula);
    },
  },
};
</script>

<style></style>
