<template>
  <div>
    <h1 v-if="$route.path === '/'">Word <span>Translation</span> Game</h1>
    <h1 v-else-if="$route.path === '/game'">
      Translate the <span>Words</span>
    </h1>
    <h1 v-else-if="$route.path === '/YourWords'">
      Add your <span>custom Words</span>
    </h1>
    <h1 v-else-if="$route.path === '/AboutAuthor'">
      About the <span>author</span>
    </h1>
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <transition
        :enter-active-class="route.meta.enterClass"
        :leave-active-class="route.meta.leaveClass"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import "./styles.css";
import "animate.css";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
h1 {
  padding-top: 1.5rem;
  font-size: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: #fff;
  z-index: 1;
}

.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  width: 100%;
  max-width: 800px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.page.animate__fadeOutDown {
  animation-duration: 2s; /* Increase duration to 2 seconds */
}
</style>
