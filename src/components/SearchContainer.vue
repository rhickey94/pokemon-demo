<script setup>
import { ref, onBeforeMount } from "vue";
import ContainerItem from "./ContainerItem.vue";

const props = defineProps({
  apiUrl: String,
});

const pokemonCollection = ref([]);
const nextUrl = ref("");
const currentUrl = ref("");

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
  fetch(currentUrl.value)
    .then((response) => response.json())
    .then((data) => {
      nextUrl.value = data.next;
      data.results.forEach((pokemon) => {
        const pokemonId = pokemon.url.split("/")[6];
        pokemonCollection.value.push(createPokemon(pokemonId, pokemon.name));
      });
    });
}

onBeforeMount(() => {
  currentUrl.value = props.apiUrl;
  fetchPokemonList();
});
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
