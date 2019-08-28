class Werewolf {
  constructor(name, location) {
    this.name = name
    this.location = location
    this.human = true
    this.wolf = false
    this.hungry = false
  }
  change() {
       if (this.wolf == false && this.human == true ) {
         this.human = false;
         this.wolf = true;
         this.hungry = true
       } else if (this.wolf == true && this.human == false) {
         this.human = true
         this.wolf = false
         this.hungry = false
       } else return
     }

   eat(victim) {
     if (this.wolf == true && this.hungry == true) {
        victim.alive = false
        this.human = true
        this.wolf = false
        this.hungry = false
     } else return
   }
}


module.exports = Werewolf
