<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<script>
import Game from "./components/Game.vue";
import Start from "./components/Start.vue";
import "./styles.css";
export default {
  components: {
    Game,
    Start,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style>
.content {
}
</style>
