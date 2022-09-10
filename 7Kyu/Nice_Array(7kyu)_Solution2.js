// Nice Array (7kyu)
// Input [2, 10, 9, 3, 15]

// Solution 2
/* My tactics are as follows
1) Sort the array
2) Check if the array is empty
    => the result will be false
3) Check the first item and the second 
   If the difference is not one
    => the result will be false
4) Check the last item and the second from the last item 
   If the difference is not one
    => the result will be false
5) Check if false appear twice in a row
    => the result will be false
*/

const isNice2 = (arr) =>{
  let sortedArr = Array.from(new Set(arr)).sort((a,b) => a-b);
  let resultArr =[];
  
  // Check the arr.length
  if (arr.length ===0){
    return false;
  }

  // Check the first item and the second item
  if (sortedArr[1] - sortedArr[0] !== 1){
    return false;
  }

  // Check the last item and the second from the last item
  if (sortedArr[sortedArr.length-1] - sortedArr[sortedArr.length-2] !== 1){
    return false;
  }

  for (let i = 1; i<sortedArr.length-1 ; i++){

      if (sortedArr[i+1] - sortedArr[i] === 1){
        resultArr.push(true);
      } else {
        // check the last item
        if(resultArr[resultArr.length-1] === false){
          // finish the loop
          return false;
        }
        resultArr.push(false);
      }
  }
  return true;
}