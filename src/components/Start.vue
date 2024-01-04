<template>
  <div class="page">
    <p>
      Welcome to the Word Translation Game! The goal of this game is to
      translate words from Czech into English and vice versa.
    </p>
    <RouterLink to="/game" class="play-button">
      <PropButton> <font-awesome-icon icon="fa-regular fa-play" /></PropButton>
    </RouterLink>
  </div>
</template>

<script>
import PropButton from "./PropButton.vue";
export default {
  components: {
    PropButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.play-button {
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
</style>
