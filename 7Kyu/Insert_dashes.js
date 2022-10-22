// Insert dashes(7kyu)
// Input 454793 
// Output 4547-9-3

function insertDash(num) {
    const arr = num.toString().split("");
    return arr.map((item, index) => item % 2 && arr[index + 1] % 2 ? item + "-" : item).join("")
}

console.log(insertDash(454793))