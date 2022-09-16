// Change two-dimensional array(7kyu)
// Input
// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]
// Output
// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]

function matrix(array) {
  let resultArr = [];
  for (let i =0 ; i < array.length ; i++){
    resultArr.push(array[i].map((item,index) => index === i ? item < 0 ? 0 : 1 : item))
  }
  return resultArr;
}
