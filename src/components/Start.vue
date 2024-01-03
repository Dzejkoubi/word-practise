<template>
  <div class="start-page">
    <h1>Welcome to the Game!</h1>
    <p>Click the button below to start playing.</p>
    <RouterLink to="/game"
      ><button class="play-button">Play</button></RouterLink
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.start-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
}

.play-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.play-button:hover {
  background-color: #0056b3;
}
</style>
