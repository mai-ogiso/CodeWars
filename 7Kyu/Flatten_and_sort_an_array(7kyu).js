// Flatten and sort an array(7kyu)
// Input [3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
// Output [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Solution1
const flattenAndSort = array => {
  return array.flat().sort((a,b) => a-b);
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

// Solution2
const flattenAndSort2 = array => {
  return [].concat(...array).sort((a,b) => a-b);
}
console.log(flattenAndSort2([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
