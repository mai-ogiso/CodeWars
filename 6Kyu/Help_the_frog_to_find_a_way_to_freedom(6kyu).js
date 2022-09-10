// Help the frog to find a way to freedom(6kyu)
// Input array = [1, 2, 1, 5]; 
// Output jumps = 3  (1 -> 2 -> 5 -> <jump out>)

/* My tactics are as follows
1) Check whether the flog moves or not.
1) Check the first position where the flog is.
2) Loop until the flog will jump out.
3) If the flog will come to the same place where it has come before, the loop is infinite.
*/


const solution = array => {
  let currentIndex = 0;
  let nextDirection = 0;
  let nextIndex = 0;
  let frog = array[currentIndex];
  let arrRange = array.length;
  let count = 0;
  let indexArr =[];
  let stopFlg = false;

  // Check whether the flog moves or not
  // If the frog won't move, return -1
  if (frog === 0) {
    count = -1;
    return count;
  }

  // Check the first Position
  // If the frog is not between the range, return 1
  if (frog < 1 || frog >= arrRange){
    count = 1;
    return count;
  }

  // Loop
  // If the stopFlg is true, stop the loop
  while (stopFlg === false){

    // Check the nextDirection and nextIndex
    nextDirection = array[currentIndex];
    nextIndex = currentIndex + nextDirection;

    // If the frog is not between the range, 
    // ====> stopFlg = true, stop the loop 
    if (nextIndex < 0 || nextIndex >= arrRange ){
      stopFlg = true;
    }

    //In case of infinite loop
    if ( indexArr.indexOf(nextIndex) != -1){
      count = -1;
      break;
    } else{
      indexArr.push(currentIndex);
      currentIndex = nextIndex;
    }

    count ++;
  }

  return count;
}

console.log (solution([1,2,1,5]))