const { Pokemon } = require("../pokemon");
const { Fire } = require("../types/fire");

describe("Fire type class", () => {
  it("has a constructor but throws an error if used", () => {
    expect(() => new Fire()).toThrow("Cannot instantiate abstract class!");
  });
  it("is an instance of the Pokemon class", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    expect(() => new Test()).not.toThrow("Cannot instantiate abstract class!");
    const pokemon = new Test();
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
  it("is has a type property of fire", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.type).toBe("fire");
  });
  it("is has two new properties describing an array of types it is strong/weak against/to", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    expect(pokemon.effectiveAgainst).toEqual(["grass"]);
    expect(pokemon.weakTo).toEqual(["water"]);
  });
  it("is has isEffectiveAgainst method which takes a pokemon and returns true if effective against", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const grassPokemon = { type: "grass" };
    const waterPokemon = { type: "water" };
    expect(pokemon.isEffectiveAgainst(grassPokemon)).toBe(true);
    expect(pokemon.isEffectiveAgainst(waterPokemon)).toBe(false);
  });
  it("isEffectiveAgainst method does not mutate the input pokemon", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const grassPokemon = { type: "grass" };
    const copy = { type: "grass" };
    pokemon.isEffectiveAgainst(grassPokemon);
    expect(grassPokemon).toEqual(copy);
  });
  it("is has isWeakTo method which takes a pokemon and returns true if weak to", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const waterPokemon = { type: "water" };
    const grassPokemon = { type: "grass" };
    expect(pokemon.isWeakTo(waterPokemon)).toBe(true);
    expect(pokemon.isWeakTo(grassPokemon)).toBe(false);
  });
  it("isWeakTo method does not mutate the input pokemon", () => {
    class Test extends Fire {
      constructor() {
        super();
      }
    }
    const pokemon = new Test();
    const waterPokemon = { type: "water" };
    const copy = { type: "water" };
    pokemon.isWeakTo(waterPokemon);
    expect(waterPokemon).toEqual(copy);
  });
});
