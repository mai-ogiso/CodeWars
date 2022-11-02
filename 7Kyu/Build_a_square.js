// Build a square(7kyu)
// Input n = 3
/* Output 
+++
+++
+++
*/

function generateShape1(integer) {
    let result = [];
    for (let i = 1; i <= integer; i++) {
        result.push("+".repeat(integer))
    }
    return result.join("\n")
}

function generateShape2(integer) {
    return [...Array(integer)].fill("+".repeat(integer)).join("\n")
}

console.log(generateShape(3))