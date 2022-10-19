// The highest profit wins!(7kyu)
// Input [1,2,3,4,5]
// Output [1,5]

function minMax(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [min,max];
  }
  
  console.log(minMax([1,2,3,4,5]))