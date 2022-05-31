<script setup>
import { computed } from "vue";

import PokemonHeader from "../components/PokemonHeader.vue";
import ContainerItem from "../components/ContainerItem.vue";

import { usePokemonDetailStore } from "../stores/PokemonDetailStore";
const pokemonDetailStore = usePokemonDetailStore();

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
});

pokemonDetailStore.getPokemonData(props.id);
const height = computed(() => pokemonDetailStore.height);
const weight = computed(() => pokemonDetailStore.weight);
const ability = computed(() => pokemonDetailStore.ability);
const hp = computed(() => pokemonDetailStore.hp);
const attack = computed(() => pokemonDetailStore.attack);
const defense = computed(() => pokemonDetailStore.defense);
const speed = computed(() => pokemonDetailStore.speed);
const specialAttack = computed(() => pokemonDetailStore.specialAttack);
const specialDefense = computed(() => pokemonDetailStore.specialDefense);
</script>

<template>
  <div class="pokemon-detail-container">
    <PokemonHeader />
    <div class="pokemon-detail">
      <ContainerItem :pokemon-id="id" :pokemon-name="name" />
      <h2>Types</h2>
      <div class="pokemon-info pokemon-types">
        <span>TBD</span>
        <span>TBD</span>
      </div>
      <h2></h2>
      <div class="pokemon-info">
        <p>
          <span>Height</span><span>{{ height }} inches</span>
        </p>
        <p>
          <span>Weight</span><span>{{ weight }} lbs</span>
        </p>
        <p>
          <span>Ability</span><span class="pokemon-ability">{{ ability }}</span>
        </p>
      </div>
      <h2>Stats</h2>
      <div class="pokemon-info">
        <p>
          <span>HP</span><span>{{ hp }}</span>
        </p>
        <p>
          <span>Attack</span><span>{{ attack }}</span>
        </p>
        <p>
          <span>Defense</span><span>{{ defense }}</span>
        </p>
        <p>
          <span>Spc. Attack</span><span>{{ specialAttack }}</span>
        </p>
        <p>
          <span>Spc. Defense</span><span>{{ specialDefense }}</span>
        </p>
        <p>
          <span>Speed</span><span>{{ speed }}</span>
        </p>
      </div>
      <h2>Moves</h2>
      <div class="pokemon-info">
        <div class="pokemon-move">
          <h3>Move</h3>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Power</p>
          <p>Type</p>
        </div>
        <div class="pokemon-move">
          <h3>Move</h3>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Power</p>
          <p>Type</p>
        </div>
        <div class="pokemon-move">
          <h3>Move</h3>
          <p>Accuracy</p>
          <p>PP</p>
          <p>Power</p>
          <p>Type</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.pokemon-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-info {
  background-color: var(--color-background);
  box-shadow: var(--box-shadow-def);
  padding: 5px 20px;
  width: 90%;
}

.pokemon-info > p {
  display: flex;
  justify-content: space-between;
}

.pokemon-types {
  display: flex;
  justify-content: space-around;
}

.pokemon-move {
  box-shadow: var(--box-shadow-def);
  padding: 10px 15px;
  margin: 5px;
}

.pokemon-ability {
  text-transform: capitalize;
}

p {
  font-size: 0.75rem;
}
</style>
