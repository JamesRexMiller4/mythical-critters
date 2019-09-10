class Direwolf {
  constructor(name, home, size) {
    this.name = name
    this.home = home || "Beyond the Wall"
    this.size = size || 'Massive'
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2
      && stark.safe === false) {
        this.huntsWhiteWalkers = false
        this.starksToProtect.push(stark)
        stark.safe = true
        stark.houseWords()
  } else {
    return
  }
}

  leave(stark) {
      if (stark.safe === true){
        this.starksToProtect.pop()
        stark.safe = false
      }
  }
}


module.exports = Direwolf
