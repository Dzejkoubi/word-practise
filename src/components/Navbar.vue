<template>
  <nav>
    <div class="nav-container">
      <router-link to="/">Start</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/YourWords">Your Words</router-link>
      <router-link to="/AboutAuthor">About author</router-link>
    </div>
  </nav>
</template>

<script>
import "../styles.css";
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  position: fixed;
  width: 100%;
  height: 3rem;
  top: 0;
  left: 0;
  z-index: 100;

  display: flex;
  justify-content: center;

  background-color: var(--background-color-2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 7, 59, 0.45);
}

.nav-container {
  width: 100%;
  max-width: 800px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;
  font-size: 1.2rem;
}

nav a:hover {
  color: var(--secondary-color);
}

nav a.router-link-exact-active {
  color: var(--secondary-color);
}
</style>
