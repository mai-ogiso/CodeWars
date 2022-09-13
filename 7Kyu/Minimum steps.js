// Minimum Steps(7kyu)
// Input [4,6,3], 7)
// Output 3 + 4 >= 7 Result = 1

const minimumSteps = (numbers,value) =>{
  numbers.sort((a,b) => a-b);
  let sumNum = 0;
  let result = 0
  for (let i = 0 ; i < numbers.length ; i++){
    sumNum += numbers[i];
    if (sumNum >= value){
      result = i;
      break;
    }
  }
  return result;
}

console.log(minimumSteps([4,6,3], 7))