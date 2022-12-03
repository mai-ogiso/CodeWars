// Sum of Minimums!(7kyu)
/* Input 
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
// Output 
return 1+5+20 => 26
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
*/

let arr = [[1, 2, 3, 4, 5]
    , [5, 6, 7, 8, 9]
    , [20, 21, 34, 56, 100]
]

function sumOfMinimums(arr) {
    return arr
        .map(item => Math.min(...item))
        .reduce((acc, cur) => acc + cur, 0)
}

console.log(sumOfMinimums(arr))