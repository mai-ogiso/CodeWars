// Are they square?(7kyu)
// Input isSquare([1, 4, 9, 16]) 
// Output --> true

const isSquare = function (arr) {
    return arr.length ?
        arr.map(item => Math.sqrt(item))
            .every(item => Number.isInteger(item))
        : undefined
}

let arr = [1, 4, 9, 16]
console.log(isSquare(arr))