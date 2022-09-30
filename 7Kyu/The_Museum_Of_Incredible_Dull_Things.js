// The museum of incredible dull things(7kyu)
// Input [1,2,3,4,5]
// Output [2,3,4,5]

function removeSmallest(numbers) {
    let resultArr = Array.from(numbers);
    let minNum = Math.min(...numbers);
    let index = resultArr.indexOf(minNum);
    resultArr.splice(index,1)
    return resultArr
  }