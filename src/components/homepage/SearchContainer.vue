<script setup>
import { ref } from "vue";
import ContainerItem from "./ContainerItem.vue";

const pokemonCollection = ref([
  {
    id: 1,
    name: "Bulbasaur",
    type1: "Grass",
    type2: "n/a",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 4,
    name: "Charmander",
    type1: "Fire",
    type2: "n/a",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 132,
    name: "Ditto",
    type1: "Normal",
    type2: "n/a",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
]);
</script>

<template>
  <section class="search-container">
    <ContainerItem
      v-for="pokemon in pokemonCollection"
      :key="pokemon.id"
      :pokemon-name="pokemon.name"
      :type1="pokemon.type1"
      :sprite="pokemon.sprite"
    />
  </section>
</template>

<style>
.search-container {
  max-width: 60%;

  display: flex;
  flex-flow: row wrap;
}
</style>
