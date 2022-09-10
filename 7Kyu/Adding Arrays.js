// Adding Arrays(7kyu)
// Input 
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// Output 
// "Just Live Life Man"

const arrAdder = arr => {
  let newArr = [...Array(arr[0].length)].fill("");
  for (let i = 0; i< arr.length ; i++){
    arr[i].map((item,index) => newArr[index] += item.trim())
  }
  return newArr.join(" ");
}

console.log(arrAdder([
['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
))