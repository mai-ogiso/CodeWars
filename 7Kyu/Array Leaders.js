// Array Leaders(7kyu)
// Input [5,-2,2]
// Output [5,2]

const arrayLeaders = numbers => {
  return numbers.filter((item,index) => 
    item > numbers.slice(index+1).reduce((a,b) => a+b,0))
}

console.log(arrayLeaders([5,-2,2]))