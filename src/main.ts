import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// firebase import statements and config go here.

const app = createApp(App);

// firebase initialize shit goes here

app.use(router);

app.mount("#app");
