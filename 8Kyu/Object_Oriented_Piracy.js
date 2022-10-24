// Object Oriented Piracy(8kyu)
/* Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. */

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function () {
        return this.draft - this.crew * 1.5 > 20 ? true : false
    }
}

const titanic = new Ship(15, 10);
console.log(titanic.isWorthIt());
