<script setup>
import { apis } from "../store/apis";
import { ref, computed, onMounted } from "vue";
import PokemonHeader from "../components/PokemonHeader.vue";
import ContainerItem from "../components/ContainerItem.vue";

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
  <div class="pokemon-detail-container">
    <PokemonHeader />
    <div class="pokemon-detail">
      <ContainerItem :pokemon-id="id" :pokemon-name="name" />
      <div class="pokemon-info">
        <p><span>Height</span><span>TBD</span></p>
        <p><span>Weight</span><span>TBD</span></p>
        <p><span>Ability</span><span>TBD</span></p>
      </div>
      <h2>Stats</h2>
      <div class="pokemon-info">
        <p><span>HP</span><span>TBD</span></p>
        <p><span>Attack</span><span>TBD</span></p>
        <p><span>Defense</span><span>TBD</span></p>
        <p><span>Spc. Attack</span><span>TBD</span></p>
        <p><span>Spc. Defense</span><span>TBD</span></p>
        <p><span>Speed</span><span>TBD</span></p>
      </div>
      <h2>Types</h2>
      <div class="pokemon-info pokemon-types">
        <span>TBD</span>
        <span>TBD</span>
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

p {
  font-size: 0.75rem;
}
</style>
