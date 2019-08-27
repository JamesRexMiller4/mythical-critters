class Medusa {
  constructor(name) {
    this.name = name
    this.statues = []
  }
  stare(victim) {
    victim.stoned = true
    if (this.statues.length < 3){
    this.statues.push(victim)
  } else if (this.statues.length <= 4){
    this.statues.shift()
    this.statues.push(victim)
  }
  }
}

module.exports = Medusa
