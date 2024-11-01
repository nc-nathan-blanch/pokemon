const { Pokemon } = require("../pokemon");

class Water extends Pokemon {
  constructor(name, hp, atk, move) {
    super(name, hp, atk, move);
    if (this.constructor === Water) {
      throw new Error("Cannot instantiate abstract class!");
    } else {
      this.type = "water";
      this.effectiveAgainst = ["fire"];
      this.weakTo = ["grass"];
    }
  }
}

module.exports = { Water };
