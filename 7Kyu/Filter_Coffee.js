// Filter Coffee(7kyu)
// Input search(3, [6, 1, 2, 9, 2])
/* Output "1,2,2"
The first argument to your search function will be a number which represents your budget.
The second argument will be an array of coffee bean prices.
Your 'search' function should return the stores that sell coffee within your budget.
*/

const search = (budget, prices) =>
    prices.filter(item => item <= budget)
        .sort((a, b) => a - b)
        .join();

console.log(search(3, [6, 1, 2, 9, 2]));