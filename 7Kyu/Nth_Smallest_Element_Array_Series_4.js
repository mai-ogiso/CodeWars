// Nth Smallest Element (Array Series #4)(7kyu)
// Input arr=[15,20,7,10,4,3]   n=3
/* Output return 7 
Given an array/list of integers, find the Nth smallest element in the array.
*/

function nthSmallest(arr, pos) {
    return arr.slice().sort((a, b) => a - b)[pos - 1]
}

console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3))