<script setup>
import { ref, onBeforeMount } from "vue";
import ContainerItem from "./ContainerItem.vue";
import ScrollTrigger from "./common/ScrollTrigger.vue";

const props = defineProps({
  apiUrl: String,
});

const pokemonCollection = ref([]);
const nextUrl = ref("");
const currentUrl = ref("");

function createPokemon(id, name, url) {
  return {
    id: id,
    name: name,
    url: url,
  };
}

async function fetchPokemonList() {
  const response = await fetch(currentUrl.value);
  const data = await response.json();
  nextUrl.value = data.next;

  data.results.forEach((pokemon) => {
    const pokemonId = pokemon.url.split("/")[6];
    pokemonCollection.value.push(
      createPokemon(pokemonId, pokemon.name, pokemon.url)
    );
  });
}

async function loadMore() {
  if (nextUrl.value) {
    currentUrl.value = nextUrl.value;
    fetchPokemonList();
  }
}

function setSearchUrl(url) {
  console.log(url);
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
      @click="setSearchUrl(pokemon.url)"
    />
    <ScrollTrigger @trigger-intersected="loadMore" />
  </section>
</template>

<style>
.search-container {
  max-width: 60%;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
}
</style>
