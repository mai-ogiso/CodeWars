// Transpose two strings in an array(7kyu)
// Input ['Hello','World'])
// Output
/*
H W  
e o  
l r  
l l  
o d
*/

const transposeTwoStrings = array => {
  let firstArr = array[0];
  let secondArr = array[1];
  let count = firstArr.length>= secondArr.length ? firstArr.length:secondArr.length;
  let resultStr = "";

  for (let i = 0 ; i < count ; i++){
    let firstStr = firstArr[i] ==="" ? " " : firstArr[i];
    let secondStr = secondArr[i]==="" ? " " : secondArr[i];
    resultStr += firstStr + secondStr + "\n";
  }
	return resultStr;
}

console.log(transposeTwoStrings(['Hello','World']))