// Sorted? yes? no? how?
// Input [15, 7, 3]
// Output
/* "yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise */

function isSortedAndHow(array) {
    let originalArray = array.join("");
    let ascendingArray = array.slice().sort((a,b) => a-b).join("");
    let descendingArray = array.slice().sort((a,b) => b-a).join("");
    return originalArray === ascendingArray ? "yes, ascending" : originalArray === descendingArray ? "yes, descending" : "no"
  }
  