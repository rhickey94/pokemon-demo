<script setup>
import { ref } from "vue";
const pokemonSearchTerm = ref("");

defineProps({
  apiUrl: String,
});

defineEmits(["setSearchUrl"]);
</script>

<template>
  <div class="pokemon-search-container">
    <form @submit.prevent="$emit('setSearchUrl', apiUrl + pokemonSearchTerm)">
      <input
        class="pokemon-search"
        v-model="pokemonSearchTerm"
        type="text"
        placeholder="Search for a pokemon"
      />
    </form>
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
