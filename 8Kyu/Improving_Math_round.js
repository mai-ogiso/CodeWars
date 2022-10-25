// Improving Math.round(x)(8kyu)
// Input (5.3035802, 3)
// Output 5.304

Math.roundTo = function (number, precision) {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
}

console.log(Math.roundTo(5.3035802, 3))