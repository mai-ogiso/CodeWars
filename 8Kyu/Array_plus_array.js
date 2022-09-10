// CodeWars
// Array plus array

// Solution 1
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a,b) => a+b , 0);
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// Solution 2
const arrayPlusArray2 = (arr1, arr2) =>{
  return arr1.concat(arr2).lengh < 0 ? 0 :
  arr1.concat(arr2).reduce((a,b) => a+b , 0);
}
console.log(arrayPlusArray2([],[]));
