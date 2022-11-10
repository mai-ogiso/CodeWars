// Largest Elements(7kyu)
// Input largest(2, [7,6,5,4,3,2,1])
/* Output [6,7]
Write a program that outputs the top n elements from a list.
*/

const largest = (n, xs) => {
    return xs
        .slice()
        .sort((a, b) => b - a)
        .slice(0, n)
        .reverse();
}

console.log(largest2(2, [7, 6, 5, 4, 3, 2, 1]))