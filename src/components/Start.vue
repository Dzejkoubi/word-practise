<template>
  <div class="page">
    <h1>Word <span>Translation</span> Game <span>!</span></h1>
    <p>Click the button below to start playing.</p>
    <RouterLink to="/game" text="PLAY"><PropButton></PropButton></RouterLink>
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
