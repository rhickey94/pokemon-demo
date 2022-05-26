import { mount } from "@cypress/vue";
import ContainerItem from "../ContainerItem.vue";

describe("ContainerItem", () => {
  it("playground", () => {
    mount(ContainerItem, {
      props: {
        pokemonName: "Bulbasaur",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    });
  });

  it("renders properly", () => {
    mount(ContainerItem, {
      props: {
        pokemonName: "Bulbasaur",
        sprite:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
    });
    cy.get(".pokemon-name").should("contain", "Bulbasaur");
  });
});