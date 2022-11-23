// Isograms
// Input moose
/* Output false
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
*/

function isIsogram(str) {
    // str => arr
    let arr = str.toLowerCase().split("")
    // create a new arr with set
    let arrSet = Array.from(new Set(arr))
    // arr.length === arrSet.length => true, otherwise false
    return arr.length === arrSet.length
}

let str = "moOse"
console.log(isIsogram(str))