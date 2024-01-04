<template>
  <div>
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
