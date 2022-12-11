// Count the Monkeys!(8kyu)

function monkeyCount(n) {
    return Array.from({ length: n }, (_, index) => index + 1)
}

console.log(monkeyCount(10))