const { Pokemon } = require("../pokemon");
const { Water } = require("../types/water");

describe("Water type class", () => {
  it("has a constructor, but throws an error when it is used", () => {
    expect(() => new Water()).toThrow("Cannot instantiate abstract class!");
  });
  it("can be intantiated by an extended child", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    expect(() => new Test()).not.toThrow("Cannot instantiate abstract class!");
    const pokemon = new Test();
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
  it("is has a type property of water", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.type).toBe("water");
  });
  it("is has two new properties describing an array of types it is strong/weak against/to", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.effectiveAgainst).toEqual(["fire"]);
    expect(pokemon.weakTo).toEqual(["grass"]);
  });
  it("is has isEffectiveAgainst method which takes a pokemon and returns true if effective against", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const firePokemon = { type: "fire" };
    const grassPokemon = { type: "grass" };
    expect(pokemon.isEffectiveAgainst(firePokemon)).toBe(true);
    expect(pokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
  });
  it("isEffectiveAgainst method does not mutate the input pokemon", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const firePokemon = { type: "fire" };
    const copy = { type: "fire" };
    pokemon.isEffectiveAgainst(firePokemon);
    expect(firePokemon).toEqual(copy);
  });
  it("is has isWeakTo method which takes a pokemon and returns true if weak to", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const grassPokemon = { type: "grass" };
    const firePokemon = { type: "fire" };
    expect(pokemon.isWeakTo(grassPokemon)).toBe(true);
    expect(pokemon.isWeakTo(firePokemon)).toBe(false);
  });
  it("isWeakTo method does not mutate the input pokemon", () => {
    class Test extends Water {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const grassPokemon = { type: "grass" };
    const copy = { type: "grass" };
    pokemon.isWeakTo(grassPokemon);
    expect(grassPokemon).toEqual(copy);
  });
});
