// The Office I - Outed(7kyu)
// Input
/* Output
Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

function outed(meet, boss) {
    // create an array to show member's name and search an index of boss
    // [ 'tim','jim','randy','sandy','andy','katie','laura','saajid','alex','john','mr' ]
    let bossIndex = Object.keys(meet).indexOf(boss)

    // create an array to show member's score
    // [ 0, 2, 0, 7, 0, 5, 1, 2, 3, 2, 0 ]
    let scoreArr = Object.values(meet);
    scoreArr.splice(bossIndex, 1, 2 * scoreArr[bossIndex]);

    let totalScore = scoreArr.reduce((acc, cur) => acc + cur, 0)
    return totalScore / scoreArr.length <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}

console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'))
