// Length and two values(7kyu)
// Input (5, true, false)
// Output [true, false, true, false, true]

function alternate(n, firstValue, secondValue){
  return Array.from({length:n},(_,index) => !(index % 2) ? firstValue : secondValue)
}
