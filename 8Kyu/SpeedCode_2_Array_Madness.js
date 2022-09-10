// Input arrayMadness([4, 5], [2, 3])
// Output 4**2 + 5**2 > 2**3 + 3**3

function arrayMadness(a, b) {
  let square = a.reduce((acc,cur) => acc + cur**2 , 0);
  let cube = b.reduce((acc,cur) => acc + cur **3 , 0)
  return square > cube ? true :false;
}

console.log (arrayMadness([4, 5], [2, 3]))