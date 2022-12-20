// Square(n) Sum(8kyu)
// Input [1, 2, 2]
// Output 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers) {
    return numbers.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)
}

console.log(squareSum([1, 2, 2]))