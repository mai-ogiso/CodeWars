// Tidy Number (Special Numbers Series #9)(7kyu)
// Input tidyNumber (12)
/* Output true
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
*/

const tidyNumber = n => {
    let newArr = n.toString().split("");
    let result = true;
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] > newArr[i + 1] ? result = false : "";
    }
    return result
}

console.log(tidyNumber(1357))