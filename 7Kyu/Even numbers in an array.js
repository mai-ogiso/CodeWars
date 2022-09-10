// Input ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
// Output [4, 6, 8]

function evenNumbers(array, number) {
  return array.filter(item => !Boolean(item%2)).slice(-number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))