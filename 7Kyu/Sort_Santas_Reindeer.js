// Sort Santa's Reindeer(7kyu)
/* Input 
[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua"
]
Output
[
  "Prancer Chua",
  "Dancer Moore", 
  "Dasher Tonoyan",
]
*/

const reindeerNames = [
    "Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    'Kenjiro Mori',
    'Susumu Mori',
    'Akira Mori'
]


function sortReindeer(reindeerNames) {
    let result = [];

    // "first name last name" => "last name
    // It's a unique name list
    const lastNameArr = Array.from(new Set(reindeerNames.map(item => item.split(" ").slice(-1)).flat()));
    // sort lastNameArr
    lastNameArr.sort();
    lastNameArr.forEach(str => result.push(reindeerNames.filter(item => item.includes(str))))
    return result.flat()
}

console.log(sortReindeer(reindeerNames))