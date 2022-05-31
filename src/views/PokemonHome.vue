<script setup>
import { ref } from "vue";
import { apis } from "../store/apis";
import PokemonHeader from "../components/PokemonHeader.vue";
import SearchContainer from "@/components/SearchContainer.vue";
// import SearchBar from "@/components/SearchBar.vue";

const apiUrl = ref(`${apis.baseUrl}?limit=40`);
// const searchUrl = ref("");

// function setSearchUrl(url) {
//   searchUrl.value = url;
// }
</script>

<template>
  <div id="home-container">
    <PokemonHeader />
    <!-- <SearchBar @set-search-url="setSearchUrl" :api-url="apiUrl" /> -->
    <SearchContainer :api-url="apiUrl" />
  </div>
</template>

<style>
.heading {
  text-align: center;
}
</style>
