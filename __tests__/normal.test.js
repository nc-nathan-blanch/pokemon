const { Pokemon } = require("../pokemon");
const { Normal } = require("../types/normal");

describe("Normal type class", () => {
  it("has a constructor but throws an error if used", () => {
    expect(() => new Normal()).toThrow("Cannot instantiate abstract class!");
  });
  it("is an instance of the Pokemon class", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    expect(() => new Test()).not.toThrow("Cannot instantiate abstract class!");
    const pokemon = new Test();
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
  it("is has a type property of normal", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.type).toBe("normal");
  });
  it("is has two new properties describing an array of types it is strong/weak against/to", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.effectiveAgainst).toEqual([""]);
    expect(pokemon.weakTo).toEqual([""]);
  });
  it("is has isEffectiveAgainst method which takes a pokemon and returns true if effective against", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const waterPokemon = { type: "water" };
    const firePokemon = { type: "fire" };
    const grassPokemon = { type: "grass" };
    expect(pokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
    expect(pokemon.isEffectiveAgainst(firePokemon)).toBe(false);
    expect(pokemon.isEffectiveAgainst(grassPokemon)).toBe(false);
  });
  it("isEffectiveAgainst method does not mutate the input pokemon", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const waterPokemon = { type: "water" };
    const copy = { type: "water" };
    pokemon.isEffectiveAgainst(waterPokemon);
    expect(waterPokemon).toEqual(copy);
  });
  it("is has isWeakTo method which takes a pokemon and returns true if weak to", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const firePokemon = { type: "fire" };
    const waterPokemon = { type: "water" };
    const grassPokemon = { type: "grass" };
    expect(pokemon.isWeakTo(firePokemon)).toBe(false);
    expect(pokemon.isWeakTo(waterPokemon)).toBe(false);
    expect(pokemon.isWeakTo(grassPokemon)).toBe(false);
  });
  it("isWeakTo method does not mutate the input pokemon", () => {
    class Test extends Normal {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const firePokemon = { type: "fire" };
    const copy = { type: "fire" };
    pokemon.isWeakTo(firePokemon);
    expect(firePokemon).toEqual(copy);
  });
});
