<script setup>
import { ref } from "vue";
const pokemonSearchTerm = ref("");
</script>

<template>
  <div class="pokemon-search-container">
    <input
      class="pokemon-search"
      v-model="pokemonSearchTerm"
      placeholder="Search for a pokemon"
    />
  </div>
</template>

<style>
.pokemon-search-container {
  display: flex;
  justify-content: center;
}

.pokemon-search {
  border-radius: 15px;
  padding: 5px;
  padding-left: 15px;
}
</style>
