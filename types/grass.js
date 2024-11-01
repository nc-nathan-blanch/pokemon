const { Pokemon } = require("../pokemon");

class Grass extends Pokemon {
  constructor(name, hp, atk, move) {
    super(name, hp, atk, move);
    this.type = "grass";
    this.effectiveAgainst = ["water"];
    this.weakTo = ["fire"];
  }
  isEffectiveAgainst({ type }) {
    return this.effectiveAgainst.includes(type);
  }
  isWeakTo({ type }) {
    return this.weakTo.includes(type);
  }
}

module.exports = { Grass };
