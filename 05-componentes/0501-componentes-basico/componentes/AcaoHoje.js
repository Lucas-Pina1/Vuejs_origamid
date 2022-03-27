import DolarHoje from "./DolarHoje";

export default {
  name: "AcaoHoje",
  components: {
    DolarHoje,
  },
  data() {
    return {
      valorMercado: 0,
    };
  },
  template: `
  <div>
  <p>Valor da Apple: {{valorMercado}}</p>
  <P><dolar-hoje></dolar-hoje></P>
  </div>`,
  methods: {
    puxarAcao() {
      fetch("https://api.origamid.dev/stock/aapl/quote")
        .then((r) => r.json())
        .then((r) => {
          this.valorMercado = r.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
