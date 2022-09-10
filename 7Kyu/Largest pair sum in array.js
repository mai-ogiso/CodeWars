// Largest pair sum in array(7kyu)
// Input [10, 14, 2, 23, 19]
// Output 42 (= 23 + 19)

const largestPairSum = array => {
    let sortedArr = array.sort((a,b) => b-a);
    return sortedArr[1] + sortedArr[0];
  }
  
  console.log(largestPairSum([10, 14, 2, 23, 19]))