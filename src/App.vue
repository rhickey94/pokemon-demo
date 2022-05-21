<script setup>
import SearchContainer from "./components/homepage/SearchContainer.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
  </header>
  <SearchContainer />
</template>

<style>
/* @import "./assets/base.css"; */

* {
  margin: 0 auto;
  font-weight: normal;
  font-family: "Press Start 2P", cursive;
}

img {
  display: block;
}
</style>
