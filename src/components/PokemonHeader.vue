<script setup>
import { usePokemonDetailStore } from "../stores/PokemonDetailStore";

const pokemonDetailStore = usePokemonDetailStore();
</script>

<template>
  <div class="header">
    <router-link @click="pokemonDetailStore.$reset()" to="/">
      <h1 class="heading">Pokemon Demo</h1>
    </router-link>
  </div>
</template>

<style>
.header {
  margin: 50px;
}

.heading {
  text-align: center;
}
</style>
