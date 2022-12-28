// I love you, a little , a lot, passionately ... not at all(8kyu)
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
*/

function howMuchILoveYou(nbPetals) {
    const dictionaryPetals = {
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        0: "not at all"
    }
    return dictionaryPetals[nbPetals % 6]
}


const nbPetals = 7
console.log(howMuchILoveYou(nbPetals))