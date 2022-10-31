// Draw stairs(8kyu)
// Input n = 3
/* Output "I\n I\n  I"
I
 I
  I
*/

function drawStairs(n) {
    let newArr = Array.from({ length: n });
    return newArr.map((_, index) => "I\n" + " ".repeat(index + 1)).join("").trim()
}

console.log(drawStairs(3))