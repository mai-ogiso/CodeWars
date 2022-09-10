// Possibilities Array
// Input [1,2,0,3]
// Output [0,1,2,3] => true

const isAllPossibilities = arr =>{
  return arr.length===0 ? false : [...Array(arr.length).keys()].join() === arr.sort((a,b)=>a-b).join()
}

console.log(isAllPossibilities([1,1,0,3]))
