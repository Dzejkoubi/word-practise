<template>
  <div class="page">
    <h1>Word <span>Translation</span> Game</h1>
    <p>
      Welcome to the Word Translation Game! The goal of this game is to
      translate words from one language to another. You will be given a word in
      one language and you need to type the translation in the other language.
      Good luck!
    </p>
    <RouterLink to="/game">
      <PropButton> <font-awesome-icon icon="fa-solid fa-play" /></PropButton>
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

<style scoped></style>
