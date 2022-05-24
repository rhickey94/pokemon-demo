<script setup>
defineProps({
  pokemonName: String,
  sprite: String,
});
</script>

<template>
  <section class="pokemon-content">
    <img :src="sprite" alt="" />
    <div class="pokemon-name">{{ pokemonName }}</div>
  </section>
</template>

<style>
.pokemon-content {
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 200px;
  padding-bottom: 5px;
  margin-bottom: 5px;
  text-transform: capitalize;
}

.pokemon-name {
  font-size: 1rem;
  text-align: center;
  padding: 5px;
}

.pokemon-type {
  font-size: 0.65rem;
  text-align: center;
}
</style>
