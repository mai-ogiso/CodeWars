// Sort an array by value and index (7kyu)
// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Solution 1
const sortByValueAndIndex = array => {
  // arr [23, 2, 3, 4, 5]
  // productArr [ 23, 4, 9, 16, 25 ]
  // sortedArr [ 4, 9, 16, 23, 25 ]
  // indexArr [ 1, 2, 3, 0, 4 ]

  let productArr = array.map((item,index) => item * (index+1));
  let sortedArr = Array.from(productArr);
  sortedArr.sort((a,b)=>a-b);
  let indexArr = sortedArr.map((item) => productArr.indexOf(item));
  let result =[];
  indexArr.forEach(item => {
    result.push(array[item]);
  })
  return result;
}

// Solution 2
/* 二次元配列を作る 
[ [ 23, 23 ], [ 2, 4 ], [ 3, 9 ], [ 4, 16 ], [ 5, 25 ] ]
*/

function sortByValueAndIndex2(array) {
  return array
    .map((x, i) => [x, x * i + x])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[0])
}

console.log(sortByValueAndIndex2([23, 2, 3, 4, 5]))

