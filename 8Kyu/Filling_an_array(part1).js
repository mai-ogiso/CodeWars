//Input arr(5)
//Output[0,1,2,3,4]

// Solution 1
const arr = N => {
  let result = [];
  for (let i = 0 ; i<N ; i++){
    result.push(i);
  }
  return result
};
console.log(arr(5));

// Solution 2
const arr2 = (N) => {
  return N ? [...Array(N).keys()] : [];
}
console.log(arr2());

// Solution 3
const arr3 = N => {
  return Array.from({length:N},(element,index) => index);
}
console.log(arr3());
