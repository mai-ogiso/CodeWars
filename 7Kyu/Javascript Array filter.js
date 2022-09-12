// JavaScript Array Filter
// Input [1,2,3,6,8,10]
// Output [2,6,8,10]

function getEvenNumbers(numbersArray){
    return numbersArray.filter(item => !(item % 2))
  }
  
  console.log(getEvenNumbers([1,2,3,6,8,10]))