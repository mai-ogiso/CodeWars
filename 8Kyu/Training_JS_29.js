// Training JS #29: methods of arrayObject---concat() and join()

// Input [[1,3,5],[2,4,6]]
// Output 6>5>4>3>2>1

// Solution 1
function bigToSmall(arr){
  return arr.flat().sort((a,b) => b-a).join(">");
}
console.log(bigToSmall([[1,2],[3,4],[5,6]]));

// Solution 2
const bigToSmall2 = (arr) => {
  return [].concat(...arr).sort((a,b) => b-a).join(">")
}
console.log(bigToSmall2([[1,2],[3,4],[5,6]]))