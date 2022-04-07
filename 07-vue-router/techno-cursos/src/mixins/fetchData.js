import api from "../services/axios";
export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      api.get(`${url}`).then((response) => {
        this.api = response.data;
        this.loading = false;
      });
    },
    // fetchData() {
    //   fetch(`http://localhost:3000/home`)
    //     .then((r) => r.json())
    //     .then((r) => {
    //       this.dados = r;
    //       console.log(typeof r);
    //     });
    // }
  },
};
