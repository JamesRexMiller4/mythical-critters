class Fairy {
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
    this.kidstaken = 0
  }

  believe() {
    this.dust += 10
  }

  receiveBelief() {
    this.dust += 1
  }

  makeDresses(dresses) {
    for (var i = 0; i < dresses.length; i++) {
      this.clothes.dresses.push(dresses[i])
    }
  }

  provoke() {
    if (this.disposition === 'Good natured') {
      this.disposition = 'Vengeful'
    }
  }

  replaceInfant(infant) {
    if (this.disposition === 'Vengeful' && this.kidstaken < 2) {
      infant.disposition = 'Malicious'
      this.humanWards.push(infant)
      this.kidstaken += 1
    } else if (this.kidstaken >= 2) {
      this.disposition = 'Good natured'
      return infant
    } else return infant
  }
}



module.exports = Fairy
