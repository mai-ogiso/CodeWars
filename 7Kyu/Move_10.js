// Move 10(7kyuu)
// Input testcase
// Output docdmkco

function moveTen(s){
    let stringToArr = s.split("");
    let newArr = stringToArr.map(item => 
        item.charCodeAt(0) < 113 ? String.fromCharCode(item.charCodeAt(0) + 10)
                                 : String.fromCharCode(item.charCodeAt(0) - 16));
    return newArr.join("")
  }
  
  console.log(moveTen("testcase"))