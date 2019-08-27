class Pirate {
  constructor (name, job) {
    this.name = name
    this.job = job || "Scallywag"
    this.cursed = false
    this.heinousact = 0
    this.booty = 0
  }
  commitHeinousAct() {
    if (this.heinousact < 2) {
      return this.heinousact += 1
    } else this.cursed = true
  }

  robShip() {
    this.booty = this.booty + 100
    return "YAARRR!"
  }
}


module.exports = Pirate
