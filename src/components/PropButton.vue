<template>
  <div>
    <button><slot></slot></button>
  </div>
</template>

<script>
export default {
  props: [],
  setup() {
    return {};
  },
};
</script>

<style scoped>
.button-slot {
}

.button-slot svg {
  color: black;
}

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
