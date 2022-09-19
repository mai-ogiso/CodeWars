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

  let tempStr = row;
  let nextRow = "";

  while (tempStr.length > 1){
    for (let i = 0; i < tempStr.length-1 ; i++){
      nextRow += colorsDictionary[tempStr.slice(i,i+2)];
    };

    if (tempStr.length==2){
      return nextRow;
    }
    // initialize tempStr and nextRow
    tempStr = nextRow;
    nextRow = "";
  }
  return row;
}

console.log(triangle('RBRGBRB'))