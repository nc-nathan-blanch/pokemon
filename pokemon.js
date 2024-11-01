class Pokemon {
  constructor(name, hp, atk, move = "tackle") {
    if (this.constructor === Pokemon) {
      throw new Error("Cannot instantiate abstract class!");
    } else {
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.move = move;
    }
  }

  takeDamage(amount) {
    this.hp -= amount;
    if (this.hasFainted()) this.hp = 0;
  }

  useMove() {
    return this.atk;
  }

  hasFainted() {
    return this.hp <= 0;
  }
  isEffectiveAgainst({ type }) {
    return this.effectiveAgainst.includes(type);
  }
  isWeakTo({ type }) {
    return this.weakTo.includes(type);
  }
}

module.exports = { Pokemon };