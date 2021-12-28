import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "./index.css";

createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
