import { createRouter, createWebHistory } from "vue-router";
import PokemonHome from "./views/PokemonHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PokemonHome,
  },
  // {
  //   path: "/pokemon/:id/:name",
  //   name: "pokemon.detail",
  //   // lazy loaded route with dynamic importing
  //   component: () => import("./views/PokemonDetail.vue"),
  //   props: true,
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "Not Found",
  //   component: () => import("./views/NotFound.vue"),
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
