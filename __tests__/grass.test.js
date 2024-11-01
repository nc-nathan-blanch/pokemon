const { Pokemon } = require("../pokemon");
const { Grass } = require("../types/grass");

describe("Grass type class", () => {
    it("has a constructor but throws an error if used", () => {
      expect(() => new Grass()).toThrow("Cannot instantiate abstract class!");
    });
    it("is an instance of the Pokemon class", () => {
      class Test extends Grass {
        constructor() {
          super();
        }
      }
      expect(() => new Test()).not.toThrow(
        "Cannot instantiate abstract class!"
      );
      const pokemon = new Test();
      expect(pokemon).toBeInstanceOf(Pokemon);
    });
      it("is has a type property of grass", () => {
        class Test extends Grass {
          constructor() {
            super();
          }
        }
        const pokemon = new Test();
        expect(pokemon.type).toBe("grass");
      });
      it("is has two new properties describing an array of types it is strong/weak against/to", () => {
        class Test extends Grass {
          constructor() {
            super();
          }
        }
        const pokemon = new Test();
        expect(pokemon.effectiveAgainst).toEqual(["water"]);
        expect(pokemon.weakTo).toEqual(["fire"]);
      });
      it("is has isEffectiveAgainst method which takes a pokemon and returns true if effective against", () => {
        class Test extends Grass {
          constructor() {
            super();
          }
        }
        const pokemon = new Test();
        const waterPokemon = { type: "water" };
        const firePokemon = { type: "fire" };
        expect(pokemon.isEffectiveAgainst(waterPokemon)).toBe(true);
        expect(pokemon.isEffectiveAgainst(firePokemon)).toBe(false);
      });
      it("isEffectiveAgainst method does not mutate the input pokemon", () => {
        class Test extends Grass {
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
        class Test extends Grass {
          constructor() {
            super();
          }
        }
        const pokemon = new Test();
        const firePokemon = { type: "fire" };
        const waterPokemon = { type: "water" };
        expect(pokemon.isWeakTo(firePokemon)).toBe(true);
        expect(pokemon.isWeakTo(waterPokemon)).toBe(false);
      });
      it("isWeakTo method does not mutate the input pokemon", () => {
        class Test extends Grass {
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
