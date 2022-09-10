// CodeWars
// Get the mean of an array

// Input [1,2,3,4,5] 
// Output (1+2+3+4+5) / 5 => 3 

// Solution 1
const getAverage = (marks) =>{
  return Math.floor(marks.reduce((acc,cur) => acc+cur,0)/marks.length);
}
console.log(getAverage([1,2,3,4,5,]));

// Solution 2
const getAverage2 = (marks) =>{
  let result = 0;
  marks.forEach(a =>{
    result += a;
  });
  result = Math.floor(result / marks.length);
  return result;
}
console.log(getAverage2([1,2,3,4,5,]));

// Solution3
const getAverage3 = (marks) =>{
  return ~~(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);
}
console.log(getAverage3([1,2,3,4,5,6,7,8]));
