// Char Code Calculation(7kyu)
// Input 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
/* Output
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
total2 = 656661

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x) {
    const calcDif = arr => arr
        .map(item => item.toString().split(""))
        .flat()
        .reduce((acc, cur) => acc + Number(cur), 0);
    const total1 = x.split("").map(item => item.charCodeAt(0));
    // I can't use replaceAll method on CodeWars
    // const total2 = total1.map(item => item.toString().replaceAll("7","1"));
    const total2 = total1.map(item => item.toString().replace(/7/g, "1"));
    return calcDif(total1) - calcDif(total2);
}

console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"))