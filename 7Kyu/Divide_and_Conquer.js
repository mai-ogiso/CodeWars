// Divide and Conquer(7kyu)
// Input [9, 3, '7', '3']
/* Output 9+3-7-3 => 2
add up the non-string integers and subtract this from the total of the string integers.
*/

function divCon(x) {
    // Whether item is number or not
    return x.reduce((acc, cur) => typeof (cur) === "number" ? acc + cur : acc - (Number(cur)), 0)
}
console.log(divCon([9, 3, '7', '3']))