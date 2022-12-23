// Count by X(8kyu)
// Input countBy(1,10)
// Output [1,2,3,4,5,6,7,8,9,10]

function countBy(x, n) {
  return Array.from({length:n},(_,index) => (index+1) * x);
}

console.log(countBy(2, 5))