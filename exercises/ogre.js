class Ogre {
  constructor(name, home) {
    this.name = name
    this.home = home || "Swamp"
    this.swings = 0

  }

  encounter(human){
      human.encounterCounter += 1
    if (human.encounterCounter % 3 === 0) {
      this.swingAt(human)
    }
  }

  swingAt(human) {
        this.swings += 1
      if (this.swings > 1 && human.knockedOut === false) {
        return human.knockedOut = true
      }
    }

  apologize(human) {
    if (human.knockedOut === true) {
      human.knockedOut = false
    }
  }
}



module.exports = Ogre
