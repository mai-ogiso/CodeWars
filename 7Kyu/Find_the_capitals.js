// Find the capitals(7kyu)
// Input 'CodEWaRs'
// Output [0,3,4,6]

const capitals = function (word) {
    return word.split("")
        .map((item, index) => item === item.toUpperCase() ? index : "")
        .filter(item => item !== "")
};

console.log(capitals("CodEWaRs"))