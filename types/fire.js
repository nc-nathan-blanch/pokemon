const { Pokemon } = require("../pokemon");

class Fire extends Pokemon {
  constructor(name, hp, atk, move) {
    super(name, hp, atk, move);
    if (this.constructor === Fire) {
      throw new Error("Cannot instantiate abstract class!");
    } else {
      this.type = "fire";
      this.effectiveAgainst = ["grass"];
      this.weakTo = ["water"];
    }
  }
}

module.exports = { Fire };
