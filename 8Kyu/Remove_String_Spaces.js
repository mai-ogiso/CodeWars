// Remove String Spaces(8kyu)
// Remove the spaces from the string, then return the resultant string.
// Input 8 j 8   mBliB8g
// Output 8j8mBliB8gimjB8B8jlB

function noSpace(x){
    return x.split(" ").join("")
  }
  
  console.log(noSpace("8 j 8   mBliB8g"))