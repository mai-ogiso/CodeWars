// pick a set of first elements(8kyu)
// Input var arr = ['a', 'b', 'c', 'd', 'e'];
// Output 
// first(arr) //=> ['a'];

function first(arr, n) {
  return n ? arr.slice(0,n) : n === 0 ? [] : [arr[0]] 
}

const arr = ['a', 'b', 'c', 'd', 'e']
console.log(first(arr, 0))