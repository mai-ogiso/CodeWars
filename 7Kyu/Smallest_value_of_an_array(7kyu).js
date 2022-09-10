// Smallest value of an array
// Input ([1,2,3,4,5], 'value')
// Output 1

function min(arr, toReturn) {
  let minValue = Math.min(...arr);
  switch(toReturn){
    case "value":{
      return minValue;
    }
    case "index":{
      return arr.indexOf(minValue);
    }
  }
}

console.log(min([2,3,4,1,5], 'index'))