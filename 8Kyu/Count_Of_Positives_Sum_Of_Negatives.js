// Count of positives / sum of negatives(8kyu)
// Input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// Output [10, -65]

const countPositivesSumNegatives = input => {
  /* inputがArrayかどうか調べる */
  if (Array.isArray(input)){
    let positiveNum = input.filter(item => item >0).length;
    let negativeSum = input.filter(item => item<0).reduce((a,b) => a+b,0);
    if (positiveNum == 0 && negativeSum ==0){
      return [];
    }
    return Array.of(positiveNum,negativeSum);
  }else{
    return [];
  }
}