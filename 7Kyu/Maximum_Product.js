// Maximum Product(7kyu)
// Input [1, 2, 3]
// Output 2 * 3 = 6
/* Find the maximum product obtained from multiplying 2 adjacent numbers in the array. */

function adjacentElementsProduct1(array) {
    let newArr = array.map((item, index) => index === array.length - 1 ? 0 : item * array[index + 1])
    newArr.pop();
    return Math.max(...newArr)
}

console.log(adjacentElementsProduct([1, 2, 3]))

function adjacentElementsProduct(a) {
    return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1))
}