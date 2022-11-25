// List of Presents(7kyu)
/* Input 
 Maximum budget: 20
 Gift List: [13, 2, 4, 6, 1]
Output 
 Should return 4. 
*/

function howManyGifts(maxBudget, gifts) {
    // sort gifts
    let sortedArr = Array.from(gifts).sort((a, b) => a - b);
    // declaration
    let totalCost = 0;
    let presentsNum = 0

    for (let i = 0; i < sortedArr.length; i++) {
        totalCost += sortedArr[i];
        if (totalCost > maxBudget) {
            return presentsNum
        }
        presentsNum += 1;
    }
    return presentsNum
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]))
