// WeIrD StRiNg CaSe(6Kyu)
// Input "Weird string case"
// Output "WeIrD StRiNg CaSe"

const toWeirdCase = string => {
  const newArr = string.split(" ");
  let result = [];
  for (let i = 0 ; i<newArr.length ; i++){
    result.push(newArr[i].split("").map((item,index) => index%2 ? item.toLowerCase() : item.toUpperCase()).join(""));
  }  
  return result.join(" ");
}

console.log(toWeirdCase("Weird string case"))