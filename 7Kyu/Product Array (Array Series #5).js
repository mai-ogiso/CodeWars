// Input [3,27,4,2]
// Output [216,24,162,324]

const productArray = array =>{
    let multiplyAll = array.reduce((acc,cur) => acc*cur,1);
    return array.map(item => multiplyAll/item);
  }
  
  console.log(productArray([3,27,4,2]))