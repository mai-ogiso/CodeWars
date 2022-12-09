// Invert values(8kyu)
// Input invert([1,-2,3,-4,5])
// Output [-1,2,-3,4,-5]

const invert = array => array.map(item => item * -1)

console.log(invert([1, -2, 3, -4, 5]))