// Testing 1-2-3(7kyu)
// Input ["a", "b", "c"]
// Output ["1: a", "2: b", "3: c"]

const number = array =>{
    return array.map((item,index) => index + 1 + ": " + item);
  }
  
  console.log(number(["a", "b", "c"]))