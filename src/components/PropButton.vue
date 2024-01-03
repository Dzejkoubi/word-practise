<template>
  <div>
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: ["text"],
  setup() {
    return {};
  },
};
</script>

<style scoped>
button {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
</style>
