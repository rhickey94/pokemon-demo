import { defineStore } from "pinia";

export const usePokemonDetailStore = defineStore("PokemonDetailStore", {
  state: () => {
    return {
      rawPokemonData: null,
      pokemonData: {
        abilities: [{ ability: { name: "" } }],
        stats: {
          hp: {
            base_stat: "",
            url: "",
          },
          attack: {
            base_stat: "",
            url: "",
          },
          defense: {
            base_stat: "",
            url: "",
          },
          speed: {
            base_stat: "",
            url: "",
          },
          "special-attack": {
            base_stat: "",
            url: "",
          },
          "special-defense": {
            base_stat: "",
            url: "",
          },
        },
      },
    };
  },
  actions: {
    async getPokemonData(id) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      this.rawPokemonData = data;
      this.setPokemonData();
    },
    setPokemonData() {
      this.pokemonData.height = (this.rawPokemonData.height * 3.937).toFixed(2);
      this.pokemonData.weight = (this.rawPokemonData.weight / 4.536).toFixed(2);
      this.pokemonData.stats = this.getPokemonStats(this.rawPokemonData.stats);
      this.pokemonData.abilities = this.rawPokemonData.abilities;
    },
    getPokemonStats(stats_array) {
      const stats = {};

      stats_array.forEach((stat) => {
        const stat_name = stat.stat.name;

        stats[stat_name] = {};
        stats[stat_name].base_stat = stat.base_stat;
        stats[stat_name].url = stat.stat.url;
      });

      return stats;
    },
  },
  getters: {
    height: (state) => state.pokemonData.height,
    weight: (state) => state.pokemonData.weight,
    hp: (state) => state.pokemonData.stats.hp.base_stat,
    attack: (state) => state.pokemonData.stats.attack.base_stat,
    defense: (state) => state.pokemonData.stats.defense.base_stat,
    speed: (state) => state.pokemonData.stats.speed.base_stat,
    specialAttack: (state) =>
      state.pokemonData.stats["special-attack"].base_stat,
    specialDefense: (state) =>
      state.pokemonData.stats["special-defense"].base_stat,
    ability: (state) => state.pokemonData.abilities[0].ability.name,
    // stats,
    // moves,
    // types
  },
});
