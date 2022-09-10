// Don't give me five(7kyu)
// Input 11,19 
// Output 8

const dontGiveMeFive = (start, end) =>{
  let range = Math.abs(end-start) + 1;
  // create Array [1,2,3,4,5,6,7,8,9]
  let newArray = [...Array(range).keys()].map(item => item+start);
  // filter newArray that doesn't contain 5
  return newArray.filter(item => !item.toString().includes("5")).length;
}

console.log(dontGiveMeFive(11,19))