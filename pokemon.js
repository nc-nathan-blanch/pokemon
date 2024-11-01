class Pokemon {
  constructor(name, hp, atk, move = "tackle") {
    if (this.constructor === Pokemon) {
      throw new Error("Cannot instantiate abstract class!");
    }
  }

  takeDamage() {
    throw new Error("Abstract method must be overwritten by subclass!");
  }

  useMove() {
    throw new Error("Abstract method must be overwritten by subclass!");
  }

  hasFainted() {
    throw new Error("Abstract method must be overwritten by subclass!");
  }
}

module.exports = { Pokemon };