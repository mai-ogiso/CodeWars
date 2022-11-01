// Complete The Pattern #1(7kyu)
// Input pattern(5):
/* Output 
1
22
333
4444
55555
*/

function pattern(n) {
    let array = Array.from({ length: n }, (_, index) => index + 1)
    return n < 1 ? "" :
        array
            .map(item => item.toString().repeat(item))
            .join("\n");
}

console.log(pattern(1))