// Hells Kitchen(7kyu)
// Input i am a chef
/* Ouput *!!!! @M!!!! @!!!! CH*F!!!!
Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

function gordon(str) {
    const dictionary = {
        "A": "@",
        "E": "*",
        "I": "*",
        "O": "*",
        "U": "*"
    };
    let arr = str
        .toUpperCase()
        .split(" ")
        .map(item => item.split(""));
    let vowel = Object.keys(dictionary);
    let resultArr = arr.map(item => item.map(word => vowel.includes(word) ? dictionary[word] : word));
    return resultArr.map(item => item.join("") + "!!!!").join(" ")
}

console.log(gordon("i am a chef"))