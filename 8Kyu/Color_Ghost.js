// Color Ghost(8kyu)
// Input ghost = new Ghost();
// Output
/* Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated */

class Ghost {
  constructor() {
    let randomNum = Math.random();
    this.color = (randomNum < .25)? 'white' :
                 (randomNum < .5)? 'yellow' :
                 (randomNum < .75)? 'purple' :
                 'red'
  }
}

const ghost = new Ghost();
console.log(ghost.color)