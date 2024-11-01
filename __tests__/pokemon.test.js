const { Pokemon } = require("../pokemon")

describe("Pokemon class", () => {
  it("has a constructor, but throws an error when it is used", () => {
    expect(() => new Pokemon()).toThrow("Cannot instantiate abstract class!");
  });
  it("has takeDamage, useMove, and hasFainted method which throw errors if not overwritten by subclasses", () => {
    class PokemonType extends Pokemon {
      constructor(name, hp, atk, move) {
        super();
        this.name = name;
        this.hp = hp
        this.atk = atk
        this.move = move
      }
    }
    const pokemon = new PokemonType("eevie", 10, 20, "tackle");
    expect(() => pokemon.takeDamage()).toThrow(
      "Abstract method must be overwritten by subclass!"
    );
    expect(() => pokemon.useMove()).toThrow(
      "Abstract method must be overwritten by subclass!"
    );
    expect(() => pokemon.hasFainted()).toThrow(
      "Abstract method must be overwritten by subclass!"
    );
  });
})