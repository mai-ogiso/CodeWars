// Working with arrays II(7kyu)

function removeNthElement(arr, n){
  return arr.filter((_,index) => index !== n)
}