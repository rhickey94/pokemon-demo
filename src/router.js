import { createRouter, createWebHistory } from "vue-router";
import PokemonHome from "@/views/PokemonHome.vue";
import PokemonDetail from "@/views/PokemonDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PokemonHome,
  },
  {
    path: "/pokemon/:pokemonId",
    name: "Pokemon Detail",
    component: PokemonDetail,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
