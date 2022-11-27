// Substring fun(7kyu)
/* Input 
["yoda", "best", "has"]
  ^        ^        ^
  n=0     n=1     n=2
// Output 
  -->  "yes"
*/

function nthChar(words) {
    return words.map((item, index) => item[index]).join("")
}

let words = ["yoda", "best", "has"]
console.log(nthChar(words))