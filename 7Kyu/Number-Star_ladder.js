// Number-Star ladder(7kyu)
// Input pattern(3)
/* Output "1\n1*2\n1**3"
1
1*2
1**3
*/

function pattern(n) {
    return [...Array(n)]
        .map((_, index) => index + 1)
        .map(item => item === 1 ? 1 : "1" + "*".repeat(item - 1) + item)
        .join("\n");
}

console.log(pattern(3))