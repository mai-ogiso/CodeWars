// Numbers to Letters
// Input ['24', '12', '23', '22', '4', '26', '9', '8'] 
// Output codewars

function switcher(x){
    return x
    .map(item => 
    item === "27" ? "!":
    item === "28" ? "?":
    item === "29" ? " ":
    String.fromCharCode(123 - Number(item)))
    .join("")
    }