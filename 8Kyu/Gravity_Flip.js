// Gravity Flip(8kyu)
// Input * 'R', [3, 2, 1, 2]
// Output [1, 2, 2, 3]

const flip = (d, a) => {
    return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)
}

console.log(flip('R', [3, 2, 1, 2]))