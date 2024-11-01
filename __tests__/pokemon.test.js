const { Pokemon } = require("../pokemon")

describe("Pokemon class", () => {
  it("has a constructor, but throws an error when it is used", () => {
    expect(() => new Pokemon()).toThrow("Cannot instantiate abstract class!");
  });
  it("can be intantiated by an extended child", () => {
    class TestPokemon extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    expect(() => new TestPokemon()).not.toThrow(
      "Cannot instantiate abstract class!"
    );
    const pokemon = new TestPokemon();
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
  it("has takeDamage method which reduces the pokemon hp by given amount", () => {
    class TestPokemon extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new TestPokemon("eevie", 100, 20, "tackle");
    pokemon.takeDamage(10);
    expect(pokemon.hp).toBe(90);
  });
  it("has useMove method which returns the atk of the pokemon", () => {
    class TestPokemon extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new TestPokemon("eevie", 100, 20, "tackle");
    expect(pokemon.useMove()).toBe(20);
  });
  it("has hasFainted method which returns true if hp <= 0", () => {
    class TestPokemon extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new TestPokemon("eevie", 100, 20, "tackle");
    pokemon.takeDamage(50);
    expect(pokemon.hasFainted()).toBe(false)
    pokemon.takeDamage(50);
    expect(pokemon.hasFainted()).toBe(true)
  });
  it("pokemon hp does not go below 0", () => {
    class TestPokemon extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new TestPokemon("eevie", 100, 20, "tackle");
    pokemon.takeDamage(200);
    expect(pokemon.hasFainted()).toBe(true)
    expect(pokemon.hp).toBe(0)
  });
})