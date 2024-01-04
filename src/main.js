import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faPlay, faPause);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
