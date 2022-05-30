<script setup>
import { computed } from "vue";
import { apis } from "../store/apis.js";

const props = defineProps({
  pokemonId: String,
  pokemonName: String,
});

const spriteUrl = computed(() => {
  return `${apis.imageUrl}${props.pokemonId}.png`;
});
</script>

<template>
  <router-link
    :to="{
      name: 'pokemon.detail',
      params: { id: pokemonId, name: pokemonName },
    }"
  >
    <section class="pokemon-content">
      <img
        class="pokemon-sprite"
        :src="spriteUrl"
        height="96"
        width="96"
        alt=""
      />
      <div class="pokemon-name">{{ pokemonName }}</div>
    </section>
  </router-link>
</template>

<style>
.pokemon-content {
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-def);
  border-radius: 8px;
  width: 200px;
  height: 200px;
  padding-bottom: 5px;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.pokemon-name {
  color: var(--text-light-1);
  text-align: center;
  padding: 5px;
}
</style>
