// CodeWars
// Sum Mixed Array

// Input [9, 3, '7', '3']
// Output (9+3+7+3)  => 22 

// Solution 1
const sumMix = (array) => {
  return array.reduce((a,b) => Number(a)+Number(b) , 0);
}
console.log(sumMix(['3',6, 2]));

// Solution 2
const sumMix2 = (array) => {
  return array
  .map(item => Number(item))
  .reduce((acc,cur) => acc + cur,0)
};
console.log(sumMix2([1,2,'3']))

// Solution 3
const sumMix3 = (array) => {
  let result = 0;
  array.forEach(item => {
    result += Number(item);
  })
  return result;
}
console.log(sumMix3([1,2,'4']))

// Solution 4
const sumMix4 = (array) => {
  return array
  .map(item => + item)
  .reduce((acc,cur) => acc + cur,0)
};
console.log(sumMix4([1,2,'4']))


