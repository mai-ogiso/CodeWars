// Multiples of 3 or 5(6kyu)
// Input 10
// Output 3,5,6,9 => 23

function solution(number){
  if (number <= 0){
    return 0;
  }
  let arr = [...Array(number).keys()];
  return arr
      .filter(item => item%3 === 0 || item%5 ===0)
      .reduce((acc,cur) => acc+cur,0)
}

console.log(solution(10))