import { createRouter, createWebHistory } from "vue-router";
import Start from "../components/Start.vue";
import Game from "../components/Game.vue";
import YourWords from "../components/YourWords.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Start,
    },
    {
      path: "/Game",
      component: Game,
    },
    {
      path: "/YourWords",
      component: YourWords,
    },
  ],
});

export default router;
