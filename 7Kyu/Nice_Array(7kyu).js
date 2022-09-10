// Nice Array (7kyu)
// Input [2, 10, 9, 3, 15]

// Solution 1
/* My tactics is below
1) Sort the array
2) make a nested array 
   each array has numbers which difference is one
3) confirm whether there is one nested array which length is one
    => the result will be false
*/

const isNice = (arr) =>{
  let sortedArr = arr.sort((a,b) => a-b); // => [2,3,9,10,15]
  let newArr = []
  // Initialize
  let nestedArr = [arr[0]];
  for (let i = 0 ; i < sortedArr.length-1 ; i++){
    if (sortedArr[i+1] - sortedArr[i] === 1){
      nestedArr.push(sortedArr[i+1]);
    } else {
      newArr.push(nestedArr);
      nestedArr = [sortedArr[i+1]];
    }
  }
  
  // Push the item of last index
  newArr.push(nestedArr); // => [[2,3],[9,10],[15]]
  
  // If there is an array with one length => false
  let result = true;
  newArr.forEach(element => {
    if (element.length ===1){
      result = false;
    }
  });
  return result;
}
console.log(isNice([2,9,15,3,10]))
