// Lost number in number sequence(7kyu)
// Input  [3,2,4,6,7,8,1,9]
// Output  5
/*An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.*/

function findDeletedNumber(arr, mixArr) {
    return arr.find(item => !(mixArr.includes(item))) || 0;
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]))