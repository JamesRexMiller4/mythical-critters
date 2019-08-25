class Vampire {
  constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true

  }
  drink() {
    if (this.thirsty = true) {
      console.log('Time to suck some blood!')
      return this.thirsty = false
    } else return 'I vant to take a nap'
  }
}


module.exports = Vampire
