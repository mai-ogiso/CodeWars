// Insane Coloured Triangles(2kyu)
// Input (R R G B R G B B)
// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G
// Output => G 

function triangle(row) {
  // Declaration
  const colorsDictionary = {
    "RR" : "R",
    "GG" : "G",
    "BB" : "B",
    "RG" : "B",
    "GR" : "B",
    "GB" : "R",
    "BG" : "R",
    "RB" : "G",
    "BR" : "G"
  }  

  let leftStr = row[0];
  let rightStr = row[1];
  let nextLeftStr = "";
  let curRightArr = [];
  let nextRightArr = rightStr;
  let rowCount = 0;

  if (row.length == 1){
    return row;
  }

  // first row
  rowCount += 1;
  nextLeftStr = colorsDictionary[leftStr+rightStr];
  curRightArr.push(rightStr);

  // From second row to end row
  while(rowCount < row.length-1){
    rowCount += 1;
    leftStr = nextLeftStr;
    // Initialize nextRightArr
    curRightArr = Array.from(nextRightArr);
    nextRightArr = [];
    nextRightArr.push(row[rowCount]);
    rightStr = row[rowCount];

    for (let i = 0 ; i < rowCount-1 ; i++){
     rightStr = colorsDictionary[rightStr+curRightArr[i]];
     nextRightArr.push(rightStr);
    }

    nextLeftStr = colorsDictionary[leftStr+rightStr];
  }

  return nextLeftStr;
}

console.log(triangle('B'))