// Holiday III - Fire on the boat(7kyu)
// Input fireFight("Mast Deck Engine Water Fire")
/* Output "Mast Deck Engine Water ~~"
Change any instance of "Fire" into "~~". Then return the string.
*/

// Solution1
function fireFight1(s) {
    return s.replaceAll("Fire", "~~")
}

// Solution2
function fireFight(s) {
    return s.split(" ")
        .map(item => item.replace("Fire", "~~"))
        .join(" ")
}

console.log(fireFight("Mast Deck Engine Water Fire"))