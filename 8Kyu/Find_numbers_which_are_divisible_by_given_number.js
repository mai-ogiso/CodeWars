// Find numbers which are divisible by given number(8kyu)
// Input [1, 2, 3, 4, 5, 6], 2
// Output [ 2, 4, 6 ]

function divisibleBy(numbers, divisor) {
    return numbers.filter(item => !(item % divisor))
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))