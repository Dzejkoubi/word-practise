import { createRouter, createWebHistory } from "vue-router";
import Start from "../components/Start.vue";
import Game from "../components/Game.vue";
import YourWords from "../components/YourWords.vue";
import AboutAuthor from "../components/AboutAuthor.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Start,
      meta: {
        enterClass: "animate__animated animate__fadeInUp",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/Game",
      component: Game,
      meta: {
        enterClass: "animate__animated animate__bounceIn",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/YourWords",
      component: YourWords,
      meta: {
        enterClass: "animate__animated animate__fadeInUp",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
    {
      path: "/AboutAuthor",
      component: AboutAuthor,
      meta: {
        enterClass: "animate__animated animate__fadeInUp",
        leaveClass: "animate__animated animate__fadeOut",
      },
    },
  ],
});

export default router;
