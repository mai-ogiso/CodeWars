// 'x' marks the spot.(7kyu)
/* Input
[
  ['x', 'o'],
  ['o', 'o']
]
 Output
 If x is not inside the array, or if x appears multiple times, return [].
 Return [0,0] when x at top left => [0, 0]
*/

const xMarksTheSpot = (input) => {
    let numberOfX = input.flat().filter(item => item === "x").length;
    if (numberOfX !== 1) {
        return []
    } else {
        let elementNum = input[0].length;
        let findIndexOfAll = input.flat().indexOf("x");
        let firstItem = Math.floor(findIndexOfAll / elementNum);
        let secondItem = findIndexOfAll % elementNum;
        return [firstItem, secondItem]
    }
}

console.log(xMarksTheSpot([
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
]))