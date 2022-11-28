// Looking for a benefactor(7kyu)
/* Input [14, 30, 5, 7, 9, 11, 15],30)
// Output
   149
The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
*/

function newAvg(arr, newavg) {
    let total = newavg * (arr.length + 1);
    let shortage = Math.ceil(total - arr.reduce((acc, cur) => acc + cur, 0))
    if (shortage < 0) {
        throw "Expected New Average is too low";
    }
    return shortage;
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 30))