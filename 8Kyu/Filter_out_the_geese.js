// Filter out the geese(8kyu)
/* Input 
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// geesearray
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// Output ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]*/

function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(item => !geese.includes(item))
};

let birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
console.log(gooseFilter(birds))