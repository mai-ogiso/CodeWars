// Find the middle element(7kyu)
// Input [2, 3, 1]
// Output 0

function gimme(triplet) {
    let sortedArr = triplet.slice("").sort((a, b) => a - b)
    return triplet.findIndex(item => item === sortedArr[1])
    /*　こちらでもOK */
    //  return triplet.indexOf(sortedArr[1])
}

console.log(gimme([2, 3, 1]))