<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import axios from "axios";
import api from "../services/axios";
export default {
  name: "home",
  data() {
    return {
      api: null,
    };
  },
  methods: {
    fetchData() {
      axios
        .get(api)
        .then((r) => r.json)
        .then((r) => {
          this.api = r;
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
