// Possibilities Array (7kyu)
// Input [1,2,0,3]
// Output true or false

// こちらは設問を読み違えていた
const isAllPossibilities = x => {
  let minInt = Math.min(...x);
  let maxInt = Math.max(...x);
  let arrRange = x.length-1;
  // minInt < 0 ---> false
  if (minInt < 0){
    return false
  }
    return maxInt <= arrRange ? true : false;
}

const isAllPossibilities = x => {
  let originalArr = x.sort((a,b) => a-b).toString();
  let newArr = Array.from({length:x.length},(_,index) =>index).toString();
  return originalArr === newArr ? true : false;
}
console.log( isAllPossibilities( [ 3, 1, 2, 4, 0 ]))
