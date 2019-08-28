class Centaur {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
    this.cranky = false
    this.standing = true
    this.patience = 0
    this.layingDown = false
  }

  shoot() {
    if (this.patience < 2 && this.layingDown == false) {
        this.patience += 1
        return 'Twang!!!'
  } else if (this.layingDown == true) {
        return 'NO!'
  } else
        this.cranky = true
        return 'NO!';
  };

  run() {
    if (this.patience < 2 && this.layingDown == false ) {
      this.patience += 1
      return 'Clop clop clop clop!!!'
  } else if (this.layingDown == true) {
      return 'NO!'
  } else
      this.cranky = true
      return 'Clop clop clop clop!!!';
  };

  sleep() {
    if (this.standing == true) {
      return 'NO!'
    } else if (this.standing == false && this.layingDown == true) {
      this.cranky = false
      this.patience = 0
      return 'ZZZZ'
    } else return
  }

  layDown() {
    if (this.standing == true) {
      this.standing = false
      this.layingDown = true;
    } else return
  };

  standUp() {
    if (this.layingDown == true) {
      this.standing = true
      this.layingDown = false
    } else return
  };

  drinkPotion() {
    if (this.standing == true && this.patience != 0 && this.cranky == true) {
      this.cranky = false
      this.patience = 0
    } else if (this.layingDown == true) {
      return 'Not while I\'m laying down!'
    } else if (this.standing == true && this.patience == 0 && this.cranky == false) {
      this.cranky = true
    } else return
  }

}


module.exports = Centaur
