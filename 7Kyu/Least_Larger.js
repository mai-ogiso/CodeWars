// Least Larger(7kyu)
// Input  ( [4, 1, 3, 5, 6], 0 )  
/* Output　3
Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, 
*/

function leastLarger(a, i) {
    let sortedArr = Array.from(new Set(a)).sort((a, b) => a - b);
    let num = a[i];
    if (num === Math.max(...sortedArr)) {
        return -1
    }
    let nextNum = sortedArr[sortedArr.indexOf(num) + 1];
    return a.indexOf(nextNum);
}

console.log(leastLarger([-8, -8, -2, 0, -5, -9, 7, 1, -8, 4, 7, 8, -6, -9, -7, -4, 0], 2))
