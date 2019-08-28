class Wizard {
  constructor (object) {
      this.name = object.name
      this.spellcount = 0
      this.bearded = object.bearded || true
      if (object.bearded === false){
        this.bearded = false;
      };
  }

  incantation(spell) {
    return spell.toUpperCase()
  }

  isRested() {
    if (this.spellcount < 3) {
      return true
    } else return false
  }

  cast() {
    this.spellcount += 1
    if (this.spellcount < 3) {
    return ("MAGIC BULLET")
  } else return 'I SHALL NOT CAST!'
  }
}



module.exports = Wizard;
