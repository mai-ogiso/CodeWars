// Minimize Sum Of Array (Array Series #1)(7kyu)
// Input [5,4,2,3]
// Output 5*2 + 3*4 = 22

const minSum = arr => {
  let ascendingArr = arr.sort((a,b) => a-b);
  let descendingArr = arr.slice().sort((a,b) => b-a);
  let arrLength = arr.length;
  let result = 0;
  for (let i = 0 ; i < arrLength/2 ; i++){
    result += ascendingArr[i]* descendingArr[i];
  }
  return result;
}

console.log(minSum([12,6,10,26,3,24]))