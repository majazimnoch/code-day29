const app = Vue.createApp({
  data() {
    return {
      showInfo: false,
      arrowRotated: false,
      animal: "Lemur",
      origin: "island of Madagascar",
      size: "small",
      lifespan: 20 
    };
  },
  methods: {
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
      this.arrowRotated = !this.arrowRotated;
    },
  },
});

console.log("test");

app.mount("#app");
