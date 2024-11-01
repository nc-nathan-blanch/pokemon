const { Pokemon } = require("../pokemon");

class Normal extends Pokemon {
  constructor(name, hp, atk, move) {
    super(name, hp, atk, move);
    if (this.constructor === Normal) {
      throw new Error("Cannot instantiate abstract class!");
    } else {
      this.type = "normal";
      this.effectiveAgainst = [""];
      this.weakTo = [""];
    }
  }
}

module.exports = { Normal };
