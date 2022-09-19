// Moving Zeros To The End(5kyu)
// Input [false,1,0,1,2,0,1,3,"a"]
// Output [false,1,1,2,1,3,"a",0,0]

const moveZeros = arr =>{
  let newArr =[];
  let zeroArr = [];
  for (let i = 0 ; i<arr.length ; i++){
    if (arr[i] !== 0){
      newArr.push(arr[i]);
    } else {
      zeroArr.push(arr[i])
    }
  }
  return newArr.concat(zeroArr);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))