// Product Of Maximums Of Array(7kyu)
// Input ([4,3,5], 2)
// Output 4*5 => 20

const maxProduct = (numbers,size) => {
  numbers.sort((a,b) =>b-a);
  console.log(numbers)
  return numbers.filter((_,index) => index < size).reduce((acc,cur) => acc*cur,1);
}

console.log(maxProduct([4,3,5], 2))