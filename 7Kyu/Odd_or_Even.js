// Odd or Even?(7kyu)
// Input [0, 1, 4]
/* Output odd
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
    return array.reduce((acc, cur) => acc + cur, 0) % 2 ? "odd" : "even"
}

console.log(oddOrEven([0, 1, 4]))
