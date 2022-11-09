// Fizz Buzz(7kyu)
// Input fizzbuzz(3)
/* Output [1, 2, "Fizz"]
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
*/

function fizzbuzz(n) {
    return Array.from({ length: n }, (_, index) => index + 1)
        .map(item => item % 5 === 0 && item % 3 === 0 ? "FizzBuzz" :
            item % 5 === 0 ? "Buzz" :
                item % 3 === 0 ? "Fizz" : item)
}

console.log(fizzbuzz(20))