// Don't give me five!(7kyu)
// Input (1,9)
// Output  1,2,3,4,6,7,8,9 -> Result 8

// Solution 1
/* My tactics is below
1) The lowest digit is 5 means (Math.abs(i) % 10 === 5)
   Count the number which the lowest digit is 5
2) Subtract 1) from the range between start and end
*/
const dontGiveMeFive = (start, end) =>{
  let countFive = 0;
  for (let i = start; i <= end ; i++){
    Math.abs(i) % 10 === 5 ? countFive ++ : "";
  }
  return Math.abs(end-start) +1 -countFive;
}
console.log(dontGiveMeFive(-5,17));

// Solution 2
/* My tactics is below
1) The lowest digit is 5 means (Math.abs(i) % 10 === 5)
   Count the number which the lowest digit is 5
2) Subtract 1) from the range between start and end
*/

const dontGiveMeFive2 = (start, end) =>{
  let range = Math.abs(end-start) + 1;
  let countTillFive = 0;
  let countFive = false;

  // This loop will run 9 times at the most.
  // Because 5 is appear once every 10.
  for (let i = start; i <= end ; i++){
    if (Math.abs(i) % 10 === 5){
       countTillFive ++;
       countFive = true;
       break;
    }
    countTillFive ++;
  }
  console.log(`countFive: ${countFive} , countTillFive: ${countTillFive}`)

  // Calculate the rest range
  // If 5 didn't appear once, result will be the range between start and end.
  // If 5 appeared once at least, result will be calculated by the rest range.

  let result = 0;
  if (countFive === false){
    result = range;
  } else {
    result = range - Math.floor((range-countTillFive)/10) - 1;
  }
  return result;
}

console.log(dontGiveMeFive2(1,90));
