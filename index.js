import App from "./app.js";

const $app = document.querySelector("#app");
const app = new App($app);
await app.init();
