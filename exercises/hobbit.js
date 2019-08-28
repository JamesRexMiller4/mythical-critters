class Hobbit {
  constructor (name) {
    this.name = name
    this.disposition = "homebody"
    this.age = 0
    this.adult = false
    this.isShort = true
    this.old = false
    this.hasRing = (name == "Frodo")
  }

  celebrateBirthday() {
    this.age += 1

    if (this.age < 101) {
      this.old = false
    } else this.old = true

    if (this.age < 33) {
      this.adult = false
    } else this.adult = true
  }

  timeTravel(num, hobbit) {
    for (var i = 0; i < num; i++) {
      hobbit.celebrateBirthday() * num;
    }
  }
}


module.exports = Hobbit
