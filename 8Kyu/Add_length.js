// Add Length(8kyu)
/* 
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
 */

function addLength(str) {
    const arr = str.split(" ")
    return arr.map(item => item + " " + item.length)
}

const str = "apple ban"

console.log(addLength(str))