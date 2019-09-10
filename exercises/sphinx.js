class Sphinx {
  constructor() {
    this.name = null
    this.riddles = []
    var riddle = {riddle}

  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    } else if (this.riddles.length >= 3) {
      this.riddles.shift()
      this.riddles.push(riddle)
      console.log(this.riddles)
    } else return
  };

    attemptAnswer(answer) {
      console.log(answer)
      for(var i = 0; i < this.riddles.length; i++) {
         if (this.riddles[i].answer === answer) {
           this.riddles.slice(i, 1)
         } else console.log("NOT THE RIGHT ANSWER")
      }
    }
}

module.exports = Sphinx;
