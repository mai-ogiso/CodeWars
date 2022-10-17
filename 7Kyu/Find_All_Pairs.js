// Find all pairs(7kyu)
// Input [1, 2, 5, 6, 5, 2]
// Output 2

const duplicates = array => {
    const itemArr = Array.from(new Set(array))
    let result = 0
    itemArr.forEach(item => {
      result += Math.floor(array.filter(value => value === item).length / 2);
    })
    return result;
  }
  
  console.log(duplicates([1, 2, 5, 6, 5, 2]));
  