<script setup>
const props = defineProps({
  pokemonName: String,
  type1: String,
  sprite: String,
});
</script>

<template>
  <section class="pokemon-content">
    <img :src="sprite" alt="Ditto!" />
    <div class="pokemon-name">{{ pokemonName }}</div>
    <div class="pokemon-type">{{ type1 }}</div>
  </section>
</template>

<style>
.pokemon-content {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 200px;
}

.pokemon-content > div {
  padding: 10px;
}

.pokemon-name {
  font-size: 1rem;
  text-align: center;
}

.pokemon-type {
  font-size: 0.65rem;
  text-align: center;
}
</style>
