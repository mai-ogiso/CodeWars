// Spacify(7kyu)
// Input hello world
// Output "h e l l o   w o r l d"

function spacify(str) {
    return str.split("").map(item => item + " ").join("").slice(0,-1)
  }
  
  console.log(spacify("hello world"))