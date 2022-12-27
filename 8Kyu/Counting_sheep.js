// Counting sheep...(8kyu)
/* Input 
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]*/
// Output 17

const arrayOfSheep = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

const countSheeps = arrayOfSheep =>
    arrayOfSheep.filter(item => item == true).length

console.log(countSheeps(arrayOfSheep))