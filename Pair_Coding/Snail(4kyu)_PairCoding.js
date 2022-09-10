// Snail(4kyu)
// Input [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output [1, 2, 3, 6, 9, 8, 7, 4, 5]

/* My tactics is below 
1) Calculate the moveArr
  How many steps will the snail go forward until it changes direction?
  except for the first row(array[0])
2) Snail's moving depends on it's direction and the number of steps until direction changes
*/

const snail = array => {
  let sideLength = array[0].length;
  let directionArr =["right","down","left","up"];
  let resultArr = [];
  let moveArr =[];


  if (array.length === 1){
    let firstItem = array[0].toString();
    return firstItem === "1" ? [1] : []; 
  }

  // Caluculate the moveArr
  for (let i = 1 ; i <= sideLength - 1 ; i++){
    let j = 1
    while (j <= 2){
      moveArr.push(sideLength - i );
       j ++;
     }
  }
  //console.log(`moveArr: ${moveArr}`);
  // Initialize
  resultArr = array[0];
  let currentDirection = "right";
  let nextDirection = "down";
  let row = 0;
  let column = array[0].length-1;

  for (let i = 0; i < moveArr.length ; i++){
    currentDirection = nextDirection;
    for (let j = 1 ; j <= moveArr[i] ; j++){
      switch(currentDirection){
        case "right":
          column +=1;
          break;
        case "down":
          row += 1;
          break;
        case "left":
          column -=1;
          break;
        case "up":
          row -= 1;
          break;
      };
      resultArr.push(array[row][column])
      //console.log(`currentResultArr: ${resultArr}`)
    }

    // Check the next Direction 
    // Direction changes right -> bottom -> leftt -> up 
    nextDirection = currentDirection === "up" ? "right" 
      : directionArr[directionArr.indexOf(currentDirection) + 1];    
  }
  return resultArr;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))