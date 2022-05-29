<script setup>
import { ref } from "vue";
import SearchContainer from "@/components/SearchContainer.vue";
import SearchBar from "@/components/SearchBar.vue";

const apiUrl = ref("https://pokeapi.co/api/v2/pokemon/");
const searchUrl = ref("");

function setSearchUrl(url) {
  searchUrl.value = url;
}
</script>

<template>
  <div id="home-container">
    <h1 class="heading">Pokemon Demo</h1>
    <SearchBar @set-search-url="setSearchUrl" :api-url="apiUrl" />
    <SearchContainer :api-url="apiUrl" />
  </div>
</template>

<style>
.heading {
  text-align: center;
}
</style>
