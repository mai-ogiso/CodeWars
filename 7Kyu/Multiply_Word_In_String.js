// Multiply Word in String
// Input modifyMultiply ("This is a string",3,5) 
// Output "string-string-string-string-string"

const modifyMultiply =(str,loc,num) => {
    return Array(num).fill(str.split(" ")[loc]).join("-");
  }
  
  console.log(modifyMultiply ("This is a string",3,5) )