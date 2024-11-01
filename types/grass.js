const { Pokemon } = require("../pokemon");

class Grass extends Pokemon {
  constructor(name, hp, atk, move) {
      super(name, hp, atk, move);
      if (this.constructor === Grass) {
        throw new Error("Cannot instantiate abstract class!");
      } else {
        this.type = "grass";
        this.effectiveAgainst = ["water"];
        this.weakTo = ["fire"];
      }
  }
}

module.exports = { Grass };
