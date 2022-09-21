// Stanton measure(7kyu)
// Input [1, 4, 3, 2, 1, 2, 3, 2]
// Output 3
// Because 1 occurs 2 times in the array and 2 occurs 3 times

const stantonMeasure = arr => {
    let oneOccurTimes = arr.filter(item => item === 1).length;
    return arr.filter(item => item === oneOccurTimes).length
  }
  
  console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))