// Convert an array of strings to array of numbers(7kyu)
// Input ["1", "2", "3"]
// Output [1, 2, 3]

function toNumberArray(stringarray) {
    return stringarray.map(Number)
}

console.log(toNumberArray(["1", "2", "3"]))