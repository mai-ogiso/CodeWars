// Bingo ( Or Not )(7kyu)
/*Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. */
// Input [21,13,2,7,5,14,7,15,9,10]
// Output "WIN"

function bingo(a) {
    const bingoArr = [2, 7, 9, 14, 15];
    let filteredArr = a.filter(item => item == 2 | item == 7 | item == 9 | item == 14 | item == 15);
    return bingoArr.every(item => filteredArr.includes(item)) ? "WIN" : "LOSE";
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
