<script setup>
import { computed } from "vue";

const props = defineProps({
  pokemonId: String,
  pokemonName: String,
  sprite: String,
});

const generateDetailUrl = computed(() => {
  return `/pokemon/${props.pokemonId}`;
});
</script>

<template>
  <router-link :to="generateDetailUrl">
    <section class="pokemon-content">
      <img class="pokemon-sprite" :src="sprite" alt="" />
      <div class="pokemon-name">{{ pokemonName }}</div>
    </section>
  </router-link>
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

.pokemon-sprite {
  display: block;
}
</style>
