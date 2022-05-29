<script setup>
import { apis } from "../store/apis";
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

const pokemonData = ref(null);

const pokemonUrl = computed(() => {
  return `${apis.baseUrl}${props.id}`;
});

function fetchData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      pokemonData.value = data;
    });
}

onMounted(() => {
  fetchData(pokemonUrl.value);
});
</script>

<template>
  <div>
    <header>
      <img src="" alt="pokemon" />
      <h1>{{ name }}</h1>

      <div>
        <p>height</p>
        <p>weight</p>
        <p>abilities</p>
      </div>
      <div>
        <h2>Stats</h2>
        <p></p>
      </div>
      <div>
        <h2>Types</h2>
      </div>
      <div>
        <h2>Moves</h2>
      </div>
    </header>
  </div>
</template>

<style></style>
