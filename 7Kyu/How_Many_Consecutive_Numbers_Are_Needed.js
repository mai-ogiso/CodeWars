// How many consecutive numbers are needed?(7kyu)
// Input [4,8,6]
// Output 5,7 is missing => 2
/*the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. */

function consecutive(arr) {
    return arr == 0 ? 0 : Math.max(...arr) - Math.min(...arr) + 1 - arr.length
  }
  