// If you can't sleep, just count sheep!!
// Input 3
// Output 1 sheep...2 sheep...3 sheep...

// Solution 1
const countSheep = num => {
  let resultStr = "";
  for (let i = 1 ; i <= num ; i++){
    resultStr += `${i} sheep...`;
  }
  return resultStr;
}

console.log(countSheep(1));

// Solution 2
const countSheep2 = num => {
  return [...Array(num).keys()].map(item => `${item+1} sheep...`).join();
}

console.log(countSheep2(3))