// Sum of odd numbers(7kyu)
// Input 2
// Output 3 + 5 => 8

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

function rowSumOddNumbers(n) {
	if (n === 1){
    return 1
  }
  //Formula
  let firstNum = Math.pow(n , 2 ) - n +1;
  let arr = Array.from({length:n},(_, index) => index*2 + firstNum);
  return arr.reduce((acc,cur) => acc+cur,0);
}

console.log(rowSumOddNumbers(4))