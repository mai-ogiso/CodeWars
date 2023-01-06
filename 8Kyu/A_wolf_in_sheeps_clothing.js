// A wolf in sheep's clothing(8kyu)

function warnTheSheep(queue) {
    const arrLength = queue.length
    const wolfIndex = queue.indexOf("wolf")
    return wolfIndex === arrLength - 1 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${arrLength - wolfIndex - 1}! You are about to be eaten by a wolf!`;
}

const queue = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]
console.log(warnTheSheep(queue))