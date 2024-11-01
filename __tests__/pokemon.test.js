const { Pokemon } = require("../pokemon")

describe("Pokemon class", () => {
  it("has a constructor, but throws an error when it is used", () => {
    expect(() => new Pokemon()).toThrow("Cannot instantiate abstract class!");
  });
  it("can be intantiated by an extended child", () => {
    class Test extends Pokemon {
      constructor() {
        super();
      }
    }
    expect(() => new Test()).not.toThrow("Cannot instantiate abstract class!");
    const pokemon = new Test();
    expect(pokemon).toBeInstanceOf(Pokemon);
  });
  it("has a default move of tackle on children", () => {
    class Test extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new Test();
    expect(pokemon.move).toBe("tackle");
  });
  it("has takeDamage method which reduces the pokemon hp by given amount", () => {
    class Test extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new Test("eevie", 100, 20, "tackle");
    pokemon.takeDamage(10);
    expect(pokemon.hp).toBe(90);
  });
  it("has useMove method which returns the atk of the pokemon", () => {
    class Test extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new Test("eevie", 100, 20, "tackle");
    expect(pokemon.useMove()).toBe(20);
  });
  it("has hasFainted method which returns true if hp <= 0", () => {
    class Test extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new Test("eevie", 100, 20, "tackle");
    pokemon.takeDamage(50);
    expect(pokemon.hasFainted()).toBe(false);
    pokemon.takeDamage(50);
    expect(pokemon.hasFainted()).toBe(true);
  });
  it("pokemon hp does not go below 0", () => {
    class Test extends Pokemon {
      constructor(name, hp, atk, move) {
        super(name, hp, atk, move);
      }
    }
    const pokemon = new Test("eevie", 100, 20, "tackle");
    pokemon.takeDamage(200);
    expect(pokemon.hasFainted()).toBe(true);
    expect(pokemon.hp).toBe(0);
  });
})