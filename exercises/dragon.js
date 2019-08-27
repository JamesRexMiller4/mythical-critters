class Dragon {
  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.meals = 0
  }
  eat() {
    if (this.meals < 2) {
      this.meals += 1
    } else this.hungry = false
  }






}



module.exports = Dragon;
