// Small enough? - Beginner(7kyu)
// Input [66, 101], 200)
// Output true
/*You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. */

function smallEnough(a, limit){
  return a.every(item => item <= limit)
}

console.log(smallEnough([66, 101], 200))