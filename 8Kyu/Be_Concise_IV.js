// Be Concise IV - Index of an element in an array

const find = (a,e) => {
  return a.indexOf(e) ==-1 ? "Not found" : a.indexOf(e) ; 
}

console.log(find([2,3,5,7,11],5));
