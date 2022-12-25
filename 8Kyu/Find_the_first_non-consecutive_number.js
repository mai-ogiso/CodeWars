// Find the first non-consecutive number(8kyu)
// Input [1,2,3,4,6,7,8]
// Output 6

function firstNonConsecutive (arr) {
  if( arr.slice(-1) == arr[0] + arr.length -1 ){
    return  null 
  }
  for (let i = 0 ; i < arr.length ; i++){
    if (arr[i+1] - arr[i] !== 1){
      return arr[i+1]
    } 
  }
}

const arr = [1,2,3,4,6,7,8]
console.log(firstNonConsecutive(arr))