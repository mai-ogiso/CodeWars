// Find Multiples of a Number(8kyu)
/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.*/
// Input (4, 27)
// Output [4, 8, 12, 16, 20, 24]

function findMultiples(integer, limit) {
    let num = Math.floor(limit / integer)
    return Array.from({ length: num }, (_, index) => integer * (index + 1))
}

console.log(findMultiples(4, 27))