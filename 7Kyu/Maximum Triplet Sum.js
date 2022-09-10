// Maximum Triplet Sum
// Input [-2,-4,0,-9,2]
// Output 2+0+(-2) => 0

function maxTriSum(numbers){
  return Array
    .from(new Set(numbers))
    .sort((a,b) => b-a)
    .filter((item,index) => index<3)
    .reduce((acc,cur) => acc + cur , 0)
}

console.log(maxTriSum([-2,-4,0,-9,2]))