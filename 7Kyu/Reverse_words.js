// Reverse words(7kyu)
// "This is an example!" ==> "sihT si na !elpmaxe"

function reverseWords(str) {
    return str.split(" ").map(item => item.split("").reverse().join("")).join(" ")
}

const str = "This is an example!"
console.log(reverseWords(str))