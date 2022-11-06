// Drawing a Cross!(7kyu)
// Input drawACross(7)
/* Output 
x     x
 x   x 
  x x  
   x   
  x x  
 x   x 
x     x
*/

const drawACross = n => {
    if (n < 3) {
      return "Not possible to draw cross for grids less than 3x3!";
     } else if(!(n % 2)) {
       return "Centered cross not possible!";
     }
  
     let halfLength = (n - 1) / 2;
     let halfArr = Array(n).fill(" ");
     halfArr.splice(halfLength,1,"x")
  
     let resultArr = []
     for (let i = 1 ; i <= halfLength ; i++){
       let baseArr = Array(n).fill(" ");
       baseArr.splice(i-1,1,"x")
       baseArr.splice(-i,1,"x")
       resultArr.push(baseArr.join(""))
     }
     resultArr.push(halfArr.join(""));
     let reverseArr = resultArr.slice(0,-1).reverse();
  
     for (let i = 0 ; i < reverseArr.length ; i ++){
       resultArr.push(reverseArr[i])
     }
     return resultArr.join("\n");
  }
  
  console.log(drawACross(7))