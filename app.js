const app = Vue.createApp({
  data() {
    return {
      showInfo: false,
      showChar:false,
      arrowRotated: false,
      arrowRotatedChar: false,
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
    toggleShowChar() {
    this.showChar = !this.showChar;
    this.arrowRotatedChar = !this.arrowRotatedChar;
    }
  },
});

console.log("test");

app.mount("#app");
