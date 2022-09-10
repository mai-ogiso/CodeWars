// Sort with a sorting array
// Input ['z', 'x', 'y'], [0, 2, 1]
// Output ['z', 'y', 'x']

const sort = (initialArray, sortingArray) => {
  let result =[];
  let index = "";
  for (let i = 0 ; i < initialArray.length ; i++){
    index = sortingArray.indexOf(i);
    result.push(initialArray[index]);
  }
  return result
};

console.log(sort(['z', 'x', 'y'], [0, 2, 1]))