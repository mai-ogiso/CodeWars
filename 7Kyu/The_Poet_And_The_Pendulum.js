// The Poet And The Pendulum(7kyu)
// Input [6, 6, 8 ,5 ,10]
// Output [10, 6, 5, 6, 8]

function pendulum(values) {
    values.sort((a,b) => a-b);
    let leftArr = values.filter((_,index) => (index+1) % 2).reverse();
    let rightArr = values.filter((_,index) => !((index+1) % 2))
      return leftArr.concat(rightArr)
  }