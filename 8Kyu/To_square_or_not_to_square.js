// To square(root) or not to square(root)(8kyu)
/* Input [4,3,9,7,2,1]
   Output [2,9,3,49,4,1]
*/

function squareOrSquareRoot(array) {
    return array.map(item => Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : Math.pow(item, 2));
}

const array = [4, 3, 9, 7, 2, 1]
console.log(squareOrSquareRoot(array))