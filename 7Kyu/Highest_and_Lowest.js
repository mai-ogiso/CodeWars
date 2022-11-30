// Highest and Lowest(7kyu)
/*In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.*/
// Input highAndLow("1 2 3 4 5");
// Output return "5 1"

const highAndLow = numbers => {
    let arr = numbers.split(" ")
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

let numbers = "1 2 3 4 5"
console.log(highAndLow(numbers))