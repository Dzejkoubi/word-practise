<template>
  <div class="content">
    <div class="navbar">
      <router-link to="/">Start</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/YourWords">Your Words</router-link>
      <router-link to="/AboutAuthor">About author</router-link>
    </div>
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
import "./styles.css";

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page {
  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
  margin-right: 1em;
}

a:hover,
a.router-link-active {
  color: var(--secondary-color);
}
</style>
