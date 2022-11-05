// Vowel Count(7kyu)
// Input abracadabra
/* Output 5
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
*/

function getCount(str) {
  return str
    .split("")
    .filter(item => item ==="a" | item === "e" | item === "i"| item === "o" | item === "u")
    .length;
}

console.log(getCount("abracadabra"))