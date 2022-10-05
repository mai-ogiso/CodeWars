// Sum of two lowest positive integers(7kyu)
// Input [19, 5, 42, 2, 77]
// Output 5 + 2 => 7
/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. */

function sumTwoSmallestNumbers(number) {  
    number.sort((a,b) => a-b)
    return number.slice(0,2).reduce((acc,cur) => acc+cur , 0)
  }
  
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))