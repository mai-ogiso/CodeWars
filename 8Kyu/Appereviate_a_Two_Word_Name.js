//Abbreviate a Two Word Name(8kyu)
//Input Write a function to convert a name into initials.
// Sam Harris
// Output S.H

function abbrevName(name){
    return name.split(" ").map(item => item[0].toUpperCase()).join(".")
}

console.log(abbrevName("Sam Harris"))