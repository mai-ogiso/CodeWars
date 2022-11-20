// Game Hit the target(7kyu)
/* Input 
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
/ Output
[
  [' ', ' ', ' ', ' '],
  [' ', 'x', '>', ' '], --> return false
  [' ', '', ' ', ' '],
  [' ', ' ', ' ', ' ']
] 
*/

const mtrx = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '>', ' ', 'x'],
    [' ', ' ', '', ' ', ' ']
];

const solution = mtrx => {
    const arrowArr = mtrx.filter(item => item.includes(">")).flat();
    const arrowIndex = arrowArr.indexOf(">");
    return arrowArr.indexOf("x") >= arrowIndex
}

console.log(solution(mtrx))