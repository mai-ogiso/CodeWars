// Is there a vowel in there?(8kyu)
/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel. */// Input [118,117,120,121,117,98,122,97]
// Output [ 118, 'u', 120, 121, 'u', 98, 122, 'a' ]

function isVow(a) {
    let vowel = ["a", "e", "i", "o", "u"]
    // vowelObj = { '97': 'a', '101': 'e', '105': 'i', '111': 'o', '117': 'u' }
    let vowelObj = vowel.reduce((obj, item) => {
        obj[item.charCodeAt(0)] = item;
        return obj;
    }, {});
    // vowelNum = [ 97, 101, 105, 111, 117 ]
    let vowelNum = Object.keys(vowelObj).map(Number)
    return a.map(item => vowelNum.includes(item) ? vowelObj[item] : item)
}

console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97]))