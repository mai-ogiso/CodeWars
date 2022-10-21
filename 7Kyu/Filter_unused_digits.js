// Filter unused digits(7kyu)
// Inupt [2015, 8, 26]
// Output 3479

function unusedDigits(...arr) {
    const digitsArr = Array.from({ length: 10 }, (_, index) => index.toString());
    const originalArr = arr.join("").split("");
    const result = digitsArr.filter(item => !originalArr.includes(item));
    return result.join("")
}

console.log(unusedDigits(12, 34, 56, 78))