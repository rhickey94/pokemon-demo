<script setup>
import { ref, onMounted } from "vue";
import ContainerItem from "./ContainerItem.vue";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const pokemonCollection = ref([]);
const nextUrl = ref("");

function createPokemon(id, name) {
  return {
    id: id,
    name: name,
    sprite: generateSpriteUrl(id),
  };
}

function generateSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function fetchPokemonList() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      nextUrl.value = data.next;
      data.results.forEach((pokemon) => {
        const pokemonId = pokemon.url.split("/")[6];
        pokemonCollection.value.push(createPokemon(pokemonId, pokemon.name));
      });
    });
}

onMounted(() => fetchPokemonList());
</script>

<template>
  <section class="search-container">
    <ContainerItem
      v-for="pokemon in pokemonCollection"
      :key="pokemon.id"
      :pokemon-id="pokemon.id"
      :pokemon-name="pokemon.name"
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
